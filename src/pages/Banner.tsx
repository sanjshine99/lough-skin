import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import { AccessTime, AttachMoney } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { easeOut, motion } from "framer-motion";

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
    <Box sx={{ py: 8, background: "#fff8f3" }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              textAlign: "center",
              background: "#2c3e50",
              color: "white",
              borderRadius: 3,
              boxShadow: 3,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Free Consultation
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
              15-minute skin consultation for new clients – Complimentary
            </Typography>
            <Button
              component={Link}
              to="/booking"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#a67c5b",
                "&:hover": { backgroundColor: "#8b6f4e" },
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
