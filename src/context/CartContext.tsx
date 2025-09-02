import { createContext, useContext, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

type CartItem = {
  id: string;
  name: string;
  price: number;
  duration: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItemFromCart: (name: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load from sessionStorage on first render
  useEffect(() => {
    const storedCart = sessionStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save to sessionStorage whenever cart changes
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
    // toast.success(`${item.name} added to cart ✅`);
  };

  const removeItemFromCart = (name: string) => {
    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.name === name);
      if (index === -1) return prev;

      const updated = [...prev];
      updated.splice(index, 1);
      toast.info(`${name} removed from cart ❌`);
      return updated;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    sessionStorage.removeItem("cart");
    toast.warning("Cart cleared 🛒");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeItemFromCart, clearCart }}
    >
      {children}
      {/* Toasts at the top */}
      <Toaster richColors position="top-right" />
    </CartContext.Provider>
  );
}
