"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
} from "@mui/material";
import { School, Star, Spa } from "@mui/icons-material";
import { easeOut, motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      title: "Luxury",
      description: "Premium products and treatments in an elegant environment",
      icon: <Star sx={{ fontSize: 40, color: "#a67c5b" }} />,
    },
    {
      title: "Clean",
      description: "Natural, clean ingredients and sustainable practices",
      icon: <Star sx={{ fontSize: 40, color: "#a67c5b" }} />,
    },
    {
      title: "Sustainable",
      description: "Environmentally conscious approach to beauty and wellness",
      icon: <Spa sx={{ fontSize: 40, color: "#a67c5b" }} />,
    },
  ];

  const certifications = [
    "CIBTAC Certified",
    "BABTAC Member",
    "Japanese HeadSpa Training",
    "Advanced Skincare Specialist",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: easeOut,
      },
    }),
  };

  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(180deg, #fffaf4 0%, #f8f8f8 100%)",
        transition: "background 1s ease",
      }}
    >
      <Container maxWidth="lg">
        {/* About Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            gutterBottom
            sx={{ color: "#2c3e50", mb: 6 }}
          >
            About Lough Skin
          </Typography>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" sx={{ color: "#2c3e50", mb: 2 }}>
              Our Story
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#7f8c8d", lineHeight: 1.8, mb: 3 }}
            >
              Lough Skin was born from a passion for holistic wellness and the
              belief that true beauty comes from nurturing both the skin and the
              spirit. Founded in the heart of Loughborough, our spa represents a
              sanctuary where ancient wisdom meets modern skincare science.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#7f8c8d", lineHeight: 1.8, mb: 3 }}
            >
              Our founder's journey began with a deep appreciation for natural
              healing and the transformative power of touch. After extensive
              training in both traditional and contemporary techniques,
              including specialized Japanese HeadSpa methods, Lough Skin was
              created to offer a unique blend of luxury, expertise, and genuine
              care.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#7f8c8d", lineHeight: 1.8 }}
            >
              We believe in a holistic, natural, and results-driven philosophy
              that honors the individual needs of each client while promoting
              overall wellness and self-care as essential elements of a balanced
              life.
            </Typography>
          </Box>
        </motion.div>

        {/* Meet Our Team */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" sx={{ color: "#2c3e50", mb: 4 }}>
              Meet Our Team
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
                justifyContent: "center",
              }}
            >
              {[...Array(2)].map((_, i) => {
                const member =
                  i === 0
                    ? {
                        name: "Sarah Johnson",
                        role: "Head Therapist & Founder",
                        desc: "CIBTAC certified with over 8 years of experience in advanced skincare and Japanese HeadSpa techniques...",
                        tags: ["CIBTAC", "HeadSpa Specialist"],
                        initial: "S",
                      }
                    : {
                        name: "Emma Thompson",
                        role: "Senior Therapist",
                        desc: "BABTAC member specializing in body treatments and massage therapy...",
                        tags: ["BABTAC", "Body Specialist"],
                        initial: "E",
                      };

                return (
                  <motion.div key={i} custom={i + 1} variants={fadeInUp}>
                    <Card
                      sx={{
                        maxWidth: 400,
                        textAlign: "center",
                        p: 3,
                        borderRadius: 3,
                        boxShadow: 3,
                        backgroundColor: "white",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <CardContent>
                        <Avatar
                          sx={{
                            width: 120,
                            height: 120,
                            mx: "auto",
                            mb: 3,
                            backgroundColor: "#a67c5b",
                          }}
                        >
                          <Typography variant="h3">{member.initial}</Typography>
                        </Avatar>
                        <Typography
                          variant="h5"
                          sx={{ color: "#2c3e50", mb: 1 }}
                        >
                          {member.name}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{ color: "#a67c5b", mb: 2 }}
                        >
                          {member.role}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#7f8c8d", mb: 3 }}
                        >
                          {member.desc}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                            justifyContent: "center",
                          }}
                        >
                          {member.tags.map((tag, idx) => (
                            <Chip
                              key={idx}
                              label={tag}
                              size="small"
                              sx={{
                                backgroundColor: "#a67c5b",
                                color: "white",
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </Box>
          </Box>
        </motion.div> */}

        {/* Our Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ color: "#2c3e50", mb: 6 }}
            >
              Our Values
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
                justifyContent: "center",
              }}
            >
              {values.map((value, index) => (
                <motion.div key={index} custom={index + 1} variants={fadeInUp}>
                  <Card
                    sx={{
                      width: 300, // fixed width
                      height: 350, // fixed height
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      textAlign: "center",
                      p: 3,
                      borderRadius: 3,
                      boxShadow: 2,
                      backgroundColor: "#fff",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box mb={2}>{value.icon}</Box>
                      <Typography variant="h5" sx={{ color: "#2c3e50", mb: 1 }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#7f8c8d" }}>
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Box
            sx={{
              textAlign: "center",
              p: 4,
              backgroundColor: "#f0f2f4",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h4" sx={{ color: "#2c3e50", mb: 4 }}>
              Certifications & Training
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
              }}
            >
              {certifications.map((cert, index) => (
                <Chip
                  key={index}
                  icon={<School />}
                  label={cert}
                  sx={{
                    backgroundColor: "#2c3e50",
                    color: "white",
                    fontSize: "1rem",
                    py: 2,
                    px: 1.5,
                  }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
