import { Stack, Box } from "@mui/material";
import React from "react";
import { ListDetails } from "../../Components/Profile/ListDetails";
import { RentAndSellRoom } from "../../Components/FilterPage/FilterRoom/RentAndSellRoom";
import Navbar from "../../Components/NavbarAndFooter/Navbar";
import Footer from "../../Components/NavbarAndFooter/Footer";
import myproperties from "../../../../CSS/myPropertiestheme";
import { useTheme } from "@mui/material/styles";

export const MyProperties = () => {
  const theme = useTheme();
  const styles = myproperties(theme);

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
      <Box sx={styles.mainBox}>
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
