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
    name: "Dermaplaning",
    duration: 15,
    price: 25,
    description:
      "Please note: Dermaplaning is an add on service, you would need to book a facial and add Dermaplaning as an add on. Dermaplaning is a cosmetic treatment in which dead skin cells and peach fuzz are scraped off with a scalpel by a plastic surgeon, dermatologist, or cosmetologist. While dermaplaning removes fine facial hairs, the procedure differs from shaving in terms of the tools used, the amount of skin removed, and the person performing the procedure.",
  },
  {
    _id: "5",
    name: "Microneedling Hands",
    duration: 25,
    price: 35,
    description:
      "Microneedling for the hands is an effective treatment for improving the appearance of aging hands by stimulating collagen and elastin production, which can help reduce wrinkles, improve skin texture, and address sunspots",
  },
  {
    _id: "6",
    name: "Microneedling Neck",
    duration: 20,
    price: 30,
    description:
      "Microneedling the neck helps to stimulate collagen and elastin production, which can improve skin texture, firmness, and reduce the appearance of wrinkles and fine lines.",
  },
  {
    _id: "7",
    name: "Anti age serum",
    duration: 5,
    price: 12,
    description:
      "Anti age serum reduces the appearance of various effects of aging such as fine lines, wrinkles, hyperpigmentation, and sun spots. Non-invasive and safe.",
  },
  {
    _id: "8",
    name: "Vitamin C serum",
    duration: 5,
    price: 10,
    description:
      "Reduces wrinkles. Protects collagen and increases production. Aids wound healing. Helps protect against sun damage. Reduces hyperpigmentation. Evens skin tone. Brightens complexion. Acts like armour against pollution and other free radicals.",
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
    price: "free",
    description:
      "Unlock your healthiest glow with personalised guidance and expert advice for every treatment. We analyse your skin, discuss your goals, and recommend options tailored to your unique needs. Enjoy a thoughtful, one-on-one approach designed to help you look and feel your best.",
  },
];

const FACIAL_SERVICES = [
  {
    _id: "5",
    name: "Party Glow Facial",
    duration: 35,
    price: 55,
    description:
      "Double cleanse, lymphatic drainage using gua sha, dermaplaning exfoliation, toner, facial massage with moisturiser & SPF, optional herbal tea.",
  },
  {
    _id: "6",
    name: "Luxury Facial",
    duration: 50,
    price: 65,
    description:
      "Double cleanse, lymphatic drainage, steam with exfoliation, hot towel, nourishing mask with shoulder & neck massage, LED light therapy, head massage, hydrating facial massage, SPF, optional herbal tea.",
  },
  {
    _id: "7",
    name: "HydraFacial",
    duration: 75,
    price: 95,
    description:
      "Double cleanse, lymphatic drainage, steam with exfoliation, hot towel, manual extraction, hydra dermabrasion, nourishing mask with shoulder & neck massage, LED light therapy, head massage, hydrating facial massage, SPF, optional herbal tea.",
  },
  {
    _id: "8",
    name: "BioRe Peel with Microneedling",
    duration: 75,
    price: 105,
    description:
      "Double cleanse, gua sha lymphatic drainage, steam with exfoliation, hot towel, BioRepeel + Microneedling, cold globe treatment, mask with shoulder & neck massage, LED light therapy, head massage, facial massage with SPF, optional herbal tea.",
  },
  {
    _id: "9",
    name: "LoughGlow",
    duration: 60,
    price: 85,
    description:
      "Double cleanse, gua sha lymphatic drainage, steam with exfoliation, hot towel, mask with shoulder & neck massage, microneedling with glow serum, LED light therapy, head massage, hydrating facial massage with SPF, optional herbal tea.",
  },
  {
    _id: "10",
    name: "Age Rewind",
    duration: 75,
    price: 85,
    description:
      "Double cleanse, gua sha lymphatic drainage, steam with exfoliation, hot towel, nourishing mask with shoulder, neck & head massage, microneedling with age-rewind serum, LED light therapy, head massage, hydrating facial massage with SPF, optional herbal tea.",
  },
  {
    _id: "10",
    name: "Bacial",
    duration: 50,
    price: 65,
    description: `The Bacial is a luxurious treat and a deep cleanse for that hard to reach area, Combining the relaxation of massage with the cleansing power of a facial.
Whether you suffer from bacne (back acne), maybe your skins extremely dry and itchy or it may simply just need some TLC, Lough Skin “Bacial” Treatment has you covered.
Ideal for those with congestion, breakouts or acne on the back. However this treatment can be customised to suit absolutely anyone.
Consists of:
+double cleanse
10min steam, with exfoliation &
hot towel treatment 
extraction
Purifying mask
Finished with a back massage
Finally relax after your treatment with a optional complimentary herbal tea.`,
  },
];

