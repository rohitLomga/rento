import React from "react";
import { Box, Stack } from "@mui/material";

import image1 from "../../../room1.jpg"; // Image 1
import image2 from "../../../room2.jpg"; // Image 2
import image3 from "../../../room3.jpg"; // Image 3

// TODO: The UI of slideshow is not made, and slideshow is not implemented
export const ImageSlideshow = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        // justifyContent: "center",
        flexDirection: "row",
        overflowX: "hidden",
        marginTop: "30px",
      }}
    >
      <Box>
        <img
          src={image1}
          alt="Image 1"
          style={{ width: "800px", height: "400px", margin: "0 20px" }}
        />
      </Box>

      <Box>
        <img
          src={image2}
          alt="Image 2"
          style={{ width: "800px", height: "400px", margin: "0 20px" }}
        />
      </Box>

      <Box>
        <img
          src={image3}
          alt="Image 3"
          style={{ width: "800px", height: "400px", margin: "0 20px" }}
        />
      </Box>
    </Stack>
  );
};
