"use client";

import React, { useEffect, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import { AccessTime, AttachMoney } from "@mui/icons-material";
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
                p: 3,
                boxShadow: 4,
                borderRadius: 3,
                background: "linear-gradient(to right, #fff, #fdf7f1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#2c3e50", fontWeight: "bold" }}
                  >
                    {service.name}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Chip
                      icon={<AccessTime />}
                      label={`${service.duration} min`}
                      variant="outlined"
                      sx={{ borderColor: "#a67c5b", color: "#a67c5b" }}
                    />
                    <Chip
                      icon={<AttachMoney />}
                      label={`£${service.price}`}
                      sx={{ backgroundColor: "#a67c5b", color: "white" }}
                    />
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        mt: 1,
                        borderColor: "#a67c5b",
                        color: "#a67c5b",
                        "&:hover": {
                          backgroundColor: "#f5eee7",
                          borderColor: "#a67c5b",
                        },
                      }}
                      onClick={() => onAddToCart(service)}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ color: "#7f8c8d", mb: 3 }}>
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

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

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

        {loadingServices && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}

        {!loadingServices &&
          Object.keys(groupedServices).map((category, idx) => (
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