const BODY_SCULPT_SERVICES = [
  {
    _id: "11",
    name: "Sculpt Bundle Thighs (Front, Back, Inner Thighs) Both Thighs",
    duration: 120,
    price: 200,
    description:
      "Full thigh sculpting with ultrasonic cavitation + radio frequency + wood therapy for smoother, well-proportioned contours.",
  },
  {
    _id: "12",
    name: "Sculpt Bundle (Abdomen)",
    duration: 70,
    price: 110,
    description:
      "Ultrasonic cavitation + radio frequency + wood therapy to help reduce localised fat, improve circulation, and tighten the abdomen.",
  },
  {
    _id: "13",
    name: "Sculpt Bundle (Side of Thighs)",
    duration: 50,
    price: 75,
    description:
      "Ultrasonic cavitation + radio frequency + wood therapy to smooth skin and improve thigh contours.",
  },
  {
    _id: "14",
    name: "Sculpt Bundle (Inner Thighs)",
    duration: 45,
    price: 70,
    description:
      "Ultrasonic cavitation + radio frequency + wood therapy to smooth skin and improve thigh contours.",
  },
  {
    _id: "15",
    name: "Sculpt Bundle (Front of Thighs)",
    duration: 50,
    price: 75,
    description:
      "Ultrasonic cavitation + radio frequency + wood therapy to smooth skin and improve thigh contours.",
  },
  {
    _id: "16",
    name: "Sculpt Bundle (Back of Thighs)",
    duration: 50,
    price: 75,
    description:
      "Ultrasonic cavitation + radio frequency + wood therapy to smooth skin and improve thigh contours.",
  },
];

const SKIN_TIGHTENING_SERVICES = [
  {
    _id: "17",
    name: "Chin and Jaw",
    duration: 35,
    price: 65,
    description:
      "Radio frequency treatment to tighten skin, improve texture, and stimulate collagen and elastin for smoother, firmer appearance.",
  },
  {
    _id: "18",
    name: "Abdomen",
    duration: 40,
    price: 70,
    description:
      "Radio frequency treatment to tighten skin, improve texture, and stimulate collagen and elastin for smoother, firmer appearance.",
  },
  {
    _id: "19",
    name: "Back Rolls",
    duration: 40,
    price: 70,
    description:
      "Radio frequency treatment to tighten skin, improve texture, and stimulate collagen and elastin for smoother, firmer appearance.",
  },
  {
    _id: "20",
    name: "Glutes",
    duration: 40,
    price: 70,
    description:
      "Radio frequency treatment to tighten skin, improve texture, and stimulate collagen and elastin for smoother, firmer appearance.",
  },
];

const WOOD_THERAPY_SERVICES = [
  {
    _id: "21",
    name: "Wood Therapy (Abdomen)",
    duration: 35,
    price: 60,
    description:
      "Sculpting massage using wooden tools to shape and tone the body, reduce cellulite, and stimulate circulation.",
  },
  {
    _id: "22",
    name: "Wood Therapy (Buttocks)",
    duration: 35,
    price: 55,
    description:
      "Sculpting massage using wooden tools to shape and tone the body, reduce cellulite, and stimulate circulation.",
  },
  {
    _id: "23",
    name: "Wood Therapy (Back of Thighs)",
    duration: 40,
    price: 55,
    description:
      "Sculpting massage using wooden tools to shape and tone the body, reduce cellulite, and stimulate circulation.",
  },
  {
    _id: "24",
    name: "Wood Therapy (Inner Thighs)",
    duration: 35,
    price: 60,
    description:
      "Sculpting massage using wooden tools to shape and tone the body, reduce cellulite, and stimulate circulation.",
  },
];

