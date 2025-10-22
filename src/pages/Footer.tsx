import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import {
  Instagram,
  Facebook,
  Email,
  Phone as PhoneIcon,
  LocationOn,
  MusicNote, // TikTok-like icon
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#e1c9b3", color: "black", pt: 6 }}>
      <Container maxWidth="lg">
        {/* Top Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1.2fr 1fr 1fr 1fr",
            },
            gap: 4,
            pb: 6,
          }}
        >
          {/* Contact Info */}
          <Box>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", mb: 1 }}>
              <LocationOn sx={{ fontSize: 18, mr: 1 }} /> 11 Great Central Road,
              Loughborough, England
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", mb: 1 }}>
              <PhoneIcon sx={{ fontSize: 18, mr: 1 }} />
              <a href="tel:+447788988337" style={{ color: "inherit" }}>
                +44 7788 988337
              </a>
            </Typography>
            <Typography variant="body2" sx={{ display: "flex" }}>
              <Email sx={{ fontSize: 18, mr: 1 }} />
              <a
                href="mailto:loughskin@outlook.com"
                style={{ color: "inherit" }}
              >
                loughskin@outlook.com
              </a>
            </Typography>
          </Box>

          {/* Business Hours */}
          <Box>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Business Hours
            </Typography>
            {[
              "Mon: Closed",
              "Tue: 10:30 - 18:30",
              "Wed: 10:30 - 18:30",
              "Thu: 10:30 - 18:30",
              "Fri: 10:30 - 18:30",
              "Sat: 11:00 - 18:00",
              "Sun: 11:00 - 18:00",
            ].map((item, i) => (
              <Typography key={i} variant="body2">
                {item}
              </Typography>
            ))}
          </Box>

          {/* Amenities */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Additional Information
            </Typography>
            {[
              "Verified on Fresha",
              "Instant Confirmation",
              "Pay by App",
              "Wheelchair Accessible",
              "Parking Available",
            ].map((item, i) => (
              <Typography key={i} variant="body2" sx={{ mb: 0.3 }}>
                • {item}
              </Typography>
            ))}
          </Box>

          {/* Socials */}
          <Box>
            <Typography variant="h6" fontWeight="bold" mb={2}>
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

              <IconButton
                href="https://www.tiktok.com/@loughskin"
                target="_blank"
                sx={{ color: "black" }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.42 2h3.08a6.4 6.4 0 0 0 6.37 6.37v3.08a9.48 9.48 0 0 1-6.8-2.81v8.2a6.58 6.58 0 1 1-6.58-6.58h1.93v3.09H11.5a3.49 3.49 0 1 0 3.49 3.49V2z" />
                </svg>
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
          py: 2.5,
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

          <Box sx={{ display: "flex", gap: 3 }}>
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
            <Typography variant="body2">
              Powered by{" "}
              <Link
                href="https://www.ansely.co.uk/"
                target="_blank"
                underline="hover"
                sx={{ color: "#62c5d2", fontWeight: 600 }}
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
