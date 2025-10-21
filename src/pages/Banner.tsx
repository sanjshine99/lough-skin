import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion, easeOut } from "framer-motion";

const Banner = () => {
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

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: "center",
              background: "#e1c9b3",
              borderRadius: "24px",
              // boxShadow: "0px 8px 30px rgba(0,0,0,0.06)",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: 500,
                // color: "#1a3c4e",
                letterSpacing: 0.3,
              }}
            >
              Book Your FREE Consultation Today
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: "#5a6b73",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                maxWidth: 500,
                mx: "auto",
              }}
            >
              Begin your free skincare journey with our specialists — discover
              your unique path to radiant, confident skin.
            </Typography>

            <Button
              component={Link}
              to="/services"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#62c5d2",
                color: "white",
                px: 5,
                py: 1.5,
                borderRadius: "40px",
                fontSize: "1.05rem",
                textTransform: "none",
                boxShadow: "0px 6px 20px rgba(37,150,190,0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#1f7fa3",
                  boxShadow: "0px 8px 25px rgba(37,150,190,0.4)",
                },
              }}
            >
              Book Your Free Consultation
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Banner;