const MASSAGE_SERVICES = [
  {
    _id: "m1",
    name: "Bamboo Full Body Deep Tissue Massage",
    duration: 65, // 1 hr 5 mins
    price: 75,
    description:
      "Stimulate your circulation with the unique properties of Bamboo massage. Guaranteed to relax tight muscles and aid in stress relief. Certain problem areas can be targeted in this treatment to ensure that muscles are lengthened and tension is removed. Perfect for those wanting a deep penetration to aid stimulation and lymphatic drainage.",
  },
  {
    _id: "m2",
    name: "Bamboo back deep tissue massage",
    duration: 30, // 1 hr 5 mins
    price: 45,
    description:
      "Experience a revitalising back massage designed to target deep muscle tension with the unique use of bamboo. This treatment blends firm pressure and soothing movements, helping you unwind and ease away daily stress. Ideal for those seeking a truly restorative massage experience.",
  },
  {
    _id: "m3",
    name: "Full Body Relaxation Therapy",
    duration: 60,
    price: 60,
    description:
      "Relaxing full body massage is a classic massage technique using gentle to moderate pressure and long, gliding strokes, kneading, and circular movements across the entire body. This therapy aims to ease muscular tension, improve circulation, and promote deep relaxation.",
  },
  {
    _id: "m4",
    name: "Back Relaxation Therapy",
    duration: 30,
    price: 35,
    description:
      "It helps relax muscles, reduce stress, improve circulation, and relieve pain or tension.",
  },
  {
    _id: "m5",
    name: "Lymph Therapy Abdomen",
    duration: 30,
    price: 40,
    description:
      "Lymphatic drainage massage can ease swelling that occurs with a blocked lymphatic system. It moves waste toward your lymph nodes to rid your body of toxins.",
  },
  {
    _id: "m6",
    name: "Hot River Rock Therapy",
    duration: 60,
    price: 65,
    description:
      "Hot river rock therapy uses smooth, heated basalt stones to relax muscles and provide warmth. The hot stones are placed on key points of the body to relieve tension and may also use them to gently massage the muscles. The heat and pressure help reduce stiffness, improve circulation, and promote relaxation.",
  },
  {
    _id: "m7",
    name: "Hot River Rock Back Therapy",
    duration: 30,
    price: 35,
    description:
      "Hot river rock therapy uses smooth, heated basalt stones to relax muscles and provide warmth. The hot stones are placed on key points of the body to relieve tension and may also use them to gently massage the muscles. The heat and pressure help reduce stiffness, improve circulation, and promote relaxation.",
  },
];

const FEATURED_SERVICES = [
  {
    _id: "m8",
    name: "Luxury facial",
    duration: 50,
    price: 65,
    description:
      "Begin with a gentle double cleanse followed by lymphatic drainage using gua sha to reduce puffiness and boost circulation. Enjoy a 10-minute steam combined with exfoliation and a soothing hot towel treatment to prepare the skin for extractions. A nourishing mask is applied while you relax with a calming shoulder and neck massage. Experience the benefits of LED light therapy paired with a gentle head massage, then finish with a hydrating moisturizer, facial massage, and SPF protection. Complete your experience with an optional complimentary herbal tea for added relaxation.",
  },
  {
    _id: "m9",
    name: "Japanese Inspired Luxury HeadSpa",
    duration: 60,
    price: 105,
    description: `Beginning with gentle brushing to boost circulation 
Scalp oil & head massage using different tools
Salt scrub exfoliation of the scalp
Herbal hair soak & steam
Double lather wash
Herbal hair mask & final wash
leave in conditioner & lightly towel dry
Optional: complimentary herbal tea and dry hair`,
  },
  {
    _id: "m10",
    name: "HydraFacial",
    duration: 65,
    price: 95,
    description: `This deeply cleansing treatment begins with a gentle double cleanse, followed by lymphatic drainage using gua sha to reduce puffiness and improve circulation. Enjoy a 10-minute steam with exfoliation and a hot towel treatment to prepare the skin for manual extraction. Next, a hydra dermabrasion gently resurfaces the skin for a radiant glow. A nourishing mask is applied while you relax with a soothing shoulder and neck massage. Experience LED light therapy combined with a calming head massage, then finish with a hydrating facial massage using moisturizer and SPF. Complete your experience with an optional complimentary herbal tea for added relaxation.`,
  },
  {
    _id: "m11",
    name: "Dermaplaning",
    duration: 15,
    price: 25,
    description: `Please note: Dermaplaning is an add on service, you would need to book a facial and add Dermaplaning as an add on. 
Dermaplaning is a cosmetic treatment in which dead skin cells and peach fuzz are scraped off with a scalpel by a plastic surgeon, dermatologist, or cosmetologist. While dermaplaning removes fine facial hairs, the procedure differs from shaving in terms of the tools used, the amount of skin removed, and the person performing the procedure.`,
  },
  {
    _id: "m12",
    name: "Japanese inspired Luxury Headspa + Luxury Facial",
    duration: 100,
    price: 145,
    description: `Begin with a soothing double cleanse followed by gentle lymphatic drainage using gua sha to promote circulation and detoxify the skin. Enjoy a 10-minute steam paired with exfoliation and a hot towel treatment to open pores and refresh your complexion, preparing for extraction, a nourishing mask is applied, with a relaxing shoulder and neck massage eases tension.

Transition into the Head Spa, beginning with gentle brushing, next a deeply relaxing oil head massage with specialised tools to stimulate scalp health. This is followed by steam and exfoliation of the scalp, a thorough shampoo massage and waterfall wash, and a restorative hair mask with a final waterfall wash and rinse. Your hair is treated with leave-in conditioner and lightly towel-dried for a soft finish.

The experience concludes with a moisturiser facial massage and SPF application to protect and hydrate your skin. Optional complimentary herbal tea and dry hair service are available to complete your indulgent treatment.`,
  },
  {
    _id: "m13",
    name: "Lymph therapy full body",
    duration: 50,
    price: 65,
    description: `Full Body Lymphatic Drainage Massage
A gentle, rhythmic treatment designed to stimulate the lymphatic system, reduce fluid retention, boost circulation, and support the body’s natural detox process. Ideal for bloating, getting rid of toxins or general wellness`,
  },
];

