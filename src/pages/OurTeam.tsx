import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { Spa } from "@mui/icons-material";
import { motion, easeOut } from "framer-motion";

const team = [
  {
    name: "Bithe (B)",
    role: "Therapist & Beauty Specialist",
    desc: `With nearly 10 years in the makeup and beauty industry and a retail-based role with Dior, I've had the privilege of working closely with clients every day, helping them feel confident through makeup and skincare. Through these experiences, I discovered my true passion: creating moments of calm.\n\nI focus on delivering deeply relaxing, result-driven treatments with a personal touch and keen attention to detail. Whether addressing specific skin concerns or providing a soothing HeadSpa experience, my goal is to offer a peaceful space where self-care thrives and every visit feels like a journey toward beauty and well-being.`,
    tags: [
      "Facialist",
      "HeadSpa Specialist",
      "10+ Years Experience",
      "VTCT Qualified",
      "CPD Credited",
    ],
    image: "image2.jpeg",
  },
  {
    name: "Shriya",
    role: "Body & Wellbeing Therapist",
    desc: `Hi, I’m Shriya! With a bubbly personality and a love for good conversation, I’m passionate about body contouring, wood therapy, lymphatic drainage, and overall wellbeing. I create calm, relaxing experiences tailored to each client.\n\nWith careful attention to skin concerns and soothing HeadSpa treatments, my goal is to provide a peaceful space where self-care thrives and every visit becomes a journey of beauty and renewal.`,
    tags: [
      "Facialist",
      "Lymphatic Expert",
      "HeadSpa Therapy",
      "VTCT Qualified",
      "CPD Credited",
    ],
    image: "image1.jpeg",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: easeOut },
  }),
};

export default function OurTeamPage() {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #fffaf4 0%, #f8f8f8 100%)",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ mb: 2, color: "#2c3e50" }}
          >
            Meet Our Team
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ color: "#7f8c8d", mb: 8 }}
          >
            Passionate professionals dedicated to your wellness and beauty
            journey.
          </Typography>
        </motion.div>

        {/* Team Members */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i + 1}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: i % 2 === 0 ? "row" : "row-reverse",
                  },
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: { xs: "100%", md: "45%" },
                    height: 350,
                    objectFit: "cover",
                    borderRadius: 3,
                    boxShadow: 3,
                  }}
                />

                {/* Text Content */}
                <Card
                  sx={{
                    flex: 1,
                    p: 4,
                    borderRadius: 3,
                    boxShadow: 3,
                    backgroundColor: "#fff",
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ color: "#2c3e50", fontWeight: 600 }}
                    >
                      {member.name}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#a67c5b" }}>
                      {member.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#7f8c8d",
                        whiteSpace: "pre-line",
                        lineHeight: 1.8,
                      }}
                    >
                      {member.desc}
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}
                    >
                      {member.tags.map((tag, idx) => (
                        <Chip
                          key={idx}
                          icon={<Spa />}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: "#a67c5b",
                            color: "white",
                            cursor: "default",
                            "&:hover": {
                              transform: "scale(1.05)",
                              transition: "0.2s",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
