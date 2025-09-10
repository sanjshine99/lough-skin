import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import {
  Instagram,
  Facebook,
  Email,
  Phone as PhoneIcon,
  LocationOn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#e1c9b3", color: "black", pt: 6 }}>
      <Container maxWidth="lg">
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 4,
            pb: 4,
          }}
        >
          {/* Contact Info */}
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
                href="tel:+447788988337"
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
                href="mailto:loughskin@outlook.com"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                loughskin@outlook.com
              </a>
            </Typography>
          </Box>

          {/* Business Hours */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Business Hours
            </Typography>
            <Typography variant="body2">Monday: Closed</Typography>
            <Typography variant="body2">Tuesday: 10:30 - 18:30</Typography>
            <Typography variant="body2">Wednesday: 10:30 - 18:30</Typography>
            <Typography variant="body2">Thursday: 10:30 - 18:30</Typography>
            <Typography variant="body2">Friday: 10:30 - 18:30</Typography>
            <Typography variant="body2">Saturday: 11:00 - 18:00</Typography>
            <Typography variant="body2">Sunday: 11:00 - 18:00</Typography>
          </Box>

          {/* Extra Info */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Additional Information
            </Typography>
            <Typography variant="body2">
              • Verified business by Fresha
            </Typography>
            <Typography variant="body2">• Instant Confirmation</Typography>
            <Typography variant="body2">• Pay by app</Typography>
            <Typography variant="body2">• Wheelchair accessible</Typography>
            <Typography variant="body2">• Parking available</Typography>
          </Box>

          {/* Socials */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                href="https://instagram.com/loughskin"
                target="_blank"
                sx={{ color: "black" }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://facebook.com/loughskin"
                target="_blank"
                sx={{ color: "black" }}
              >
                <Facebook />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Bottom Bar */}
      <Box
        sx={{
          borderTop: "1px solid rgba(0,0,0,0.2)",
          backgroundColor: "#d8bfa8",
          py: 2,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Lough Skin. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Link
              href="/privacy-policy"
              underline="hover"
              sx={{ color: "black" }}
            >
              Privacy Policy
            </Link>
            <Link href="/terms" underline="hover" sx={{ color: "black" }}>
              Terms & Conditions
            </Link>
            <Typography variant="body2" sx={{ color: "black" }}>
              Powered by{" "}
              <Link
                href="https://www.ansely.co.uk/"
                target="_blank"
                underline="hover"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Ansely
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
