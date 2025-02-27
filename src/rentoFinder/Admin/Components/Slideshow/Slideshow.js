import { Box, Stack } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";

export const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#fff",
          opacity: 0.75,
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "85px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: "flex", gap: "0px" }}>
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <Stack>
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          position: "relative",
          // Override default slick dots styles
          "& .slick-dots li button:before": {
            color: "black !important", // Force black color for dots
            opacity: "0.75 !important", // Force opacity
            fontSize: "10px !important", // Adjust size if needed
          },
          "& .slick-dots li.slick-active button:before": {
            color: "red !important", // Force red color for active dot
            opacity: "1 !important", // Force opacity
          },
        }}
      >
        <Slider {...settings}>
          <Box
            component="img"
            src={image1}
            alt="Image 1"
            sx={{ width: "100%", height: "auto" }}
          />
          <Box
            component="img"
            src={image2}
            alt="Image 2"
            sx={{ width: "100%", height: "auto" }}
          />
          <Box
            component="img"
            src={image3}
            alt="Image 3"
            sx={{ width: "100%", height: "auto" }}
          />
        </Slider>
      </Box>
    </Stack>
  );
};
