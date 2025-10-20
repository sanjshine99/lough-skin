import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Rating,
  Grid,
  Paper,
  Chip,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Verified,
  Favorite,
  People,
  Star,
  AccessTime,
  Email,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import SpaIcon from "@mui/icons-material/Spa";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import emailjs from "@emailjs/browser";

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const stats = [
    { label: "Happy Clients", value: "500+" },
    { label: "Years Experience", value: "5+" },
    { label: "Natural Results", value: "100%" },
  ];

  const media: any = [
    ...Array.from({ length: 14 }, (_, i) => ({
      src: `/gallery/${i + 1}.jpeg`,
      type: "image",
    })),
    ...Array.from({ length: 8 }, (_, i) => ({
      src: `/gallery/${15 + i}.mp4`,
      type: "video",
    })),
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

  const features = [
    {
      icon: <SpaIcon sx={{ fontSize: 60, color: "#a67c5b" }} />,
      title: "Natural Products",
      desc: "We use only the finest natural and organic skincare products, ensuring your skin receives gentle yet effective care.",
      img: "/gallery/natural.jpg",
    },
    {
      icon: <PeopleAltIcon sx={{ fontSize: 60, color: "#a67c5b" }} />,
      title: "Expert Staff",
      desc: "Our professional therapists and skincare experts bring years of experience to deliver trusted and tailored treatments.",
      img: "/gallery/expert.jpg",
    },
    {
      icon: <SelfImprovementIcon sx={{ fontSize: 60, color: "#a67c5b" }} />,
      title: "Relaxing Environment",
      desc: "Immerse yourself in a calm and luxurious setting designed to refresh your body, mind, and soul.",
      img: "/gallery/relax.jpg",
    },
  ];

  useEffect(() => {
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

    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/categories`)
      .then((res) => {
        const fetchedCategories = res.data || [];

        // Sort categories by predefined order, others go below alphabetically
        const sortedCategories = fetchedCategories.sort((a: any, b: any) => {
          const nameA = typeof a === "string" ? a : a.name;
          const nameB = typeof b === "string" ? b : b.name;

          const indexA = categoryOrder.indexOf(nameA);
          const indexB = categoryOrder.indexOf(nameB);

          if (indexA === -1 && indexB === -1) return nameA.localeCompare(nameB);
          if (indexA === -1) return 1;
          if (indexB === -1) return -1;
          return indexA - indexB;
        });

        setCategories(sortedCategories);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Sending email using EmailJS
    emailjs
      .send(
        "service_404lxe7", // <-- replace with your EmailJS service ID
        "template_783v91h",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "tmUgtXKf_TwGrV1iE" // <-- your EmailJS Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error: any) => {
        console.error("Email send failed:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  // const features = ["Natural Products", "Expert Staff", "Relaxing Environment"];

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
        }}
      >
        {/* Background Video */}
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

        {/* Centered Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 2 }}
        >
          <Container maxWidth="md">
            <Paper
              elevation={3}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: 4,
                p: 5,
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#1a1a1a" }}
              >
                Welcome to LoughSkin
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "#a67c5b",
                }}
              >
                Calm. Care. Confidence.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  mb: 4,
                  maxWidth: "600px",
                  mx: "auto",
                  whiteSpace: "pre-line",
                }}
              >
                {`A space created for calm, care, and confidence.\n\nAt LoughSkin, we combine expert skincare and beauty techniques to help you look and feel your best, while providing a moment of calm in your busy day.\n\nEvery visit is designed to be more than a beauty session—it’s your moment to pause, unwind, and leave feeling refreshed and renewed.`}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mb: 4,
                }}
              >
                <Button
                  component={Link}
                  to="/services"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#62c5d2",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: "#1f7fa3",
                    },
                  }}
                >
                  Services
                </Button>
                <Button
                  component={Link}
                  to="/gallery"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "#1f7fa3",
                    color: "#62c5d2",
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: "#f7f3ef",
                    },
                  }}
                >
                  View Full Gallery
                </Button>
              </Box>

              {/* Stats Section */}
              <Box display="flex" justifyContent="center">
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  {stats.map((item, index) => (
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        p: 2,
                        textAlign: "center",
                        backgroundColor: "rgba(255,255,255,0.7)",
                        width: { xs: "100%", sm: 150, md: 180 },
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", color: "#a67c5b" }}
                      >
                        {item.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.label}
                      </Typography>
                    </Paper>
                  ))}
                </Stack>
              </Box>
            </Paper>
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
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* LEFT: TEXT CONTENT */}
            <Box flex={1}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 700, color: "#2c3e50" }}
              >
                About Lough Skin Salon
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "#a67c5b",
                  mb: 2,
                }}
              >
                Where Skin Health Meets Confidence
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#7f8c8d",
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                Welcome to Lough Skin Salon, your destination for professional,
                results-driven skincare. Our mission is to help every client
                feel confident and radiant in their own skin through tailored
                treatments, medical-grade products, and a commitment to
                excellence in every service we offer.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#7f8c8d",
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                Located in the heart of Sheffield, we specialize in advanced
                non-surgical aesthetic treatments that enhance natural beauty
                while prioritizing skin health. Every consultation is personal,
                ensuring you receive a customized plan designed around your
                unique goals and skin type.
              </Typography>

              {/* BULLET POINTS */}
              <Stack spacing={1.2} sx={{ mb: 3 }}>
                {[
                  "Professional Skin Specialists",
                  "Advanced Aesthetic Treatments",
                  "Personalized Consultations",
                  "Results-Driven Approach",
                ].map((item, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    alignItems="center"
                    spacing={1.5}
                  >
                    <CheckCircle sx={{ color: "#a67c5b", fontSize: 22 }} />
                    <Typography variant="body1" sx={{ color: "#555" }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              {/* TAGS */}
              <Stack direction="row" spacing={1.5} flexWrap="wrap">
                <Chip
                  icon={<Verified sx={{ color: "#a67c5b !important" }} />}
                  label="CQC Registered"
                  sx={{
                    backgroundColor: "#f5f1ee",
                    color: "#5a4a3b",
                    fontWeight: 500,
                  }}
                />
                <Chip
                  icon={<Star sx={{ color: "#a67c5b !important" }} />}
                  label="Award-Winning Clinic"
                  sx={{
                    backgroundColor: "#f5f1ee",
                    color: "#5a4a3b",
                    fontWeight: 500,
                  }}
                />
                <Chip
                  icon={<People sx={{ color: "#a67c5b !important" }} />}
                  label="Established 2019"
                  sx={{
                    backgroundColor: "#f5f1ee",
                    color: "#5a4a3b",
                    fontWeight: 500,
                  }}
                />
              </Stack>
            </Box>

            {/* RIGHT: IMAGE + INFO CARDS */}
            <Box flex={1}>
              {/* IMAGE */}
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  mb: 3,
                  boxShadow: 3,
                  width: "50%", // reduce width by 50%
                  mx: "auto", // center horizontally
                }}
              >
                <Box
                  component="img"
                  src="/gallery/13.jpeg"
                  alt="Lough Skin Salon Interior"
                  sx={{
                    width: "100%",
                    height: "40%", // reduce height by 50%
                    display: "block",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    boxShadow: 1,
                    width: "fit-content",
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={600}>
                    Lough Skin Salon
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Advanced Aesthetic & Skincare Experts
                  </Typography>
                </Box>
              </Box>

              {/* INFO CARDS */}
              <Stack
                direction="row"
                flexWrap="wrap"
                spacing={2}
                useFlexGap
                justifyContent="space-between"
              >
                {[
                  {
                    icon: <Verified sx={{ fontSize: 30, color: "#a67c5b" }} />,
                    title: "Qualified Experts",
                    desc: "Led by trained professionals in aesthetic skincare",
                  },
                  {
                    icon: <Favorite sx={{ fontSize: 30, color: "#a67c5b" }} />,
                    title: "Client-Focused Care",
                    desc: "Every treatment is personalized and results-oriented",
                  },
                  {
                    icon: <People sx={{ fontSize: 30, color: "#a67c5b" }} />,
                    title: "Trusted by Clients",
                    desc: "Hundreds of satisfied clients across Sheffield",
                  },
                  {
                    icon: (
                      <CheckCircle sx={{ fontSize: 30, color: "#a67c5b" }} />
                    ),
                    title: "Natural Results",
                    desc: "Subtle enhancements for confident, radiant skin",
                  },
                ].map((item, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      flexBasis: { xs: "100%", sm: "48%" },
                      p: 3,
                      borderRadius: 3,
                      textAlign: "center",
                      backgroundColor: "#fff",
                      border: "#1f7fa3",
                      "&:hover": {
                        boxShadow: 3,
                        transition: "0.3s",
                      },
                    }}
                  >
                    {item.icon}
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      sx={{ mt: 1, color: "#5a4a3b" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Container>
      </motion.div>

      {/* Services */}
      <Box sx={{ py: 8, backgroundColor: "#fafafa" }}>
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

          {/* Flex Layout for Services */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {categories.map((category: any) => (
              <Card
                key={category._id}
                sx={{
                  flex: "1 1 300px",
                  maxWidth: 360,
                  borderRadius: 4,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                {/* Content Section */}
                <CardContent sx={{ textAlign: "left", p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#2c3e50",
                      fontWeight: "bold",
                      mb: 1.5,
                    }}
                  >
                    {category.name}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#7f8c8d",
                      mb: 2,
                      fontSize: "0.95rem",
                    }}
                  >
                    {category.description}
                  </Typography>

                  {/* Optional feature list */}
                  {category.features && (
                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        marginBottom: 16,
                      }}
                    >
                      {category.features.map((feature: string, i: number) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            color: "#7f8c8d",
                            fontSize: "0.9rem",
                            marginBottom: 6,
                          }}
                        >
                          <span
                            style={{
                              width: 8,
                              height: 8,
                              backgroundColor: "#d1c0a8",
                              borderRadius: "50%",
                              display: "inline-block",
                              marginRight: 8,
                            }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Button */}
                  <Box
                    sx={{ display: "flex", justifyContent: "center", pt: 1 }}
                  >
                    <Button
                      component={Link}
                      to={`/services#${category.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      variant="outlined"
                      sx={{
                        borderColor: "#1f7fa3",
                        color: "#62c5d2",
                        fontWeight: 500,
                        borderRadius: "12px",
                        px: 3,
                        py: 1,
                        "&:hover": {
                          borderColor: "#1f7fa3",
                          backgroundColor: "#1f7fa3",
                          color: "white",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ color: "#2c3e50", mb: 6, fontWeight: 700 }}
          >
            Why Choose Lough Skin
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
            sx={{ py: 6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: "flex" }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    textAlign: "center",
                    backgroundColor: "#fff",
                    flex: 1,
                    "&:hover": { boxShadow: 6, transition: "0.3s" },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Image */}
                  {/* <Box
                    component="img"
                    src={feature.img}
                    alt={feature.title}
                    sx={{
                      width: "100%",
                      height: 240,
                      objectFit: "cover",
                    }}
                  /> */}

                  {/* Content */}
                  <Box sx={{ p: 4, flexGrow: 1 }}>
                    {feature.icon}
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#2c3e50",
                        fontWeight: 600,
                        mt: 2,
                        mb: 1,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#7f8c8d", lineHeight: 1.8 }}
                    >
                      {feature.desc}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, color: "#2c3e50", mb: 5 }}
          >
            Our Gallery
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={2}
            useFlexGap
          >
            {media.slice(0, 6).map((item: any, index: number) => (
              <Box
                key={index}
                sx={{
                  flexBasis: { xs: "100%", sm: "48%", md: "30%" },
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 2,
                  position: "relative",
                  cursor: "pointer",
                  "&:hover img, &:hover video": {
                    transform: "scale(1.05)",
                    transition: "0.4s ease",
                  },
                }}
              >
                {item.type === "image" ? (
                  <Box
                    component="img"
                    src={item.src}
                    alt={`Gallery item ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      transition: "transform 0.3s ease",
                    }}
                  />
                ) : (
                  <Box
                    component="video"
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      transition: "transform 0.3s ease",
                    }}
                  />
                )}
              </Box>
            ))}
          </Stack>

          {/* VIEW MORE BUTTON */}
          <Box textAlign="center" mt={5}>
            <Button
              variant="outlined"
              sx={{
                color: "#62c5d2",
                borderColor: "#1f7fa3",
                fontWeight: 500,
                px: 4,
                py: 1.2,
                borderRadius: 3,
                "&:hover": {
                  backgroundColor: "#1f7fa3",
                  color: "#fff",
                  transition: "0.3s ease",
                },
              }}
            >
              View Full Gallery
            </Button>
          </Box>
        </Container>
      </motion.div>

      {/* Testimonials */}
      <Box sx={{ py: 8 }}>
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
                  <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                    {/* 👇 Added image styling here */}

                    {/* 👆 End of image styles */}

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

      {/*contact form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container maxWidth="lg" sx={{ py: 10 }}>
          {/* HEADER */}
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            sx={{ color: "#2c3e50", mb: 2 }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "#7f8c8d", mb: 6 }}
          >
            Ready to start your aesthetic journey? Contact us today to book your
            consultation.
          </Typography>

          {/* CONTACT + FORM SECTIONS */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems="stretch"
            sx={{ width: "100%" }}
          >
            {/* LEFT: CONTACT INFO */}
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                p: 3,
                borderRadius: 3,
                border: "1px solid #eee",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ color: "#2c3e50", mb: 2 }}
              >
                Contact Information
              </Typography>

              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Phone sx={{ color: "#a67c5b" }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Phone
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      +44 7788 988337
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Email sx={{ color: "#a67c5b" }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Email
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      loughskin@outlook.com
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <LocationOn sx={{ color: "#a67c5b" }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Location
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      11 Great Central Road
                      <br />
                      Loughborough,
                      <br />
                      England
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <AccessTime sx={{ color: "#a67c5b" }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Hours
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Monday: Closed
                      <br />
                      Tuesday – Friday: 10:30 AM – 6:30 PM
                      <br />
                      Saturday – Sunday: 11:00 AM – 6:00 PM
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Paper>

            {/* RIGHT: FORM */}
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                p: 4,
                borderRadius: 3,
                border: "1px solid #eee",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                    />
                  </Stack>

                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />

                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    multiline
                    minRows={3}
                    placeholder="Tell us about your aesthetic goals..."
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#62c5d2",
                      color: "#fff",
                      py: 1.2,
                      borderRadius: 2,
                      fontWeight: 600,
                      alignSelf: "flex-start",
                      "&:hover": { backgroundColor: "#1f7fa3" },
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Stack>
        </Container>
      </motion.div>
    </Box>
  );
}
