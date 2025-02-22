import { Stack, Box } from "@mui/material";
import React from "react";
import { ListDetails } from "../../Components/Profile/ListDetails";
import { RentAndSellRoom } from "../../Components/FilterPage/FilterRoom/RentAndSellRoom";
import Navbar from "../../Components/NavbarAndFooter/Navbar";
import Footer from "../../Components/NavbarAndFooter/Footer";

export const MyProperties = () => {
  // Details of the room
  const room = [
    {
      title: "Rent",
      location: "Ranchi",
      price: "2000",
      width: 290, // Width of the image container
      btn: true,
      btnText: "Edit",
    },
    {
      title: "Rent",
      location: "Ranchi",
      price: "2000",
      width: 290,
      btn: true,
      btnText: "Edit",
    },
    {
      title: "Rent",
      location: "Ranchi",
      price: "2000",
      width: 290,
      btn: true,
      btnText: "Edit",
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
          ml: "10%",
          gap: "3rem",
        }}
      >
        {/* List items */}
        <ListDetails />

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
