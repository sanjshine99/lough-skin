import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Button,
  Paper,
} from "@mui/material";
import axios from "axios";
import CancelIcon from "@mui/icons-material/Cancel";

const BookingFailPage = () => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionIdFromUrl = urlParams.get("session_id");
    setSessionId(sessionIdFromUrl);

    const fetchErrorDetails = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/booking-fail?session_id=${sessionIdFromUrl}`
        );
        setErrorMessage(
          res.data?.message || "We couldn’t complete your booking."
        );
      } catch (err) {
        console.error("Error fetching failure details:", err);
        setErrorMessage("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (sessionIdFromUrl) {
      fetchErrorDetails();
    } else {
      setErrorMessage("No session ID found in URL.");
      setLoading(false);
    }
  }, []);

  return (
    <Container maxWidth="sm" sx={{ p: 5 }}>
      {loading ? (
        <Box textAlign="center">
          <CircularProgress />
          <Typography mt={2}>Verifying booking status...</Typography>
        </Box>
      ) : (
        <Paper
          elevation={4}
          sx={{ p: 5, borderRadius: 3, textAlign: "center" }}
        >
          <CancelIcon sx={{ fontSize: 80, color: "error.main", mb: 2 }} />
          <Typography variant="h4" gutterBottom color="error.main">
            Booking Failed
          </Typography>
          <Typography variant="body1" gutterBottom>
            {errorMessage}
          </Typography>

          {sessionId && (
            <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
              Session ID: <strong>{sessionId}</strong>
            </Typography>
          )}

          <Box mt={4}>
            <Button
              variant="contained"
              color="error"
              sx={{ mr: 2 }}
              href="/booking"
            >
              Try Again
            </Button>
            <Button variant="outlined" color="primary" href="/">
              Go Home
            </Button>
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default BookingFailPage;
