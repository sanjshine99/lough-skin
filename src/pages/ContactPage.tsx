"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import {
  ExpandMore,
  Phone,
  Email,
  LocationOn,
  Schedule,
  Facebook,
  Instagram,
} from "@mui/icons-material";
import { easeOut, motion } from "framer-motion";

export default function ContactPage() {
  const faqs = [
    {
      question: "What should I expect during my first visit?",
      answer:
        "Your first visit begins with a complimentary 15-minute skin consultation where we assess your skin type and discuss your goals. We'll then recommend the best treatments for your needs and create a personalized skincare plan.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We require 24 hours notice for cancellations or rescheduling. Cancellations made less than 24 hours in advance may be subject to a 50% charge. No-shows will be charged the full treatment price.",
    },
    {
      question: "Do you offer package deals or memberships?",
      answer:
        "Yes! We offer various treatment packages and monthly membership options that provide significant savings. Contact us to learn about our current offers and find the best option for your skincare journey.",
    },
    {
      question: "What products do you use?",
      answer:
        "We use only premium, professional-grade skincare products from leading brands. All our products are carefully selected for their quality, effectiveness, and suitability for different skin types.",
    },
    {
      question: "Is parking available?",
      answer:
        "Yes, we have dedicated parking spaces available for our clients directly outside our location on High Street. Street parking is also available nearby.",
    },
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: easeOut,
      },
    }),
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            gutterBottom
            sx={{ color: "#2c3e50", mb: 6 }}
          >
            Contact Us
          </Typography>
        </motion.div>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 8 }}>
          {/* Contact Information */}
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <Card sx={{ p: 3, height: "100%" }}>
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ color: "#e1c9b3", mb: 4 }}
                >
                  Get In Touch
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <LocationOn sx={{ color: "#a67c5b", mr: 2, fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: "#2c3e50" }}>
                      Address
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#7f8c8d" }}>
                      123 High Street
                      <br />
                      Loughborough
                      <br />
                      Leicestershire LE11 2AB
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Phone sx={{ color: "#a67c5b", mr: 2, fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: "#2c3e50" }}>
                      Phone
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#7f8c8d" }}>
                      01509 123456
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Email sx={{ color: "#a67c5b", mr: 2, fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: "#2c3e50" }}>
                      Email
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#7f8c8d" }}>
                      info@loughskin.co.uk
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                  <Schedule sx={{ color: "#a67c5b", mr: 2, fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: "#2c3e50", mb: 1 }}>
                      Business Hours
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#7f8c8d" }}>
                      Monday: Closed
                      <br />
                      Tuesday – Friday: 10:30 AM – 6:30 PM
                      <br />
                      Saturday – Sunday: 11:00 AM – 6:00 PM
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: "#2c3e50", mb: 2 }}>
                    Follow Us
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      href="https://instagram.com/loughskin"
                      target="_blank"
                      startIcon={<Instagram />}
                      sx={{
                        color: "#a67c5b",
                        borderColor: "#a67c5b",
                        "&:hover": {
                          backgroundColor: "#a67c5b",
                          color: "white",
                        },
                      }}
                      variant="outlined"
                    >
                      Instagram
                    </Button>
                    <Button
                      href="https://facebook.com/loughskin"
                      target="_blank"
                      startIcon={<Facebook />}
                      sx={{
                        color: "#a67c5b",
                        borderColor: "#a67c5b",
                        "&:hover": {
                          backgroundColor: "#a67c5b",
                          color: "white",
                        },
                      }}
                      variant="outlined"
                    >
                      Facebook
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Google Map Placeholder */}
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ p: 0, height: "100%" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    minHeight: 400,
                    backgroundColor: "#f8f9fa",
                    border: "2px dashed #a67c5b",
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    p: 2,
                  }}
                >
                  <LocationOn sx={{ fontSize: 60, color: "#a67c5b", mb: 2 }} />
                  <Typography variant="h6" sx={{ color: "#2c3e50", mb: 2 }}>
                    Google Maps Integration
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#7f8c8d", mb: 2 }}>
                    Location of 11 Great Central Rd, Loughborough LE11 1RW, UK
                  </Typography>

                  {/* Free embedded Google Map iframe */}
                  <Box
                    component="iframe"
                    src="https://www.google.com/maps?q=11+Great+Central+Rd,+Loughborough+LE11+1RW,+UK&output=embed"
                    sx={{
                      border: 0,
                      width: "100%",
                      height: 300,
                      borderRadius: 2,
                      mb: 2,
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  <Button
                    href="https://www.google.com/maps/search/?api=1&query=11+Great+Central+Rd,+Loughborough+LE11+1RW,+UK"
                    target="_blank"
                    variant="contained"
                    sx={{
                      backgroundColor: "#a67c5b",
                      "&:hover": { backgroundColor: "#8b6f4e" },
                    }}
                  >
                    View on Google Maps
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* FAQ Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ color: "#2c3e50", mb: 4 }}
          >
            Frequently Asked Questions
          </Typography>
        </motion.div>

        {/* FAQ Accordion List */}
        <Box sx={{ maxWidth: 800, mx: "auto" }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <Accordion sx={{ mb: 2, boxShadow: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{
                    backgroundColor: "#f8f9fa",
                    "&:hover": { backgroundColor: "#e9ecef" },
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#2c3e50" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{ color: "#7f8c8d", lineHeight: 1.6 }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
