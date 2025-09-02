import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Rating,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  // const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);

  const testimonials = [
    {
      text: "Best facial I've ever had—my skin's never felt so radiant!",
      author: "Emily",
      location: "Loughborough",
      rating: 5,
    },
    {
      text: "The Japanese HeadSpa treatment was absolutely divine. I felt completely renewed.",
      author: "Sarah",
      location: "Leicester",
      rating: 5,
    },
    {
      text: "Professional, relaxing, and the results speak for themselves. Highly recommend!",
      author: "Jessica",
      location: "Loughborough",
      rating: 5,
    },
  ];

  const [categories, setCategories] = useState([
    {
      id: "facial-sculpt",
      name: "Facial sculpt",
      description:
        "Rejuvenate your facial contours and enhance natural symmetry with our expert facial sculpting treatments.",
    },
    {
      id: "consultation",
      name: "Consultation",
      description:
        "Personalized skin and wellness consultations to tailor the perfect treatment plan for your needs.",
    },
    {
      id: "japanese-headspa",
      name: "Japanese inspired Luxury HeadSpa",
      description:
        "Unwind with our luxurious Japanese-inspired Head Spa experience, where your scalp receives gentle care using exquisite oils, various massage tools, scalp exfoliation, herbal soup & steam treatment, a refreshing wash followed by a conditioning mask.",
    },
    {
      id: "asmr-head-massage",
      name: "ASMR Head massage",
      description:
        "ASMR head massage combines the tingling sensation of using different tools with the benefits of head massage, offering relaxation, stress reduction, and potential mood improvements. It can also aid in better sleep quality and stimulate circulation.",
    },
    {
      id: "facials",
      name: "Facials",
      description:
        "Discover the wonders of our facial treatments, crafted to meet a variety of skincare needs. Featuring a soothing facial massage, advanced LED light therapy for radiant skin, and a calming head massage to ease tension. Elevate your self care routine!",
    },
    {
      id: "body-sculpt",
      name: "Body Sculpt",
      description:
        "Enhance your natural contours, reduce stubborn fat, tighten skin, and boost confidence with non-invasive treatments that deliver quick, effective results—no downtime required.",
    },
    {
      id: "skin-tightening",
      name: "Skin tightening",
      description:
        "This non-surgical treatment uses an electromagnetic device to gently heat the deeper layers of the skin, stimulating collagen, elastin, and new cell production. The result is firmer, tighter, and more lifted skin—with no downtime.",
    },
    {
      id: "wood-therapy",
      name: "Wood therapy",
      description:
        "Wood Therapy (Maderotherapy) is a massage technique that uses specially designed wooden tools to break down fat and cellulite, stimulate blood circulation, smooth the skin’s texture, and reduce stress—offering both body-sculpting and relaxation benefits.",
    },
    {
      id: "massages",
      name: "Massages",
      description:
        "Relax and rejuvenate with a variety of massage techniques designed to relieve tension, improve circulation, and promote overall wellness.",
    },
    {
      id: "add-ons",
      name: "Add ons",
      description:
        "Enhance your treatments with our range of add-ons including targeted therapies, extra pampering, and luxurious enhancements.",
    },
  ]);

  const features = ["Natural Products", "Expert Staff", "Relaxing Environment"];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/gallery/video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.4)",
            zIndex: 0,
          }}
        />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Container maxWidth="md" sx={{ zIndex: 1 }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 300, mb: 3 }}
            >
              Luxury Skincare & Wellness in Loughborough
            </Typography>
            <Button
              component={Link}
              to="/services"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#a67c5b",
                color: "white",
                px: 4,
                py: 2,
                fontSize: "1.2rem",
                "&:hover": {
                  backgroundColor: "#8b6f4e",
                },
              }}
            >
              Services
            </Button>
          </Container>
        </motion.div>
      </Box>

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            gap={4}
          >
            {/* Left: Image */}
            <Box
              component="img"
              src="/gallery/13.jpeg" // change this path
              alt="Welcome to Lough Skin"
              sx={{
                width: { xs: "100%", md: "50%" },
                borderRadius: 3,
                boxShadow: 3,
              }}
            />

            {/* Right: Text */}
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ color: "#2c3e50", mb: 3 }}
              >
                Welcome to Lough Skin
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#7f8c8d",
                  maxWidth: "600px",
                  lineHeight: 1.8,
                  mx: { xs: "auto", md: "0" },
                }}
              >
                Experience our holistic approach to skincare and wellness in a
                serene, luxurious environment. We combine natural products with
                expert techniques to deliver results-driven treatments that
                nurture both your skin and spirit.
              </Typography>
            </Box>
          </Box>
        </Container>
      </motion.div>

      {/* Services */}
      <Box sx={{ backgroundColor: "#f8f9fa", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ color: "#2c3e50", mb: 6 }}
          >
            Our Services
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {categories.map((category: any, index: any) => (
              <motion.div
                key={category._id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                  flex: "1 1 calc(25% - 24px)", // 4 per row, minus gap
                  maxWidth: 280, // optional, to limit card width
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center",
                    p: 3,
                    boxShadow: 3,
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ color: "#2c3e50" }}
                    >
                      {category.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#7f8c8d", mb: 3 }}
                    >
                      {category.description}
                    </Typography>
                  </CardContent>
                  <Button
                    component={Link}
                    to={`/services#${category.id}`}
                    variant="outlined"
                    sx={{
                      borderColor: "#a67c5b",
                      color: "#a67c5b",
                      "&:hover": {
                        borderColor: "#8b6f4e",
                        backgroundColor: "#a67c5b",
                        color: "white",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ color: "#2c3e50", mb: 6 }}
        >
          Why Choose Lough Skin
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center", minWidth: 200 }}>
                <Star sx={{ fontSize: 50, color: "#a67c5b", mb: 2 }} />
                <Typography variant="h6" sx={{ color: "#2c3e50" }}>
                  {feature}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* Testimonials */}
      <Box sx={{ backgroundColor: "#f8f9fa", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ color: "#2c3e50", mb: 6 }}
          >
            What Our Clients Say
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                style={{ width: "100%", maxWidth: 350 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 3,
                    boxShadow: 3,
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{ mb: 2 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ fontStyle: "italic", mb: 2, color: "#2c3e50" }}
                    >
                      "{testimonial.text}"
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#a67c5b", fontWeight: "bold" }}
                    >
                      — {testimonial.author}, {testimonial.location}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
