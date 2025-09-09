import { Box, Container, Typography, Chip } from "@mui/material";
import { School, Star, Spa } from "@mui/icons-material";
import { motion, easeOut } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      title: "Luxury",
      description: "Natural products and treatments in an elegant environment",
      icon: <Star sx={{ fontSize: 40, color: "#f5b041" }} />,
    },
    {
      title: "Clean",
      description: "Natural, clean ingredients and sustainable practices",
      icon: <Star sx={{ fontSize: 40, color: "#f5b041" }} />,
    },
    {
      title: "Sustainable",
      description: "Environmentally conscious approach to beauty and wellness",
      icon: <Spa sx={{ fontSize: 40, color: "#f5b041" }} />,
    },
  ];

  const storySections = [
    {
      title: "Our Origins",
      text: "Lough Skin was born from a passion for holistic wellness and the belief that true beauty comes from nurturing both the skin and the spirit. Founded in the heart of Loughborough, our spa represents a sanctuary where ancient wisdom meets modern skincare science.",
    },
    {
      title: "Our Founder",
      text: `LoughSkin was founded by Bithe also known as B, whose journey began in the fast-paced retail sector, 
             providing treatments to clients constantly on the move. It was here she discovered the value of helping 
             women pause, relax, and feel restored in the middle of their busy routines.`,
      text1:
        "Through dedicated training in both classic and modern techniques, her passion for self-care evolved into the creation of LoughSkin. Today, the brand is built on delivering high-quality treatments that combine skill, comfort, and genuine care—designed to make clients feel not only revitalised but truly looked after.",
    },
    {
      title: "Our Philosophy",
      text: `At LoughSkin, we believe self-care is not a luxury—it is a necessity.
             Our philosophy is rooted in the idea that true beauty comes from balance: moments of calm in a busy life, care that restores both skin and spirit, and treatments that blend expertise with a personal touch.`,
      text1: `We combine traditional practices with modern techniques to create experiences that go beyond the surface. 
              Every treatment is designed to nourish, rejuvenate, and leave you feeling renewed—inside and out.
              LoughSkin is more than a treatment; it is a sanctuary where luxury, expertise, and genuine care meet.`,
    },
  ];

  const certifications = [
    "CIBTAC Certified",
    "BABTAC Member",
    "Japanese HeadSpa Training",
    "Advanced Skincare Specialist",
    "VTCT",
    "CPD Credited",
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

  return (
    <Box
      sx={{
        py: 12,
        background: "linear-gradient(180deg, #fffaf4 0%, #fdf6f0 100%)",
        transition: "background 1s ease",
      }}
    >
      <Container maxWidth="lg">
        {/* About Title */}
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
            sx={{
              color: "#2c3e50",
              mb: 12,
              fontWeight: 700,
              textShadow: "1px 1px 5px rgba(0,0,0,0.1)",
            }}
          >
            About Lough Skin
          </Typography>
        </motion.div>

        {/* Our Story as Sections */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{ color: "#2c3e50", mb: 6 }}
          >
            Our Story
          </Typography>

          {storySections.map((section, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: index % 2 === 0 ? "row" : "row-reverse",
                  },
                  alignItems: "center",
                  gap: 6,
                  mb: 8,
                  p: 4,
                  background: "linear-gradient(135deg, #fff7f0, #fff1e6)",
                  borderRadius: 4,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.05)",
                }}
              >
                {/* Icon Circle */}
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: "#f5b041",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: { xs: 4, md: 0 },
                    flexShrink: 0,
                  }}
                >
                  {index === 0 && (
                    <Star sx={{ fontSize: 50, color: "white" }} />
                  )}
                  {index === 1 && (
                    <School sx={{ fontSize: 50, color: "white" }} />
                  )}
                  {index === 2 && <Spa sx={{ fontSize: 50, color: "white" }} />}
                </Box>

                {/* Text Content */}
                <Box
                  sx={{
                    flex: 1,
                    textAlign: {
                      xs: "center",
                      md: index % 2 === 0 ? "left" : "right",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#2c3e50", mb: 2, fontWeight: 600 }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#7f8c8d", lineHeight: 1.8 }}
                  >
                    {section.text}
                  </Typography>

                  {/* Check if text1 exists and display it */}
                  {section.text1 && (
                    <Typography
                      variant="body1"
                      sx={{ color: "#7f8c8d", lineHeight: 1.8, marginTop: 2 }}
                    >
                      {section.text1}
                    </Typography>
                  )}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Our Values */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{ color: "#2c3e50", mb: 6 }}
          >
            Our Values
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              justifyContent: "center",
            }}
          >
            {values.map((value, index) => (
              <motion.div key={index} custom={index + 1} variants={fadeInUp}>
                <Box
                  sx={{
                    width: 320,
                    height: 360,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    p: 4,
                    borderRadius: 5,
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
                    background: "linear-gradient(145deg, #fff7f0, #fff1e6)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box mb={3}>{value.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "#2c3e50", mb: 1, fontWeight: 600 }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#7f8c8d", lineHeight: 1.6 }}
                  >
                    {value.description}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Box
            sx={{
              textAlign: "center",
              p: 4,
              backgroundColor: "#f0f2f4",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h4" sx={{ color: "#2c3e50", mb: 4 }}>
              Certifications & Training
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
              }}
            >
              {certifications.map((cert, index) => (
                <Chip
                  key={index}
                  icon={<School />}
                  label={cert}
                  sx={{
                    backgroundColor: "#2c3e50",
                    color: "white",
                    fontSize: "1rem",
                    py: 2,
                    px: 1.5,
                  }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
