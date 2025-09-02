import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Alert,
  Button,
  Stack,
  Paper,
  Divider,
} from "@mui/material";
import axios from "axios";

const BookingSuccessPage = () => {
  const [loading, setLoading] = useState(true);
  const [bookingDetails, setBookingDetails]: any = useState(null);
  const [error, setError] = useState("");

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("session_id");

    const fetchBookingDetails = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/booking-success?session_id=${sessionId}`
        );
        setBookingDetails(res.data);

        // ✅ Auto trigger PDF print
        // setTimeout(() => handlePrint(), 1000);
      } catch (err) {
        console.error("Error fetching booking details:", err);
        setError("Failed to retrieve booking information.");
      } finally {
        setLoading(false);
      }
    };

    if (sessionId) {
      fetchBookingDetails();
    } else {
      setError("No session ID found in URL.");
      setLoading(false);
    }
  }, []);

  return (
    <Container sx={{ mt: 10 }}>
      {/* Print styles → only print receipt */}
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #receipt, #receipt * {
              visibility: visible;
            }
            #receipt {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
          }
        `}
      </style>

      {loading ? (
        <Box textAlign="center">
          <CircularProgress />
          <Typography mt={2}>Retrieving booking details...</Typography>
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="flex-start"
        >
          {/* LEFT SIDE */}
          <Box flex={1}>
            {/* Logo placeholder */}
            <Box
              component="img"
              src="/image.png" // 🡐 Replace with your actual image path
              alt="Lough Skin Logo"
              sx={{ height: 80 }} // Adjust height as needed
            />

            <Typography variant="h4" fontWeight="bold" gutterBottom mt={5}>
              Booking confirmed successfully!
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Thank you for choosing us! Your reservation is confirmed. If
              there’s anything you need before your arrival, please don’t
              hesitate to reach out to your host.
            </Typography>

            <Stack direction="row" spacing={5} mt={3}>
              <Button
                // fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                onClick={handlePrint}
              >
                📄 Download Receipt
              </Button>
              <Button variant="text" href="/">
                Go back to home
              </Button>
            </Stack>
          </Box>

          {/* RIGHT SIDE → Receipt */}
          <Box flex={1} p={5}>
            {/* Amount card */}
            <Paper
              sx={{
                p: 3,
                mb: 3,
                textAlign: "center",
                borderRadius: 3,
                boxShadow: 2,
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                ${bookingDetails?.depositPaid || "0.00"}
              </Typography>
              <Typography variant="body2" color="success.main">
                ✅ Payment success!
              </Typography>
            </Paper>

            {/* Payment details */}
            <Paper
              id="receipt"
              sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Payment details
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Date</Typography>
                <Typography>
                  {bookingDetails?.date || new Date().toLocaleString()}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Reference number</Typography>
                <Typography>{bookingDetails?.paymentIntent}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Total Amount</Typography>
                <Typography>${bookingDetails?.total || "0.00"}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Deposit Paid</Typography>
                <Typography>
                  ${bookingDetails?.depositPaid || "0.00"}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Payment method</Typography>
                <Typography>{"Stripe"}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Payment status</Typography>
                <Typography color="success.main">Success</Typography>
              </Box>
            </Paper>

            {/* Manual download */}
          </Box>
        </Stack>
      )}
    </Container>
  );
};

export default BookingSuccessPage;
