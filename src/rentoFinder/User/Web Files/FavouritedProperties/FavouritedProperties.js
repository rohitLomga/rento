import { Box, Stack } from "@mui/material";
import React from "react";
import Navbar from "../../Components/NavbarAndFooter/Navbar";
import { ListDetails } from "../../Components/Profile/ListDetails";
import { RentAndSellRoom } from "../../Components/FilterPage/FilterRoom/RentAndSellRoom";
import Footer from "../../Components/NavbarAndFooter/Footer";

export const FavouritedProperties = () => {
  const room = [
    {
      title: "Rent",
      location: "Ranchi",
      price: "2000",
      width: 290, // Width of the image container
      btn: true,
      btnText: "Book Now",
    },
    {
      title: "Rent",
      location: "Ranchi",
      price: "2000",
      width: 290,
      btn: true,
      btnText: "Book Now",
    },
  ];
  return (
    <Stack>
      {/* Navbar */}
      <Navbar />

      <Box
        sx={{
          width: "20vw",
          display: "flex",
          mt: "60px",
          ml: "19%",
          gap: "2rem",
        }}
      >
        {/* List items */}
        <ListDetails />

        {/* Rooms */}
        <Box sx={{ display: "flex", gap: "1.5rem" }}>
          {room.map((rooms) => (
            <RentAndSellRoom {...rooms} />
          ))}
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Stack>
  );
};
