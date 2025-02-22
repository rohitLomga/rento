import { Stack, Box } from "@mui/material";
import React from "react";
import "./Images.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../../room1.jpg"; // Image 1
import image2 from "../../../room2.jpg"; // Image 2
import image3 from "../../../room3.jpg"; // Image 3

export const DuplicateSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "25%",
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Stack>
      {/* Slideshow Images */}
      <Box>
        <Slider {...settings}>
          <Box
            component="img"
            src={image1}
            alt="Image 1"
            sx={{ width: "800px", height: "400px", margin: "0 20px" }}
          />
          <Box
            component="img"
            src={image2}
            alt="Image 2"
            sx={{
              width: "800px",
              height: "400px",
              margin: "0 20px",
            }}
          />
          <Box
            component="img"
            src={image3}
            alt="Image 3"
            sx={{ width: "800px", height: "400px", margin: "0 20px" }}
          />
        </Slider>
      </Box>
    </Stack>
  );
};
