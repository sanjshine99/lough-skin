import React, { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  IconButton,
} from "@mui/material";
import { AccessTime, ShoppingCart } from "@mui/icons-material";
import { easeOut, motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: easeOut },
  }),
};

// Hardcoded services
const THERAPY_SERVICES = [
  {
    _id: "1",
    name: "Lymph therapy full body",
    duration: 50,
    price: 65,
    description:
      "Full Body Lymphatic Drainage Massage A gentle, rhythmic treatment designed to stimulate the lymphatic system, reduce fluid retention, boost circulation, and support the body’s natural detox process. Ideal for bloating, getting rid of toxins or general wellness",
  },
  {
    _id: "2",
    name: "Hot river rock therapy",
    duration: 60,
    price: 65,
    description:
      "Hot river rock therapy uses smooth, heated basalt stones to relax muscles and provide warmth. The hot stones are placed on key points of the body to relieve tension and may also use them to gently massage the muscles. The heat and pressure help reduce stiffness, improve circulation, and promote relaxation.",
  },
  {
    _id: "3",
    name: "Hot river rock back therapy",
    duration: 30,
    price: 35,
    description:
      "Hot river rock therapy uses smooth, heated basalt stones to relax muscles and provide warmth. The hot stones are placed on key points of the body to relieve tension and may also use them to gently massage the muscles. The heat and pressure help reduce stiffness, improve circulation, and promote relaxation.",
  },
];

const ADDON_SERVICES = [
  {
    _id: "4",
    name: "Microneedling Hands",
    duration: 25,
    price: 35,
    description:
      "Microneedling for the hands is an effective treatment for improving the appearance of aging hands by stimulating collagen and elastin production, which can help reduce wrinkles, improve skin texture, and address sunspots",
  },
  {
    _id: "5",
    name: "Microneedling Neck",
    duration: 20,
    price: 30,
    description:
      "Microneedling the neck helps to stimulate collagen and elastin production, which can improve skin texture, firmness, and reduce the appearance of wrinkles and fine lines.",
  },
  {
    _id: "6",
    name: "Dermaplaning",
    duration: 15,
    price: 25,
    description:
      "Please note: Dermaplaning is an add on service, you would need to book a facial and add Dermaplaning as an add on. Dermaplaning is a cosmetic treatment in which dead skin cells and peach fuzz are scraped off with a scalpel by a plastic surgeon, dermatologist, or cosmetologist. While dermaplaning removes fine facial hairs, the procedure differs from shaving in terms of the tools used, the amount of skin removed, and the person performing the procedure.",
  },
  {
    _id: "7",
    name: "Vitamin C serum",
    duration: 5,
    price: 10,
    description:
      "Reduces wrinkles. Protects collagen and increases production. Aids wound healing. Helps protect against sun damage. Reduces hyperpigmentation. Evens skin tone. Brightens complexion. Acts like armour against pollution and other free radicals.",
  },
  {
    _id: "8",
    name: "Anti age serum",
    duration: 5,
    price: 12,
    description:
      "Anti age serum reduces the appearance of various effects of aging such as fine lines, wrinkles, hyperpigmentation, and sun spots. Non-invasive and safe.",
  },
];

const FACIAL_SCULPT_SERVICES = [
  {
    _id: "9",
    name: "Buccalfacial",
    duration: 35,
    price: 55,
    description:
      "The buccofacial region includes the cheeks and surrounding facial structures. It plays an important role in facial expression, speech, and chewing, while also contributing to overall facial balance and aesthetics. Treatments in this area can enhance contour, restore volume, and improve both function and appearance.",
  },
  {
    _id: "10",
    name: "Facial sculpting massage",
    duration: 25,
    price: 45,
    description:
      "Feel renewed with our Facial Sculpting Massage. This therapeutic treatment releases tension, relaxes facial muscles, and provides a sense of calm and well-being. Ideal for those looking to relieve stress while naturally enhancing facial contours and radiance.",
  },
];

const CONSULTATION_SERVICES = [
  {
    _id: "11",
    name: "In person consultation",
    duration: 15,
    price: 10,
    description:
      "This is an in person consultation where we can analyse and asses the treatment you may require and what your goals may be",
  },
];

const ServiceSection = ({ title, services, onAddToCart }: any) => (
  <Box sx={{ mb: 8 }}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <Typography variant="h4" sx={{ color: "#2c3e50", mb: 4 }}>
        {title}
      </Typography>
    </motion.div>

    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {services.map((service: any, index: any) => (
        <motion.div
          key={service._id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
          variants={fadeIn}
        >
          <Card
            sx={{
              p: 3,
              boxShadow: 4,
              borderRadius: 3,
              background: "linear-gradient(to right, #fff, #fdf7f1)",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "translateY(-4px)" },
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "#2c3e50", fontWeight: "bold" }}
                >
                  {service.name}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Chip
                    icon={<AccessTime sx={{ fontSize: 18 }} />}
                    label={`${service.duration} min`}
                    variant="outlined"
                    sx={{
                      height: 32,
                      borderColor: "#a67c5b",
                      color: "#a67c5b",
                      fontSize: 14,
                    }}
                  />
                  <Chip
                    label={`£${service.price}`}
                    sx={{
                      height: 32,
                      backgroundColor: "#a67c5b",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  />
                  <IconButton
                    sx={{
                      height: 32,
                      width: 32,
                      border: "1px solid #a67c5b",
                      color: "#a67c5b",
                      "&:hover": {
                        backgroundColor: "#f5eee7",
                        borderColor: "#a67c5b",
                      },
                    }}
                    onClick={() => onAddToCart(service)}
                  >
                    <ShoppingCart sx={{ fontSize: 18 }} />
                  </IconButton>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ color: "#7f8c8d", mb: 3 }}>
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
  </Box>
);

export default function ServicesPage() {
  const { addToCart } = useCart();
  const containerRef: any = useRef(null);

  return (
    <Box sx={{ py: 8, background: "#fff8f3" }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ color: "#2c3e50", mb: 6, fontWeight: 600 }}
          >
            Our Services
          </Typography>
        </motion.div>

        {/* Therapy Section */}
        <ServiceSection
          title="Therapy"
          services={THERAPY_SERVICES}
          onAddToCart={addToCart}
        />

        {/* Add-ons Section */}
        <ServiceSection
          title="Add-ons"
          services={ADDON_SERVICES}
          onAddToCart={addToCart}
        />

        {/* Facial Sculpt Section */}
        <ServiceSection
          title="Facial Sculpt"
          services={FACIAL_SCULPT_SERVICES}
          onAddToCart={addToCart}
        />

        {/* Consultation Section */}
        <ServiceSection
          title="Consultation"
          services={CONSULTATION_SERVICES}
          onAddToCart={addToCart}
        />
      </Container>
    </Box>
  );
}
