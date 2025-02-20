import { Box, Stack } from "@mui/material";
import React from "react";
import { Amenities } from "./Amenities";
import { FormLabel } from "@mui/material";
import { Title } from "../Title/Title";

export const AmenitiesDetails = () => {
  {
    /* First column */
  }
  const amenities1 = [
    "Air Conditioning",
    "Balcony",
    "Cable TV",
    "Internet",
    "Parking",
  ];
  {
    /* Second column */
  }
  const amenities2 = [
    "Pool",
    "Dishwasher",
    "Microwave",
    "Oven",
    "Refrigerator",
  ];

  {
    /* Third column */
  }
  const amenities3 = ["Washer", "Dryer", "Gym", "Elevator", "Fireplace"];

  return (
    <Stack>
      {/* Amenities title text */}
      <Title title="Amenities" />

      {/* Stack for the amenities */}
      <Stack sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        {/* First column */}
        <Box>
          {amenities1.map((amenity) => (
            <Amenities label={amenity} />
          ))}
        </Box>

        {/* Second column */}
        <Box>
          {amenities2.map((amenity) => (
            <Amenities label={amenity} />
          ))}
        </Box>

        {/* Third column */}
        <Box>
          {amenities3.map((amenity) => (
            <Amenities label={amenity} />
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};
