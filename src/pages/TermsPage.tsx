import { Box, Container, Typography } from "@mui/material";
import { motion, easeOut } from "framer-motion";
import { Gavel, Assignment, Payment } from "@mui/icons-material";

export default function TermsPage() {
  const sections = [
    {
      title: "Use of Services",
      text: "By booking with Lough Skin, you agree to use our services for personal and lawful purposes only. Misuse of our website, booking system, or spa facilities is strictly prohibited.",
      icon: <Gavel sx={{ fontSize: 50, color: "white" }} />,
    },
    {
      title: "Bookings & Cancellations",
      text: "Appointments can be booked online or in-person. We require at least 24 hours notice for cancellations. Late cancellations or no-shows may result in a fee being charged.",
      icon: <Assignment sx={{ fontSize: 50, color: "white" }} />,
    },
    {
      title: "Payments & Refunds",
      text: "Payments must be completed at the time of booking or on arrival. Refunds are not guaranteed but may be considered under special circumstances at the discretion of management.",
      icon: <Payment sx={{ fontSize: 50, color: "white" }} />,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: easeOut },
    }),
  };

  return (
    <Box
      sx={{
        py: 12,
        background: "linear-gradient(180deg, #fffaf4 0%, #fdf6f0 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ mb: 10, fontWeight: 700, color: "#2c3e50" }}
          >
            Terms & Conditions
          </Typography>
        </motion.div>

        {/* Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                },
                alignItems: "center",
                gap: 6,
                mb: 8,
                p: 4,
                borderRadius: 4,
                background: "linear-gradient(135deg, #fff7f0, #fff1e6)",
                boxShadow: "0px 10px 25px rgba(0,0,0,0.08)",
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: "#f5b041",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  mb: { xs: 3, md: 0 },
                }}
              >
                {section.icon}
              </Box>

              {/* Text */}
              <Box
                sx={{
                  flex: 1,
                  textAlign: {
                    xs: "center",
                    md: index % 2 === 0 ? "left" : "right",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 2, fontWeight: 600, color: "#2c3e50" }}
                >
                  {section.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.8, color: "#7f8c8d" }}
                >
                  {section.text}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
}