const Japanese_Inspired_Luxury_HeadSpa_Services = [
  {
    _id: "m14",
    name: "Japanese Inspired Luxury HeadSpa",
    duration: 60,
    price: 105,
    description: `Beginning with gentle brushing to boost circulation 
Scalp oil & head massage using different tools
Salt scrub exfoliation of the scalp
Herbal hair soak & steam
Double lather wash
Herbal hair mask & final wash
leave in conditioner & lightly towel dry
Optional: complimentary herbal tea and dry hair`,
  },
  {
    _id: "m14",
    name: "Japanese inspired Luxury HeadSpa + Mini Facial",
    duration: 80,
    price: 125,
    description: `Begin with a gentle double cleanse followed by lymphatic drainage using gua sha to boost circulation and detoxify the skin. Relax as a nourishing mask is applied alongside a soothing shoulder and neck massage.

Transition into the Head Spa, beginning with gentle brushing to boost circulation, next a deeply relaxing oil head massage with specialised tools to stimulate scalp health. This is followed by steam and sea salt exfoliation of the scalp, a thorough shampoo massage and waterfall wash, a restorative hair mask with massage and a final waterfall wash and rinse. Your hair is treated with leave-in conditioner and lightly towel-dried for a soft finish.

The experience concludes with a moisturiser facial massage and SPF application to protect and hydrate your skin. Optional complimentary herbal tea and dry hair service are available to complete your indulgent treatment.`,
  },
  {
    _id: "m15",
    name: "Japanese inspired Luxury Headspa + Luxury Facial",
    duration: 100,
    price: 145,
    description: `Begin with a soothing double cleanse followed by gentle lymphatic drainage using gua sha to promote circulation and detoxify the skin. Enjoy a 10-minute steam paired with exfoliation and a hot towel treatment to open pores and refresh your complexion, preparing for extraction, a nourishing mask is applied, with a relaxing shoulder and neck massage eases tension.

Transition into the Head Spa, beginning with gentle brushing, next a deeply relaxing oil head massage with specialised tools to stimulate scalp health. This is followed by steam and exfoliation of the scalp, a thorough shampoo massage and waterfall wash, and a restorative hair mask with a final waterfall wash and rinse. Your hair is treated with leave-in conditioner and lightly towel-dried for a soft finish.

The experience concludes with a moisturiser facial massage and SPF application to protect and hydrate your skin. Optional complimentary herbal tea and dry hair service are available to complete your indulgent treatment.`,
  },
];

