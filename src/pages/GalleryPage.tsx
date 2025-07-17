"use client";

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
import { Close } from "@mui/icons-material";

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

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {media.map((item: any, index: any) => (
            <Fade in={true} timeout={800} key={index}>
              <Box
                onClick={() => handleClick(item)}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "calc(50% - 8px)",
                    md: "calc(33.333% - 11px)",
                  },
                  cursor: "pointer",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 2,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 4,
                  },
                }}
              >
                <Box sx={{ height: 250 }}>
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={`Gallery media ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <video
                      src={item.src}
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </Box>
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
