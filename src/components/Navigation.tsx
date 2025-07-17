"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu, Close, Spa } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: "#2c3e50", fontWeight: "bold" }}>
          Lough Skin
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            to={item.href}
            onClick={handleDrawerToggle}
            sx={{
              textDecoration: "none",
              backgroundColor:
                location.pathname === item.href
                  ? "rgba(212, 175, 55, 0.1)"
                  : "transparent",
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                "& .MuiTypography-root": {
                  color: "#2c3e50",
                  fontWeight: 500,
                },
              }}
            />
          </ListItem>
        ))}
        <ListItem>
          <Button
            component={Link}
            to="/booking"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#a67c5b",
              textDecoration: "none",
              "&:hover": { backgroundColor: "#b8941f" },
              mt: 2,
            }}
            onClick={handleDrawerToggle}
          >
            Book Now
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#e1c9b3", boxShadow: 1 }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src="/logo.png" // 🡐 Replace with your actual image path
                alt="Lough Skin Logo"
                sx={{ height: 40 }} // Adjust height as needed
              />
            </Box>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "#2c3e50" }}
            >
              <Menu />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.href}
                  sx={{
                    color: "#2c3e50",
                    fontWeight: 500,
                    textDecoration: "none",
                    backgroundColor:
                      location.pathname === item.href
                        ? "rgba(212, 175, 55, 0.1)"
                        : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(212, 175, 55, 0.1)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                component={Link}
                to="/booking"
                variant="contained"
                sx={{
                  backgroundColor: "#a67c5b",
                  ml: 2,
                  textDecoration: "none",
                  "&:hover": { backgroundColor: "#b8941f" },
                }}
              >
                Book Now
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
