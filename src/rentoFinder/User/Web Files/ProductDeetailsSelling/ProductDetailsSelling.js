import { Stack, Box } from "@mui/material";
import React from "react";
import Navbar from "../../Components/NavbarAndFooter/Navbar"; // Navbar
import { ImageSlideshow } from "../../Components/ProductDetails/ImageSlideshow/ImageSlideshow"; // Image Slideshow
import { LeftSideContainer } from "../../Components/ProductDetails/LeftSideContainer/LeftSideContainer";
import { RightSideContainer } from "../../Components/ProductDetails/RightSideContainer/RightSideContainer";
import Footer from "../../Components/NavbarAndFooter/Footer";

export const ProductDetailsSelling = () => {
  return (
    <Stack>
      {/* Navbar */}
      <Navbar />

      {/* Slideshow images */}
      <ImageSlideshow />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "5%",
          mb: "20%",
          mt: "10%",
        }}
      >
        {/* Description and button */}
        <LeftSideContainer sell={true} />

        {/* Right Side Container */}
        <RightSideContainer />
      </Box>

      {/* Footer */}
      <Footer />
    </Stack>
  );
};
