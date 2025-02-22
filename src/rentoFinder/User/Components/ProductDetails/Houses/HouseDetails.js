import { Stack, Box } from "@mui/material";
import React from "react";
import { House } from "./House";
import { Title } from "../Title/Title";

export const HouseDetails = () => {
  const houses = [
    {
      title: "Luxury House in Greenville",
      price: "300,00,00",
    },
    {
      title: "Luxury House in Greenville",
      price: "300,00,00",
    },
    {
      title: "Luxury House in Greenville",
      price: "300,00,00",
    },
  ];
  return (
    <Stack sx={{ border: "2px solid #EDEDED", padding: "0 2rem 2rem 2rem" }}>
      {/* Title */}
      <Title title="Drop Message For Book" />

      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
        }}
      >
        {houses.map((houseData, index) => (
          <House {...houseData} isLast={index === houses.length - 1} />
        ))}
      </Box>
    </Stack>
  );
};
