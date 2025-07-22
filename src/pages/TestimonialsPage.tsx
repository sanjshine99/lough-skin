"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Rating,
  Avatar,
} from "@mui/material";
import { easeOut, motion } from "framer-motion";

export default function TestimonialsPage() {
  const testimonials = [
    {
      text: "Best facial I've ever had—my skin's never felt so radiant!",
      author: "Emily Johnson",
      location: "Loughborough",
      rating: 5,
      service: "Luxury Facial",
    },
    {
      text: "The Japanese HeadSpa treatment was absolutely divine.",
      author: "Sarah Mitchell",
      location: "Leicester",
      rating: 5,
      service: "Japanese HeadSpa",
    },
    {
      text: "Professional, relaxing, and the results speak for themselves.",
      author: "Jessica Brown",
      location: "Loughborough",
      rating: 5,
      service: "Dermaplaning",
    },
    {
      text: "The body sculpting treatment exceeded my expectations.",
      author: "Amanda Wilson",
      location: "Nottingham",
      rating: 5,
      service: "Body Sculpting",
    },
    {
      text: "The free consultation helped me understand my skin's needs.",
      author: "Rachel Davis",
      location: "Loughborough",
      rating: 5,
      service: "Skin Consultation",
    },
    {
      text: "The ASMR head massage was incredibly relaxing.",
      author: "Lisa Thompson",
      location: "Derby",
      rating: 5,
      service: "ASMR Head Massage",
    },
    {
      text: "Exceptional service from start to finish.",
      author: "Sophie Clarke",
      location: "Leicester",
      rating: 5,
      service: "HeadSpa + Facial",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: easeOut,
      },
    }),
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            gutterBottom
            sx={{ color: "#2c3e50", mb: 2 }}
          >
            Client Testimonials
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ color: "#7f8c8d", mb: 6 }}
          >
            Hear what our valued clients have to say about their experience at
            Lough Skin
          </Typography>
        </motion.div>

        {/* Testimonials Grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <Card
                sx={{
                  maxWidth: 400,
                  p: 3,
                  boxShadow: 3,
                  borderRadius: 3,
                  backgroundColor: "white",
                  transition: "0.3s",
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        backgroundColor: "#a67c5b",
                        mr: 2,
                        fontSize: "1.5rem",
                      }}
                    >
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ color: "#2c3e50", fontWeight: "bold" }}
                      >
                        {testimonial.author}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#7f8c8d" }}>
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>

                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />

                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: "italic",
                      mb: 3,
                      color: "#2c3e50",
                      lineHeight: 1.6,
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>

                  <Box
                    sx={{
                      backgroundColor: "#f8f9fa",
                      p: 2,
                      borderRadius: 2,
                      borderLeft: "4px solid #a67c5b",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#a67c5b", fontWeight: "bold" }}
                    >
                      Service: {testimonial.service}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Call to Action Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box
            sx={{
              textAlign: "center",
              mt: 8,
              p: 4,
              backgroundColor: "#2c3e50",
              color: "white",
              borderRadius: 3,
              boxShadow: 2,
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              Ready to Experience Lough Skin?
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Join our satisfied clients and discover the difference premium
              skincare can make
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "#a67c5b",
                    fontWeight: "bold",
                    transition: "0.4s ease",
                  }}
                >
                  5.0
                </Typography>
              </motion.div>
              <Box>
                <Rating value={5} readOnly size="large" />
                <Typography variant="body1">
                  Based on {testimonials.length}+ reviews
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div> */}
      </Container>
    </Box>
  );
}
