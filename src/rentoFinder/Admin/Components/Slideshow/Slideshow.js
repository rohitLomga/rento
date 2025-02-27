import { Box, Stack } from "@mui/material";
import React from "react";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";

export const Slideshow = () => {
  return (
    <Stack>
      <Box component="img" src={image1} />
    </Stack>
  );
};
