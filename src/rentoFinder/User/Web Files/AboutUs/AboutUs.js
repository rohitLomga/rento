import { Container, Stack, Box, Chip, Typography, Button } from "@mui/material";
import React from "react";

import Navbar from "../../Components/NavbarAndFooter/Navbar";
import Footer from "../../Components/NavbarAndFooter/Footer";
import { OurMainFocus } from "../../Components/AboutUs/OurMainFocus/OurMainFocus";
import { ImageWithVideo } from "../../Components/AboutUs/ImageWithVideo/ImageWithVideo";

// import smartHome from "../../Components/AboutUs/Icon/home.png"; // Smart home icon
// import beautifulScene from "../../Components/AboutUs/Icons/beautifulScene.png"; // Beautiful Scene

export const AboutUs = () => {
  return (
    <Stack>
      {/* Navbar */}
      <Navbar />

      {/* Image with Video */}
      <ImageWithVideo />

      {/* Our Main Focus */}
      <OurMainFocus />

      {/* Image with Video */}
      <ImageWithVideo />

      {/* Footer */}
      <Footer />
    </Stack>
  );
};
