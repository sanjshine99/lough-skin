import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../context/CartContext";
import axios from "axios";

export default function CartAndCheckout() {
  // const { cartItems } = useCart();
  const [services, setServices] = useState<any[]>([]);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<
    "success" | "error" | null
  >(null);
  const [snackOpen, setSnackOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const { cartItems, removeItemFromCart, clearCart } = useCart();

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const groupServices = (items: any[]) => {
    const grouped: { [key: string]: any } = {};
    items.forEach((item) => {
      const key = item.name;
      const price =
        typeof item.price === "string"
          ? parseFloat(item.price.replace("\u00a3", ""))
          : item.price;

      if (grouped[key]) {
        grouped[key].quantity += 1;
        grouped[key].totalPrice += price;
      } else {
        grouped[key] = {
          ...item,
          unitPrice: price,
          totalPrice: price,
          quantity: 1,
        };
      }
    });
    return Object.values(grouped);
  };

  useEffect(() => {
    setServices(groupServices(cartItems));
  }, [cartItems]);

  const handleRemove = (name: string) => {
    removeItemFromCart(name);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const total = services.reduce((acc: number, s: any) => acc + s.totalPrice, 0);

  const handleConfirmBooking = async () => {
    const bookingData = {
      userId: "64d2024be1e3d9d5a45678ab", // Replace with dynamic user ID if available
      services: services.map((s) => ({
        serviceId: s._id, // Assuming `s.id` is the correct service identifier
        name: s.name,
        price: s.unitPrice,
        duration: s.duration,
      })),
      totalAmount: total,
      notes: customerInfo.notes,
      customerInfo: {
        name: customerInfo.name,
        email: customerInfo.email,
        phone: customerInfo.phone,
      },
    };

    try {
      setLoading(true);

      let paymentIntentId = null;

      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/create-payment-intent`,
        {
          ...bookingData,
          paymentIntentId,
        }
      );

      if (res.status === 200 || res.status === 201) {
        window.open(res.data.session_url, "_blank");
        clearCart(); // 👈 this line is new
        setBookingStatus("success");
        setSnackOpen(true);
        setStep(4);
      } else {
        throw new Error("Booking failed");
      }
    } catch (err) {
      console.error(err);
      setBookingStatus("error");
      setSnackOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Box flex={2}>
            {step === 1 && (
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6">Selected Services</Typography>
                  <List>
                    {services.map((service: any, idx: number) => (
                      <ListItem
                        key={idx}
                        secondaryAction={
                          <IconButton
                            edge="end"
                            onClick={() => handleRemove(service.name)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        }
                      >
                        <ListItemText
                          primary={`${service.name}${
                            service.quantity > 1 ? ` x${service.quantity}` : ""
                          }`}
                          secondary={`£ ${service.totalPrice.toLocaleString()}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle1">
                    Total: £ {total.toLocaleString()}
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() => setStep(2)}
                    disabled={services.length === 0}
                  >
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6">Your Details</Typography>
                  <Stack spacing={2}>
                    <TextField
                      required
                      label="Name"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      fullWidth
                    />
                    <TextField
                      required
                      label="Email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      fullWidth
                    />
                    <TextField
                      required
                      label="Phone"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      fullWidth
                    />
                    <TextField
                      label="Address"
                      name="address"
                      value={customerInfo.address}
                      onChange={handleInputChange}
                      fullWidth
                    />
                    <TextField
                      label="Notes or Add-ons"
                      name="notes"
                      value={customerInfo.notes}
                      onChange={handleInputChange}
                      fullWidth
                    />

                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Select Date *"
                        value={selectedDate}
                        onChange={(newDate) => {
                          setSelectedDate(newDate);
                          setSelectedSlot("");
                        }}
                        disablePast
                      /> */}
                    {/* <TextField
                        fullWidth
                        label="Select Date"
                        value={selectedDate}
                        onChange={(e: any) => setSelectedDate(e.target.value)}
                      /> */}
                    {/* </LocalizationProvider> */}

                    {/* {selectedDate && (
                      <TextField
                        required
                        select
                        label="Select Time Slot"
                        value={selectedSlot}
                        onChange={(e) => setSelectedSlot(e.target.value)}
                        fullWidth
                      >
                        {availableSlots.length > 0 ? (
                          availableSlots.map((slot: any, index: any) => (
                            <MenuItem key={index} value={slot}>
                              {slot}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem disabled>No time slots available</MenuItem>
                        )}
                      </TextField>
                    )} */}

                    <Button
                      variant="contained"
                      onClick={() => setStep(3)}
                      disabled={
                        !customerInfo.name ||
                        !customerInfo.email ||
                        !customerInfo.phone
                        // !selectedSlot ||
                        // !selectedDate
                      }
                    >
                      Continue to Payment
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            )}

            {step === 3 && (
              <Card sx={{ m: 3, p: 2 }}>
                <CardContent>
                  <Typography variant="h6">Payment Method</Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      {/* Stripe */}
                      <Card
                        sx={{
                          border:
                            paymentMethod === "stripe"
                              ? "2px solid #28c76f"
                              : "1px solid #ddd",
                          borderRadius: "8px",
                          p: 2,
                          mr: 2,
                          display: "flex",
                          alignItems: "center",
                          width: 180,
                        }}
                      >
                        <FormControlLabel
                          value="stripe"
                          control={<Radio />}
                          label={
                            <img
                              src="stripe.png" // Replace with your actual path
                              alt="Stripe"
                              style={{ height: "24px" }}
                            />
                          }
                        />
                      </Card>

                      {/* Cash on Delivery */}
                      <Card
                        sx={{
                          border:
                            paymentMethod === "cod"
                              ? "2px solid #28c76f"
                              : "1px solid #ddd",
                          borderRadius: "8px",
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          width: 180,
                        }}
                      >
                        <FormControlLabel
                          value="cod"
                          control={<Radio />}
                          label={
                            <Typography
                              sx={{ fontWeight: "bold", color: "#424242" }}
                            >
                              CASH ON <br /> DELIVERY
                            </Typography>
                          }
                        />
                      </Card>
                    </RadioGroup>
                  </FormControl>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 3 }}
                    onClick={handleConfirmBooking}
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress size={24} />
                    ) : (
                      "Confirm Booking"
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}

            {step === 4 && bookingStatus === "success" && (
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h5" color="success.main" gutterBottom>
                    Booking Confirmed!
                  </Typography>
                  <Typography>
                    Thank you, {customerInfo.name}. Your booking is successfully
                    recorded.
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Box>

          {/* Summary Panel */}
          <Box flex={1}>
            <Card sx={{ position: "sticky", top: 80 }}>
              <CardContent>
                <Typography variant="h6">Cart Summary</Typography>
                <Divider sx={{ my: 1 }} />
                {services.map((s: any, i: number) => (
                  <Typography key={i} variant="body2">
                    {s.name}
                    {s.quantity > 1 ? ` x${s.quantity}` : ""}: £{" "}
                    {s.totalPrice.toLocaleString()}
                  </Typography>
                ))}
                <Divider sx={{ my: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">
                  Total: £ {total.toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Container>

      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert
          severity={bookingStatus === "success" ? "success" : "error"}
          onClose={() => setSnackOpen(false)}
        >
          {bookingStatus === "success"
            ? "Booking confirmed!"
            : "Booking failed. Try again."}
        </Alert>
      </Snackbar>
    </Box>
  );
}
