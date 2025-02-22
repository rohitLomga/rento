import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Box,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Navbar from "../../Components/NavbarAndFooter/Navbar";
import { ListDetails } from "../../Components/Profile/ListDetails";
import { EditDetails } from "../../Components/Profile/EditDetails";
import Footer from "../../Components/NavbarAndFooter/Footer";

export const Profile = () => {
  return (
    <Stack>
      {/* Navbar */}
      <Navbar />

      {/* List */}
      <Box
        sx={{
          width: "20vw",
          display: "flex",
          mt: "60px",
          ml: "20%",
          gap: "3rem",
        }}
      >
        <ListDetails />

        {/* Edit Details */}
        <EditDetails />
      </Box>

      {/* Footer */}
      <Footer />
    </Stack>
  );
};
