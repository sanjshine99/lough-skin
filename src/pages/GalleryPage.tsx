import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  Fade,
} from "@mui/material";
import { Close, PlayCircleFilled } from "@mui/icons-material";

type MediaType = {
  src: string;
  type: "image" | "video";
};

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaType | null>(null);

  const media: any = [
    ...Array.from({ length: 14 }, (_, i) => ({
      src: `/gallery/${i + 1}.jpeg`,
      type: "image",
    })),
    ...Array.from({ length: 8 }, (_, i) => ({
      src: `/gallery/${15 + i}.mp4`,
      type: "video",
    })),
  ];

  const handleClick = (item: MediaType) => {
    setSelectedMedia(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMedia(null);
  };

  // Helper to assign random row spans for masonry effect
  // or you can do based on media type, or random for variety
  const getRowSpan = (index: number) => {
    // For example, random between 2 and 4 rows
    return 2 + (index % 3); // cycles 2,3,4
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          textAlign="center"
          gutterBottom
          sx={{ color: "#2c3e50", mb: 2 }}
        >
          Gallery
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ color: "#7f8c8d", mb: 6 }}
        >
          Step inside our luxurious spa and see where wellness meets beauty
        </Typography>

        {/* Masonry style grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gridAutoRows: 150,
            gap: 3,
            justifyContent: "center",
          }}
        >
          {media.map((item: any, index: any) => (
            <Fade in={true} timeout={800} key={index}>
              <Box
                onClick={() => handleClick(item)}
                sx={{
                  cursor: "pointer",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 2,
                  position: "relative",
                  gridRowEnd: `span ${getRowSpan(index)}`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 4,
                  },
                }}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Gallery media ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : (
                  <>
                    <video
                      src={item.src}
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    {/* Video icon overlay */}
                    <PlayCircleFilled
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        color: "rgba(255, 255, 255, 0.85)",
                        fontSize: 40,
                        pointerEvents: "none",
                        textShadow: "0 0 6px rgba(0,0,0,0.7)",
                      }}
                    />
                  </>
                )}
              </Box>
            </Fade>
          ))}
        </Box>

        {/* Lightbox Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="lg"
          fullWidth
          sx={{
            "& .MuiDialog-paper": {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          }}
        >
          <DialogContent sx={{ p: 0, position: "relative" }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 1,
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.7)",
                },
              }}
            >
              <Close />
            </IconButton>
            {selectedMedia && (
              <Box sx={{ position: "relative", width: "100%", height: "80vh" }}>
                {selectedMedia.type === "image" ? (
                  <img
                    src={selectedMedia.src}
                    alt="Selected"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <video
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                )}
              </Box>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}
