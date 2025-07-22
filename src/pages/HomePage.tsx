import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Rating,
} from "@mui/material";
import {
  Spa,
  Star,
  LocalFlorist,
  Psychology,
  Healing,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  const services = [
    {
      id: "facials",
      title: "Facials",
      description: "Luxury skincare treatments for radiant, healthy skin",
      icon: <Spa sx={{ fontSize: 40, color: "#a67c5b" }} />,
    },
    {
      id: "scalp",
      title: "Scalp & Head Spa",
      description: "Japanese-inspired treatments for ultimate relaxation",
      icon: <Psychology sx={{ fontSize: 40, color: "#a67c5b" }} />,
    },
    {
      id: "body",
      title: "Body Treatments",
      description: "Sculpting and skin tightening therapies",
      icon: <Healing sx={{ fontSize: 40, color: "#a67c5b" }} />,
    },
    {
      id: "massage",
      title: "Massage",
      description: "ASMR head massage for deep relaxation",
      icon: <LocalFlorist sx={{ fontSize: 40, color: "#a67c5b" }} />,
    },
  ];

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

  const features = ["Premium Products", "Expert Staff", "Relaxing Environment"];

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
          <source src="/video.mp4" type="video/mp4" />
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
              to="/booking"
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
              Book Now
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
          <Box textAlign="center" mb={6}>
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
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              Experience our holistic approach to skincare and wellness in a
              serene, luxurious environment. We combine premium products with
              expert techniques to deliver results-driven treatments that
              nurture both your skin and spirit.
            </Typography>
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
              alignItems: "stretch",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                style={{ width: "100%", maxWidth: 280 }}
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
                    <Box mb={2}>{service.icon}</Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ color: "#2c3e50" }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#7f8c8d", mb: 3 }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                  <Button
                    component={Link}
                    to={`/services#${service.id}`}
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

      {/* Footer */}
      {/* <Box sx={{ backgroundColor: "#e1c9b3", color: "black", py: 6 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <Box>
              <Typography variant="h6" gutterBottom>
                Contact Info
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                123 High Street, Loughborough
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Phone: 01509 123456
              </Typography>
              <Typography variant="body2">
                Email: info@loughskin.co.uk
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Business Hours
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Monday: Closed
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Tuesday: 10:30 - 18:30
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Wednesday: 10:30 - 18:30
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Thursday: 10:30 - 18:30
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Friday: 10:30 - 18:30
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Saturday: 11:00 - 18:00
              </Typography>
              <Typography variant="body2">Sunday: 11:00 - 18:00</Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Additional Information
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Verified business by Fresha
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Instant Confirmation
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Pay by app
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Wheelchair accessible
              </Typography>
              <Typography variant="body2">• Parking available</Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  href="https://instagram.com"
                  target="_blank"
                  sx={{ color: "black", minWidth: "auto" }}
                >
                  Instagram
                </Button>
                <Button
                  href="https://facebook.com"
                  target="_blank"
                  sx={{ color: "black", minWidth: "auto" }}
                >
                  Facebook
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box> */}
    </Box>
  );
}
