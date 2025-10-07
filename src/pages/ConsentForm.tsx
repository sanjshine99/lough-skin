import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Typography,
  Stack,
  CardContent,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";

interface ConsentFormState {
  fullName: string;
  dob: string;
  age: string;
  address: string;
  phone: string;
  email: string;
  emergencyContact: string;
  medicalHistory: string[];
  medications: string;
  surgeries: string;
  skinType: string;
  sunExposure: string;
  retinol: string;
  cosmeticProcedures: string;
  smoke: string;
  alcohol: string;
  waterIntake: string;
  stress: string;
  treatmentAreas: string;
  contraindications: string[];
  liabilitySignature: string;
}

export default function ConsentForm() {
  const [ipAddress, setIpAddress] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const [form, setForm] = useState<ConsentFormState>({
    fullName: "",
    dob: "",
    age: "",
    address: "",
    phone: "",
    email: "",
    emergencyContact: "",
    medicalHistory: [],
    medications: "",
    surgeries: "",
    skinType: "",
    sunExposure: "",
    retinol: "",
    cosmeticProcedures: "",
    smoke: "",
    alcohol: "",
    waterIntake: "",
    stress: "",
    treatmentAreas: "",
    contraindications: [],
    liabilitySignature: "",
  });

  useEffect(() => {
    // capture IP
    axios.get("https://api.ipify.org?format=json").then((res) => {
      setIpAddress(res.data.ip);
    });
  }, []);

  const handleChange = (key: keyof ConsentFormState, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const payload = {
      ...form,
      logs: {
        submittedAt: new Date().toISOString(),
        ip: ipAddress,
        email: form.email,
      },
    };

    try {
      // 1. Save consent form in backend
      // const res = await axios.post(
      //   `${process.env.REACT_APP_API_BASE_URL}/api/consent-form`,
      //   payload
      // );

      // if (res.status === 200 || res.status === 201) {
      // 2. Send email with EmailJS
      await emailjs.send(
        "service_404lxe7", // <-- replace with your EmailJS service ID
        "template_6mm4e0g", // <-- replace with your EmailJS template ID
        {
          fullName: form.fullName,
          dob: form.dob,
          age: form.age,
          address: form.address,
          phone: form.phone,
          email: form.email,
          emergencyContact: form.emergencyContact,
          medicalHistory: form.medicalHistory.join(", "),
          medications: form.medications,
          surgeries: form.surgeries,
          treatmentAreas: form.treatmentAreas,
          liabilitySignature: form.liabilitySignature,
          submittedAt: new Date().toISOString(),
          ip: ipAddress, // from your useEffect axios call
        },
        "tmUgtXKf_TwGrV1iE" // <-- your EmailJS Public Key
      );

      setSubmitStatus("success");
      // } else {
      //   setSubmitStatus("error");
      // }
    } catch (error) {
      console.error("Consent form submission failed:", error);
      setSubmitStatus("error");
    } finally {
      setSnackOpen(true);
    }
  };

  const medicalOptions = [
    "Heart conditions / Pacemaker",
    "High / Low blood pressure",
    "Diabetes (Type I / II)",
    "Epilepsy / Seizures",
    "Blood clotting disorders / On blood thinners",
    "Autoimmune disease",
    "Cancer (current or past)",
    "Keloid / Hypertrophic scarring",
    "Skin conditions (eczema, psoriasis, dermatitis)",
    "Active acne or infection",
    "Cold sores (Herpes simplex)",
    "Hepatitis / HIV / Other bloodborne conditions",
    "Respiratory conditions (asthma, COPD, etc.)",
    "Allergies (latex, lidocaine, adhesives, ingredients)",
    "Pregnant / Breastfeeding",
    "Other relevant medical history",
  ];

  return (
    <div>
      {/* <Container maxWidth="lg">
        <Card> */}
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Client Consultation & Consent Form
        </Typography>
        <Stack spacing={2}>
          <TextField
            required
            label="Full Name"
            fullWidth
            value={form.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
          />
          <TextField
            required
            label="Date of Birth"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value={form.dob}
            onChange={(e) => handleChange("dob", e.target.value)}
          />
          <TextField
            label="Age"
            fullWidth
            value={form.age}
            onChange={(e) => handleChange("age", e.target.value)}
          />
          <TextField
            label="Address"
            fullWidth
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
          <TextField
            label="Phone"
            fullWidth
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <TextField
            label="Emergency Contact & Phone"
            fullWidth
            value={form.emergencyContact}
            onChange={(e) => handleChange("emergencyContact", e.target.value)}
          />

          {/* Medical History */}
          <FormGroup>
            <FormLabel>Medical History</FormLabel>
            {medicalOptions.map((item) => (
              <FormControlLabel
                key={item}
                control={
                  <Checkbox
                    checked={form.medicalHistory.includes(item)}
                    onChange={(e) => {
                      handleChange(
                        "medicalHistory",
                        e.target.checked
                          ? [...form.medicalHistory, item]
                          : form.medicalHistory.filter((m) => m !== item)
                      );
                    }}
                  />
                }
                label={item}
              />
            ))}
          </FormGroup>

          <TextField
            label="Current Medications / Supplements"
            fullWidth
            value={form.medications}
            onChange={(e) => handleChange("medications", e.target.value)}
          />
          <TextField
            label="Past Surgeries"
            fullWidth
            value={form.surgeries}
            onChange={(e) => handleChange("surgeries", e.target.value)}
          />

          <TextField
            label="Treatment Areas of Interest"
            fullWidth
            value={form.treatmentAreas}
            onChange={(e) => handleChange("treatmentAreas", e.target.value)}
          />

          {/* Liability + E-signature */}
          <Typography sx={{ mt: 2, fontSize: "0.9rem" }}>
            By typing my name below, I agree this constitutes my e-signature to
            the liability waiver.
          </Typography>
          <TextField
            required
            label="Type Full Name as Signature"
            fullWidth
            value={form.liabilitySignature}
            onChange={(e) => handleChange("liabilitySignature", e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!form.fullName || !form.liabilitySignature}
          >
            Submit Consent Form
          </Button>
        </Stack>
      </CardContent>
      {/* </Card>
      </Container> */}

      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
      >
        {submitStatus ? (
          <Alert
            severity={submitStatus === "success" ? "success" : "error"}
            onClose={() => setSnackOpen(false)}
            sx={{ width: "100%" }}
          >
            {submitStatus === "success"
              ? "Consent form sent successfully!"
              : "Failed to send consent form."}
          </Alert>
        ) : undefined}
      </Snackbar>
    </div>
  );
}