const ASMR_Head_Massage_Services = [
  {
    _id: "m16",
    name: "ASMR Head massage",
    duration: 40,
    price: 65,
    description: `A soothing treatment beginning with gentle brushing to boost circulation, followed by the application of nourishing scalp oil. Enjoy a relaxing head massage using a variety of tools to release tension and stimulate the scalp, finishing with a leave-in mask to deeply condition and revitalise the scalp and hair.`,
  },
];

// const Add_ons_Services = [
//   {
//     _id: "m17",
//     name: "Dermaplaning",
//     duration: 15,
//     price: 25,
//     description:
//       `Please note: Dermaplaning is an add on service, you would need to book a facial and add Dermaplaning as an add on.
// Dermaplaning is a cosmetic treatment in which dead skin cells and peach fuzz are scraped off with a scalpel by a plastic surgeon, dermatologist, or cosmetologist. While dermaplaning removes fine facial hairs, the procedure differs from shaving in terms of the tools used, the amount of skin removed, and the person performing the procedure.`,
//   },
//   {
//     _id: "m18",
//     name: "Microneedling Hands",
//     duration: 25,
//     price: 35,
//     description:
//       `Microneedling for the hands is an effective treatment for improving the appearance of aging hands by stimulating collagen and elastin production, which can help reduce wrinkles, improve skin texture, and address sunspots.`,
//   },
//   {
//     _id: "m19",
//     name: "Microneedling Neck",
//     duration: 20,
//     price: 30,
//     description:
//       `Microneedling the neck helps to stimulate collagen and elastin production, which can improve skin texture, firmness, and reduce the appearance of wrinkles and fine lines.`,
//   },
//   {
//     _id: "m20",
//     name: "Anti age serum",
//     duration: 5,
//     price: 12,
//     description:
//       `Anti age serum reduces the appearance of various effects of aging such as fine lines, wrinkles, hyperpigmentation, and sun spots. Non-invasive and safe.`,
//   },
//   {
//     _id: "m21",
//     name: "Vitamin C serum",
//     duration: 5,
//     price: 10,
//     description:
//       `reduces wrinkles.
// protects collagen and increases production.
// aids wound healing.
// helps protect against sun damage.
// reduces hyperpigmentation.
// evens skin tone.
// brightens complexion.
// acts like armour against pollution and other free radicals.`,
//   },
// ];

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

        {/* Consultation Section */}
        <ServiceSection
          title="Featured"
          services={FEATURED_SERVICES}
          onAddToCart={addToCart}
        />

        {/* Consultation Section */}
        <ServiceSection
          title="Consultation"
          services={CONSULTATION_SERVICES}
          onAddToCart={addToCart}
        />

        {/* Japanese inspired Luxury HeadSpa */}
        <ServiceSection
          title="Japanese inspired Luxury HeadSpa"
          services={Japanese_Inspired_Luxury_HeadSpa_Services}
          onAddToCart={addToCart}
        />

        {/*ASMR Head massage */}
        <ServiceSection
          title="ASMR Head massage"
          services={ASMR_Head_Massage_Services}
          onAddToCart={addToCart}
        />
        {/* Headspa Section */}
        <ServiceSection
          title="Headspa"
          services={THERAPY_SERVICES}
          onAddToCart={addToCart}
        />

        {/* Facials Section */}
        <ServiceSection
          title="Facials"
          services={FACIAL_SERVICES}
          onAddToCart={addToCart}
        />

        {/* Facial Sculpt Section */}
        <ServiceSection
          title="Facial Sculpt"
          services={FACIAL_SCULPT_SERVICES}
          onAddToCart={addToCart}
        />

        {/* Body Sculpt Section */}
        <ServiceSection
          title="Body Sculpt"
          services={BODY_SCULPT_SERVICES}
          onAddToCart={addToCart}
        />

        {/* Skin Tightening Section */}
        <ServiceSection
          title="Skin Tightening"
          services={SKIN_TIGHTENING_SERVICES}
          onAddToCart={addToCart}
        />

        {/* Wood Therapy Section */}
        <ServiceSection
          title="Wood Therapy"
          services={WOOD_THERAPY_SERVICES}
          onAddToCart={addToCart}
        />

        {/* Massages Section */}
        <ServiceSection
          title="Massages"
          services={MASSAGE_SERVICES}
          onAddToCart={addToCart}
        />

        {/* Add-ons Section */}
        <ServiceSection
          title="Add-ons"
          services={ADDON_SERVICES}
          onAddToCart={addToCart}
        />
      </Container>
    </Box>
  );
}
