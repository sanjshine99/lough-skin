"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Rating,
  Avatar,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { easeOut, motion } from "framer-motion";
import { useState } from "react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      author: "Catherine",
      location: "Local",
      rating: 5,
      service: "Head Spa",
      text: "Absolutely amazing! My first time experiencing the head spa and have recommended it to all my girls and also my boyfriend. Can’t recommend enough!! Do not hesitate to book, it’s a must. Salon is luxurious 🤎",
    },
    {
      author: "Elaine Croshaw",
      location: "Loughborough",
      rating: 5,
      service: "Facial + Massage",
      text: "Amazing experience from start to finish. The room was set up lovely, the facial felt so indulgent, finished with the head and shoulder massage. My skin felt so smooth and clean after the facial and the head massage was an amazing experience.",
    },
    {
      author: "Mia Evans",
      location: "Local Guide",
      rating: 5,
      service: "Full Body + Head Massage",
      text: "Kindly moved my appointment to squeeze me in before officially opening, such a lovely experience and will definitely be back! Full body massage & head massage were great and very relaxing & needed!",
    },
    {
      author: "Safiyha Davies",
      location: "Loughborough",
      rating: 5,
      service: "Skin Treatment",
      text: "I had my treatment done with Shriya today, she was so lovely & very professional. I really enjoyed my treatment and the results also after just one session! Highly recommend & I will definitely be back again 😍 also the salon is so nice inside I love it!",
    },
    {
      author: "Zoe Watret",
      location: "Loughborough",
      rating: 5,
      service: "Body Contour Bundle",
      text: "I booked in for the body contour bundle on my torso and it was brilliant! Shriya was so knowledgeable and professional. She made me feel super comfortable getting this treatment done on something I’m so insecure about.",
    },
    {
      author: "Lauren Bolus-Jones",
      location: "Local Guide",
      rating: 5,
      service: "Luxury Head Spa + Facial + Dermaplaning",
      text: "What a blissful few hours! I went for the luxury Japanese head spa, facial & dermaplaning. It was fantastic, first time coming after finding on Instagram and I will be back. One of the best facials ever!",
    },
    {
      author: "Sameena Amin",
      location: "Manchester",
      rating: 5,
      service: "Microneedling + Head Spa + Full Body Massage",
      text: "Truly one of the most amazing experiences! Coming from Manchester me and my sister booked Shreya and Bee for micro needling, Japanese head spa and a full body massage - both ladies were so attentive to our needs and made sure we felt relaxed the whole time!",
    },
    {
      author: "Matylda Drost",
      location: "Loughborough",
      rating: 5,
      service: "Skin Treatment",
      text: "Had the best experience with Shriya, so friendly and welcoming. She made me feel comfortable and walked me through the whole process. Definitely knows what she’s doing and to top it off the results are amazing 😝",
    },
    {
      author: "B K",
      location: "Loughborough",
      rating: 5,
      service: "Couples Head Spa + Luxury Facial",
      text: "My husband and I booked a couples Japanese head spa with the luxury facial and we were not disappointed, 2 hours of pure bliss! It was the perfect little treat for us before we welcome our baby soon and they made sure I was comfortable.",
    },
    {
      author: "Vicki Arnett",
      location: "Loughborough",
      rating: 5,
      service: "Facials",
      text: "I’ve been for many facials in my life and hands down Lough Skin do the best facials. From start to finish it was amazing. Thank you so much to Shriya my skin feels great.",
    },
    {
      author: "Rashpal Bassi",
      location: "TikTok Client",
      rating: 5,
      service: "Head Spa + Luxury Facial",
      text: "I went for a Japanese head spa and luxury facial after finding on TikTok, I have to say I was blown away from start to finish. B was very attentive and welcoming, the room was very inviting and I felt relaxed straight away.",
    },
    {
      author: "A Hussain",
      location: "Loughborough",
      rating: 5,
      service: "Luxury Head Spa",
      text: "I went for the Luxury Japanese Head Spa with LoughSkin and it was the most amazing experience. It came with a mini facial and massage, the whole experience was amazing! I was greeted by the lovely Bithe and she made me feel at ease.",
    },
    {
      author: "Katunei999",
      location: "Loughborough",
      rating: 5,
      service: "Luxury Head Spa + Facial",
      text: "I wanted to treat myself for my birthday and I'm glad I took the leap! I had the luxury Japanese head spa and facial, and it was immensely peaceful and relaxing. Worth every penny. Service was wonderful; B was so inviting.",
    },
    {
      author: "Sufiya Panchbhaya",
      location: "Loughborough",
      rating: 5,
      service: "Head Spa + Luxury Facial",
      text: "I recently visited LoughSkin for a Japanese head spa and luxury facial, and I was completely blown away by the experience! From the moment I walked in, I was greeted with a warm and inviting atmosphere that immediately put me at ease.",
    },
    {
      author: "Laura Partington",
      location: "Loughborough",
      rating: 5,
      service: "Luxury Head Spa + Facial + Vitamin C",
      text: "I had the luxury head spa and facial with Vitamin C treatment, and it was incredibly relaxing. The massages were fantastic, just the right pressure throughout. I even dozed off a few times because I was so relaxed.",
    },
    {
      author: "Tasneem Subedar",
      location: "Loughborough",
      rating: 5,
      service: "Luxury Head Spa + Facial",
      text: "Cannot recommend LoughSkin in Loughborough enough. B took special attention to make this a truly relaxing and luxurious experience. I had the luxury Japanese head spa and facial gifted to me as a present and I will definitely be returning.",
    },
    {
      author: "Juvannah Brown",
      location: "Loughborough",
      rating: 5,
      service: "Luxury Head Spa + Facial",
      text: "I had the Japanese Inspired Luxury Headspa + Luxury Facial with B. I cannot describe how clean and fresh I felt afterwards, would book in weekly if I could.",
    },
    {
      author: "Rhyanne Lautier",
      location: "Visitor",
      rating: 5,
      service: "Head Spa",
      text: "I’m visiting the area and got a last minute booking for a Japanese head spa treatment. I’m so glad I did as it was an amazing experience! B is so lovely and made me feel super comfortable. The treatment itself was incredible. Highly recommend!",
    },
    {
      author: "Naima Khatun",
      location: "Loughborough",
      rating: 5,
      service: "Facial + Head Spa",
      text: "Always a lovely experience when I visit, so professional and B really takes her time and puts her all in making her customers feel the best.",
    },
    {
      author: "Leanne Heffer",
      location: "Local Guide",
      rating: 5,
      service: "Luxury Head Spa + Facial",
      text: "The most magical time. I had the luxury headspa with facial and I can't recommend it enough! B was amazing, so so friendly, very educated, explained everything & the tension was perfection.",
    },
    {
      author: "Abbey Hynes",
      location: "Local Guide",
      rating: 5,
      service: "Luxury Head Spa + Facial",
      text: "This was incredible and hands down the best treatment I’ve had (luxury Japanese headspa and facial). I was made to feel so relaxed, and the headspa is as good as it looks on social media. My hair and scalp feels amazing.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 2; // show 2 reviews at a time

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCards : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - visibleCards ? 0 : prev + 1
    );
  };

  return (
    <Box sx={{ py: 8, position: "relative" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            gutterBottom
            sx={{ color: "#2c3e50", mb: 2 }}
          >
            Client Testimonials
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ color: "#7f8c8d", mb: 6 }}
          >
            Hear what our valued clients have to say about their experience at
            Lough Skin
          </Typography>
        </motion.div>

        {/* Slider Wrapper */}
        <Box
          sx={{
            display: "flex",
            overflow: "hidden",
            position: "relative",
            p: 10,
          }}
        >
          <motion.div
            style={{
              display: "flex",
              gap: "24px",
              width: "100%",
            }}
            animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                sx={{
                  flex: `0 0 ${100 / visibleCards}%`,
                  maxWidth: 400,
                  p: 3,
                  boxShadow: 3,
                  borderRadius: 3,
                  backgroundColor: "white",
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        backgroundColor: "#a67c5b",
                        mr: 2,
                        fontSize: "1.5rem",
                      }}
                    >
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ color: "#2c3e50", fontWeight: "bold" }}
                      >
                        {testimonial.author}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#7f8c8d" }}>
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>

                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />

                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: "italic",
                      mb: 3,
                      color: "#2c3e50",
                      lineHeight: 1.6,
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>

                  <Box
                    sx={{
                      backgroundColor: "#f8f9fa",
                      p: 2,
                      borderRadius: 2,
                      borderLeft: "4px solid #a67c5b",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#a67c5b", fontWeight: "bold" }}
                    >
                      Service: {testimonial.service}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </Box>

        {/* Custom Arrows */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: 10, md: 30 },
            transform: "translateY(-50%)",
            backgroundColor: "white",
            boxShadow: 2,
            "&:hover": { backgroundColor: "#f1f1f1" },
          }}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: 10, md: 30 },
            transform: "translateY(-50%)",
            backgroundColor: "white",
            boxShadow: 2,
            "&:hover": { backgroundColor: "#f1f1f1" },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Container>
    </Box>
  );
}
