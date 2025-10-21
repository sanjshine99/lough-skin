import React, { useEffect, useMemo, useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import { AccessTime, ShoppingCart } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { easeOut, motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import axios from "axios";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

const ServiceSection = React.memo(
  ({
    id,
    title,
    tagline,
    services,
    onAddToCart,
  }: {
    id: string;
    title: string;
    tagline?: string;
    services: any[];
    onAddToCart: (service: any) => void;
  }) => (
    <Box id={id} sx={{ mb: 8 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Typography variant="h4" sx={{ color: "#2c3e50", mb: 1 }}>
          {title}
        </Typography>
        {tagline && (
          <Typography variant="h6" sx={{ color: "#7f8c8d", mb: 4 }}>
            {tagline}
          </Typography>
        )}
      </motion.div>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {services.map((service, index) => (
          <motion.div
            key={service._id || index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={fadeIn}
          >
            <Card
              sx={{
                p: { xs: 2, sm: 3 }, // smaller padding on mobile
                boxShadow: 4,
                borderRadius: 3,
                background: "linear-gradient(to right, #fff, #fdf7f1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: { sm: "translateY(-4px)" }, // only lift on non-mobile
                },
              }}
            >
              <CardContent sx={{ p: 0 }}>
                {/* Header Section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" }, // stack on mobile
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center" },
                    mb: 2,
                    gap: { xs: 1.5, sm: 0 },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#2c3e50",
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    }}
                  >
                    {service.name}
                  </Typography>

                  {/* Right-side controls */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      alignItems: "center",
                      justifyContent: { xs: "flex-start", sm: "flex-end" },
                    }}
                  >
                    <Chip
                      icon={<AccessTime sx={{ fontSize: 18 }} />}
                      label={`${service.duration} min`}
                      variant="outlined"
                      sx={{
                        height: 32,
                        borderColor: "#a67c5b",
                        color: "#a67c5b",
                        fontSize: { xs: 13, sm: 14 },
                      }}
                    />
                    <Chip
                      label={`£${service.price}`}
                      sx={{
                        height: 32,
                        backgroundColor: "#a67c5b",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: { xs: 13, sm: 14 },
                      }}
                    />
                    <IconButton
                      sx={{
                        height: 32,
                        width: 32,
                        border: "1px solid #a67c5b",
                        color: "#a67c5b",
                        "&:hover": {
                          backgroundColor: "#f5eee7",
                          borderColor: "#a67c5b",
                        },
                      }}
                      onClick={() => onAddToCart(service)}
                    >
                      <ShoppingCart sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Box>
                </Box>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#7f8c8d",
                    mb: 2,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  )
);

export default function ServicesPage() {
  const location = useLocation();
  const { addToCart } = useCart();
  const [loadingServices, setLoadingServices] = React.useState(true);
  const [error, setError] = React.useState("");
  const [services, setServices] = React.useState<any[]>([]);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const catBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loadingServices) {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          // Small delay ensures rendering is done
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 200);
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [loadingServices, location]);

  useEffect(() => {
    const fetchServices = async () => {
      setLoadingServices(true);
      setError("");
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/services`
        );
        setServices(res.data);
      } catch (e) {
        setError("Failed to load services.");
      } finally {
        setLoadingServices(false);
      }
    };

    fetchServices();
  }, []);

  // useEffect(() => {
  //   if (location.hash) {
  //     const id = location.hash.replace("#", "");
  //     const el = document.getElementById(id);
  //     if (el) {
  //       el.scrollIntoView({ behavior: "smooth" });
  //     }
  //   } else {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }
  // }, [location]);

  // Group services by category

  const groupedServices = useMemo(() => {
    return services.reduce((acc: Record<string, any[]>, service) => {
      const category = service.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(service);
      return acc;
    }, {});
  }, [services]);

  // Desired category order
  const categoryOrder = [
    "Consultation",
    "Japanese inspired Luxury HeadSpa",
    "ASMR Head massage",
    "Facials",
    "Facial sculpt",
    "Massages",
    "Body Sculpt",
    "Skin tightening",
    "Wood therapy",
    "Add ons",
  ];

  // Sort categories: first by predefined order, then any extras alphabetically
  const categories = Object.keys(groupedServices).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);

    if (indexA === -1 && indexB === -1) return a.localeCompare(b); // both not in list
    if (indexA === -1) return 1; // a after ordered ones
    if (indexB === -1) return -1; // b after ordered ones
    return indexA - indexB; // keep defined order
  });

  return (
    <Box sx={{ py: 8, background: "#fff8f3" }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ color: "#2c3e50", mb: 6, fontWeight: 600 }}
          >
            Our Services
          </Typography>
        </motion.div>

        {/* Sticky Category Bar */}
        {categories.length > 0 && (
          <Box
            ref={catBarRef}
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 5,
              py: 2,
              mb: 4,
              background: "rgba(255,248,243,0.9)",
              backdropFilter: "saturate(120%) blur(6px)",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
              sx={{ mb: 1 }}
            >
              {categories.map((cat) => (
                <Chip
                  key={cat}
                  label={cat}
                  clickable
                  onClick={() => {
                    setActiveCategory(cat);
                    const el = document.getElementById(
                      cat.toLowerCase().replace(/\s+/g, "-")
                    );
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  color={activeCategory === cat ? "primary" : undefined}
                  variant={activeCategory === cat ? "filled" : "outlined"}
                  sx={{
                    borderColor: "#a67c5b",
                    color: activeCategory === cat ? "white" : "#a67c5b",
                    backgroundColor:
                      activeCategory === cat ? "#a67c5b" : "transparent",
                    "&:hover": {
                      backgroundColor:
                        activeCategory === cat ? "#916748" : "#f5eee7",
                    },
                  }}
                />
              ))}
            </Stack>
            <Divider sx={{ opacity: 0.5 }} />
          </Box>
        )}

        {loadingServices && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}

        {!loadingServices &&
          categories.map((category, idx) => (
            <ServiceSection
              key={category}
              id={category.toLowerCase().replace(/\s+/g, "-")}
              title={category}
              services={groupedServices[category]}
              onAddToCart={addToCart}
            />
          ))}
      </Container>
    </Box>
  );
}
