import { Stack, Box } from "@mui/material";
import React from "react";
import { Title } from "../Title/Title";
import { RentAndSellRoom } from "../../FilterPage/FilterRoom/RentAndSellRoom";

export const RelatedProperties = () => {
  // Details of the room
  const room = [
    {
      title: "Rent",
      location: "Ranchi",
      price: "2000",
      width: 290,
    },
    {
      title: "Rent",
      location: "Ranchi",
      price: "2000",
      width: 290,
    },
  ];
  return (
    <Stack>
      {/* Related proreties Title */}
      <Title title="Related Properties" />

      {/* Rooms */}
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        {room.map((rooms) => (
          <RentAndSellRoom {...rooms} />
        ))}
      </Box>
    </Stack>
  );
};
