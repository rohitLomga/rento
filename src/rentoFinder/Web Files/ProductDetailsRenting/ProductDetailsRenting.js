import { Stack } from "@mui/material";
import React from "react";
import Navbar from "../../Components/NavbarAndFooter/Navbar"; // Navbar
import { ImageSlideshow } from "../../Components/ProductDetails/ImageSlideshow/ImageSlideshow"; // Image Slideshow
import { DescriptionAndButton } from "../../Components/ProductDetails/DescriptionAndButton/DescriptionAndButton";

export const ProductDetailsRenting = () => {
  return (
    <Stack>
      {/* Navbar */}
      <Navbar />

      {/* Slideshow images */}
      <ImageSlideshow />

      {/* Description and button */}
      <DescriptionAndButton />
    </Stack>
  );
};
