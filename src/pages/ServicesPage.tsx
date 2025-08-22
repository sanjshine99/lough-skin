import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  IconButton,
  Button,
} from "@mui/material";
import { AccessTime, ShoppingCart } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { easeOut, motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import axios from "axios";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: easeOut },
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
                "&:hover": { transform: "translateY(-4px)" },
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
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Chip
                      icon={<AccessTime sx={{ fontSize: 18 }} />}
                      label={`${service.duration} min`}
                      variant="outlined"
                      sx={{
                        height: 32,
                        borderColor: "#a67c5b",
                        color: "#a67c5b",
                        fontSize: 14,
                      }}
                    />
                    <Chip
                      label={`£${service.price}`}
                      sx={{
                        height: 32,
                        backgroundColor: "#a67c5b",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 14,
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
  const [loadingServices, setLoadingServices] = useState(true);
  const [error, setError] = useState("");
  const [services, setServices] = useState<any[]>([]);

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

  const containerRef: any = useRef(null);

  const scroll = (direction: any) => {
    if (containerRef.current) {
      const scrollAmount = 150; // adjust scroll step
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const groupedServices = useMemo(() => {
    return services.reduce((acc: Record<string, any[]>, service) => {
      const category = service.category || "Other";
      if (!acc[category]) acc[category] = [];
      acc[category].push(service);
      return acc;
    }, {});
  }, [services]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ py: 8, background: "#fff8f3" }}>
      <Container maxWidth="lg">
        {/* Horizontal Scrollable Category Bar */}

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

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, pb: 5 }}>
          {/* Left Arrow */}
          <IconButton onClick={() => scroll("left")} sx={{ color: "#a67c5b" }}>
            <ArrowBackIos />
          </IconButton>

          {/* Scrollable Buttons Container */}
          <Box
            ref={containerRef}
            sx={{
              display: "flex",
              overflow: "hidden", // hide native scrollbar
              gap: 2,
              flexGrow: 1,
            }}
          >
            {Object.keys(groupedServices).map((category) => {
              const id = category.toLowerCase().replace(/\s+/g, "-");
              return (
                <Button
                  key={id}
                  variant="outlined"
                  onClick={() => handleScrollTo(id)}
                  sx={{
                    flexShrink: 0,
                    borderColor: "#a67c5b",
                    color: "#a67c5b",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#f5eee7",
                      borderColor: "#a67c5b",
                    },
                  }}
                >
                  {category}
                </Button>
              );
            })}
          </Box>

          {/* Right Arrow */}
          <IconButton onClick={() => scroll("right")} sx={{ color: "#a67c5b" }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>

        {loadingServices && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}

        {!loadingServices &&
          Object.keys(groupedServices).map((category) => (
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
