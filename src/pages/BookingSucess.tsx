import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Alert,
  Button,
} from "@mui/material";
import axios from "axios";

const BookingSuccessPage = () => {
  const [loading, setLoading] = useState(true);
  const [bookingDetails, setBookingDetails]: any = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("session_id");

    const fetchBookingDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/booking-success?session_id=${sessionId}`
        );
        setBookingDetails(res.data);
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
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      {loading ? (
        <Box textAlign="center">
          <CircularProgress />
          <Typography mt={2}>Retrieving booking details...</Typography>
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            🎉 Booking Successful!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Thank you for your booking. A confirmation email has been sent.
          </Typography>

          {bookingDetails && (
            <Box mt={3}>
              <Typography>
                Booking ID: <strong>{bookingDetails.bookingId}</strong>
              </Typography>
              <Typography>Customer: {bookingDetails.customerName}</Typography>
              <Typography>Service: {bookingDetails.service}</Typography>
              <Typography>Time: {bookingDetails.time}</Typography>
            </Box>
          )}

          <Button variant="contained" color="primary" sx={{ mt: 4 }} href="/">
            Back to Home
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default BookingSuccessPage;
