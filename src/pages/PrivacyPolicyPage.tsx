import { Box, Container, Typography } from "@mui/material";
import { motion, easeOut } from "framer-motion";
import { Lock, Security, Visibility } from "@mui/icons-material";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      text: "We may collect personal details such as your name, email address, phone number, and booking information. Additionally, we may collect non-personal data like browser type, device information, and usage statistics to improve our services.",
      icon: <Lock sx={{ fontSize: 50, color: "white" }} />,
    },
    {
      title: "How We Use Your Information",
      text: "Your information is used to provide services, manage appointments, process payments, and improve your experience. We may also use it to send relevant updates or promotional content if you have opted in.",
      icon: <Security sx={{ fontSize: 50, color: "white" }} />,
    },
    {
      title: "Data Protection & Rights",
      text: "We prioritize your privacy. Your data will not be shared or sold to third parties without consent, except as required by law. You have the right to access, update, or request deletion of your information at any time.",
      icon: <Visibility sx={{ fontSize: 50, color: "white" }} />,
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
            Privacy Policy
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
