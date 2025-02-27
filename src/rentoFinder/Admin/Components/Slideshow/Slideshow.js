import { Box, Stack } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";

// CSS
import { slideshowTheme } from "../../../../CSS/Admin/SlideshowTheme";
import { useTheme } from "@mui/material/styles";

export const Slideshow = () => {
  // CSS
  const theme = useTheme();
  const styles = slideshowTheme(theme);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => <div style={styles.dots}></div>,
    appendDots: (dots) => (
      <div style={styles.dotsPosition}>
        <ul style={styles.dotsLine}>{dots}</ul>
      </div>
    ),
  };

  return (
    <Stack>
      <Box sx={styles.mainBox}>
        <Slider {...settings}>
          <Box component="img" src={image1} alt="Image 1" sx={styles.images} />
          <Box component="img" src={image2} alt="Image 2" sx={styles.images} />
          <Box component="img" src={image3} alt="Image 3" sx={styles.images} />
        </Slider>
      </Box>
    </Stack>
  );
};
