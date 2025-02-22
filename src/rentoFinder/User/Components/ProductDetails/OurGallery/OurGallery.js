import { Box, Stack } from "@mui/material";
import React from "react";
import image1 from "../../../room3.jpg";
import { Title } from "../Title/Title";

export const OurGallery = () => {
  return (
    <Stack>
      <Title title="From Our Gallery" />
      <Stack
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "row",
          // gap: "1rem",
          padding: "1rem",
        }}
      >
        {/* Imaages on the left side */}
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Box
            component="img"
            src={image1}
            alt="room"
            sx={{ width: "240px", height: "176px" }}
          />
          <Box
            component="img"
            src={image1}
            alt="room"
            sx={{ width: "240px", height: "208px" }}
          />
        </Box>
        <Box>
          <Box
            component="img"
            src={image1}
            alt="room"
            sx={{ width: "320px", height: "400px", mr: "2rem" }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};
