import { Box, Stack } from "@mui/material";
import React from "react";
import { RentAndSellRoom } from "../../FilterPage/FilterRoom/RentAndSellRoom";

export const BookRoom = () => {
  return (
    <Stack sx={{ border: "2px solid #EDEDED", padding: "1rem 2rem 2rem 2rem" }}>
      <Box>
        <RentAndSellRoom
          title="Rent"
          location="Ranchi"
          price="30000"
          width="100%"
        />
      </Box>
    </Stack>
  );
};
