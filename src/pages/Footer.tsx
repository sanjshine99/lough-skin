import { Box, Container, Typography, IconButton } from "@mui/material";
import {
  Instagram,
  Facebook,
  Email,
  Phone as PhoneIcon,
  LocationOn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#e1c9b3", color: "black", py: 6 }}>
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
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Info
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1, display: "flex", alignItems: "center" }}
            >
              <LocationOn fontSize="small" sx={{ mr: 1 }} />
              11 Great Central Road, Loughborough, England
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1, display: "flex", alignItems: "center" }}
            >
              <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
              <a
                href="tel:+44 7788 988337"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                +44 7788 988337
              </a>
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Email fontSize="small" sx={{ mr: 1 }} />
              <a
                href="mailto:info@loughskin.co.uk"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                info@loughskin.co.uk
              </a>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
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
            <Typography variant="h6" fontWeight="bold" gutterBottom>
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
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{ color: "black" }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{ color: "black" }}
              >
                <Facebook />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
