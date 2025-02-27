import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import buyHome from "../OurMainFocus/Images/buy home.png"; // Buy a home Image
import rentHome from "./Images/rent.png"; // Rent a home Image
import sellHome from "./Images/sell.png"; // Sell home Image

import EastRoundedIcon from "@mui/icons-material/EastRounded"; // Arrow icon

// Component function of Home
export const BuySellRent = ({
  home = buyHome,
  title = "Buy a home",
  description,
}) => {
  return (
    <Stack>
      <Box>
        <Box
          sx={{
            width: "80%",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1rem",
            mt: "2rem",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Box component="img" src={home} />
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">{description}</Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1">Find a home</Typography>
            <EastRoundedIcon />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

// Function of new homes
export const Homes = () => {
  const homes = [
    {
      home: buyHome,
      title: "Buy a home",
      description:
        "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home",
    },
    {
      home: rentHome,
      title: "Rent a home",
      description:
        "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home",
    },
    {
      home: sellHome,
      title: "Sell a home",
      description:
        "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home",
    },
  ];
  return (
    <Stack
      sx={{
        width: "100%",
        display: "flex",
        // gap: "1rem",
        flexDirection: "row",
        justifyContent: "space-evenly",
        ml: "2rem",
      }}
    >
      {homes.map((homesData) => (
        <BuySellRent {...homesData} />
      ))}
    </Stack>
  );
};
