import { Stack, Box, Typography } from "@mui/material";
import React from "react";

import GarageIcon from "@mui/icons-material/Garage"; // Garage icon //! Not matching with the design
import DiningIcon from "@mui/icons-material/Dining"; // Dining icon
import BathtubIcon from "@mui/icons-material/Bathtub"; // Bathtub icon
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"; // GYM icon //! Not matching with the design // TODO: Can be changed with the image on design
import YardIcon from "@mui/icons-material/Yard"; // Garden icon //! Not matching with the design , BUT IT IS OKAY
import { BedTwoTone } from "@mui/icons-material"; // Bed icon

import { Features } from "./Features";
import { Title } from "../Title/Title";

export const FeaturesDetails = () => {
  // First row of features

  const features1 = [
    {
      icon: BedTwoTone,
      title: "Living Room",
      length: 12,
      breadth: 12,
    },
    {
      icon: GarageIcon,
      title: "Garage",
      length: 12,
      breadth: 12,
    },
    {
      icon: DiningIcon,
      title: "Dining Area",
      length: 12,
      breadth: 12,
    },
    {
      icon: BedTwoTone,
      title: "Bedroom",
      length: 12,
      breadth: 12,
    },
  ];

  // Second row of features
  const features2 = [
    {
      icon: BathtubIcon,
      title: "Bathroom",
      length: 12,
      breadth: 12,
    },
    {
      icon: FitnessCenterIcon,
      title: "Gym Area",
      length: 12,
      breadth: 12,
    },
    {
      icon: YardIcon,
      title: "Garden",
      length: 12,
      breadth: 12,
    },
    {
      icon: GarageIcon,
      title: "Parking",
      length: 12,
      breadth: 12,
    },
  ];
  return (
    <Stack>
      {/* Features title with the vertical line */}
      <Title title="Features" />
      <Stack sx={{ display: "flex" }}>
        {/* First row */}
        <Box sx={{ display: "flex", gap: "1.3rem" }}>
          {features1.map((feature, index) => (
            <Features {...feature} key={index} />
          ))}
        </Box>

        {/* Second row */}
        <Box sx={{ display: "flex", gap: "1.3rem", mt: "1rem" }}>
          {features2.map((feature, index) => (
            <Features {...feature} key={index} />
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};
