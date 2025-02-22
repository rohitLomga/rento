import { Stack, Box, Divider, Typography } from "@mui/material";
import React from "react";
import { NameAndValue } from "./NameAndValue";
import { Title } from "../Title/Title";

export const PropertyDetails = () => {
  const propertyDetails = [
    { name: "Property ID", value: "HZ29" },
    { name: "Property Type", value: "Apartment" },
    { name: "Property Status", value: "For Rent" },
  ];
  return (
    <Stack>
      {/* Property title with the vertical line */}
      <Title title="Property Details" />

      {/* Property details */}
      <Stack
        sx={{
          // border: "1px solid red",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: "1rem 0",
          backgroundColor: "#F2F6F7",
        }}
      >
        {/* Details on left side */}
        <Box>
          {propertyDetails.map((propertyDetail) => (
            <NameAndValue {...propertyDetail} />
          ))}
        </Box>

        {/* Divider in the middle */}
        <Box>
          <Divider orientation="vertical" />
        </Box>

        {/* Details on right side */}
        <Box>
          {propertyDetails.map((propertyDetail) => (
            <NameAndValue {...propertyDetail} />
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};
