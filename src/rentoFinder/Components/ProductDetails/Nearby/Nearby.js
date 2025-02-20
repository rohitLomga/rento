import { Stack, Box, Divider } from "@mui/material";
import React from "react";
import { Title } from "../Title/Title";
import { PropertyDetail } from "../PropertyDetail/PropertyDetail";

export const Nearby = () => {
  const nearby1 = [
    {
      name: "School",
      value: "0.5 km",
    },
    {
      name: "Hospital",
      value: "1 km",
    },
    {
      name: "Mall",
      value: "2 km",
    },
  ];
  return (
    <Stack>
      {/* Nearby title text */}
      <Title title="Nearby" />

      {/* Nearby details */}
      <Stack
        sx={{
          // border: "1px solid red",
          width: "38vw",

          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: "1rem 0",
          backgroundColor: "#F2F6F7",
        }}
      >
        {/* Nearby details of left side*/}
        <Box>
          {nearby1.map((nearbyDetail) => (
            <PropertyDetail {...nearbyDetail} /> //? PropertyDetail is a component that takes in name and value as props
          ))}
        </Box>

        {/* Divider in the middle */}
        <Box>
          <Divider orientation="vertical" />
        </Box>

        {/* Nearby details of right side */}
        <Box>
          {nearby1.map((nearbyDetail) => (
            <PropertyDetail {...nearbyDetail} />
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};
