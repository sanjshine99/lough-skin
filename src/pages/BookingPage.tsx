import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Alert,
} from "@mui/material";

export default function BookingPage() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          textAlign="center"
          gutterBottom
          sx={{ color: "#2c3e50", mb: 2 }}
        >
          Book Your Appointment
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ color: "#7f8c8d", mb: 6 }}
        >
          Schedule your luxury spa experience with our easy online booking
          system
        </Typography>

        <Card sx={{ maxWidth: 800, mx: "auto", p: 3, boxShadow: 3 }}>
          <CardContent>
            <Alert severity="info" sx={{ mb: 3 }}>
              Our booking system is powered by Fresha for your convenience and
              security.
            </Alert>

            {/* Placeholder for Fresha iframe */}
            <Box
              sx={{
                width: "100%",
                height: "600px",
                backgroundColor: "#f8f9fa",
                border: "2px dashed #a67c5b",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                p: 4,
              }}
            >
              <Typography variant="h5" sx={{ color: "#2c3e50", mb: 2 }}>
                Fresha Booking Widget
              </Typography>
              <Typography variant="body1" sx={{ color: "#7f8c8d", mb: 3 }}>
                This is where your Fresha booking iframe would be embedded.
              </Typography>
              <Typography variant="body2" sx={{ color: "#7f8c8d" }}>
                Replace this placeholder with your actual Fresha booking widget
                code:
              </Typography>
              <Box
                component="code"
                sx={{
                  backgroundColor: "#2c3e50",
                  color: "white",
                  p: 2,
                  borderRadius: 1,
                  mt: 2,
                  fontSize: "0.8rem",
                }}
              >
                {
                  '<iframe src="https://your-fresha-booking-url" width="100%" height="600px"></iframe>'
                }
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Quick Service Links */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ color: "#2c3e50", mb: 4 }}
          >
            Popular Services
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {[
              { name: "Luxury Facial", duration: "55 min", price: "£65" },
              { name: "Japanese HeadSpa", duration: "1 hr", price: "£105" },
              {
                name: "HeadSpa + Facial",
                duration: "1 hr 40 min",
                price: "£145",
              },
              { name: "Free Consultation", duration: "15 min", price: "Free" },
            ].map((service, index) => (
              <Card
                key={index}
                sx={{ minWidth: 250, textAlign: "center", p: 2 }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#2c3e50", mb: 1 }}>
                    {service.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#7f8c8d", mb: 1 }}>
                    {service.duration}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "#a67c5b", fontWeight: "bold" }}
                  >
                    {service.price}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Contact Info */}
        <Box
          sx={{
            mt: 6,
            textAlign: "center",
            p: 4,
            backgroundColor: "#e1c9b3",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            sx={{ color: "#2c3e50" }}
          >
            Need Help Booking?
          </Typography>
          <Typography variant="body1" sx={{ color: "#7f8c8d", mb: 2 }}>
            Call us directly or send us a message
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#a67c5b", fontWeight: "bold" }}
          >
            01509 123456
          </Typography>
          <Typography variant="body1" sx={{ color: "#7f8c8d" }}>
            info@loughskin.co.uk
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
