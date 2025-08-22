import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
} from "@mui/material";
import { Spa } from "@mui/icons-material";
import { motion, easeOut } from "framer-motion";

// Replace these with your actual image URLs or import them if local
const team = [
  {
    name: "Bithe (B)",
    role: "Therapist & Beauty Specialist",
    desc: `With nearly 10 years in the makeup and beauty industry and a retail-based role with Dior, I've had the privilege of working closely with clients every day, helping them feel confident through makeup and skincare. Through these experiences, I discovered my true passion: creating moments of calm.

I focus on delivering deeply relaxing, result-driven treatments with a personal touch and keen attention to detail. Whether addressing specific skin concerns or providing a soothing HeadSpa experience, my goal is to offer a peaceful space where self-care thrives and every visit feels like a journey toward beauty and well-being.`,
    tags: [
      "Facialist",
      "HeadSpa Specialist",
      "10+ Years Experience",
      "VTCT Qualified",
      "CPD Credited",
    ],
    image: "image2.jpeg", // Replace with actual image path
  },
  {
    name: "Shriya",
    role: "Body & Wellbeing Therapist",
    desc: `Hi, I’m Shriya! With a bubbly personality and a love for good conversation, I’m passionate about body contouring, wood therapy, lymphatic drainage, and overall wellbeing. I create calm, relaxing experiences tailored to each client.

With careful attention to skin concerns and soothing HeadSpa treatments, my goal is to provide a peaceful space where self-care thrives and every visit becomes a journey of beauty and renewal.`,
    tags: [
      "Lymphatic Expert",
      "HeadSpa Therapy",
      "VTCT Qualified",
      "CPD Credited",
    ],
    image: "image1.jpeg", // Replace with actual image path
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

export default function OurTeamPage() {
  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(180deg, #fffaf4 0%, #f8f8f8 100%)",
      }}
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            gutterBottom
            sx={{ color: "#2c3e50", mb: 6 }}
          >
            Meet Our Team
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {/* {team.map((member, i) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3, // space between cards
                justifyContent: "center",
              }}
            > */}
          {team.map((member, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              variants={fadeInUp}
              style={{ flex: "1 1 45%" }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  boxShadow: 3,
                  backgroundColor: "white",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: "100%",
                    height: 240,
                    objectFit: "cover",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography variant="h5" sx={{ color: "#2c3e50", mb: 1 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#a67c5b", mb: 2 }}>
                      {member.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#7f8c8d",
                        whiteSpace: "pre-line",
                        mb: 3,
                      }}
                    >
                      {member.desc}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      justifyContent: "center",
                      mt: 2,
                    }}
                  >
                    {member.tags.map((tag, idx) => (
                      <Chip
                        key={idx}
                        icon={<Spa />}
                        label={tag}
                        size="small"
                        sx={{ backgroundColor: "#a67c5b", color: "white" }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          {/* </Box> */}
          {/* ))} */}
        </Box>
      </Container>
    </Box>
  );
}
