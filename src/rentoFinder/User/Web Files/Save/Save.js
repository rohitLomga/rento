import {
  Box,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person"; // Profile icon
import PlaceIcon from "@mui/icons-material/Place"; // Locaiton icon
import AddIcCallIcon from "@mui/icons-material/AddIcCall"; // Call icon
import MailIcon from "@mui/icons-material/Mail"; // Email
import Navbar from "../../Components/NavbarAndFooter/Navbar";
import Footer from "../../Components/NavbarAndFooter/Footer";
import { ListDetails } from "../../Components/Profile/ListDetails";

// Css of Textfield
const InputField = styled(TextField)({
  width: "25vw",
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#FF5A3C",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF5A3C",
    },
  },
});

export const Save = () => {
  return (
    <Stack>
      {/* Navbar */}
      <Navbar />

      <Box
        sx={{
          width: "20vw",
          display: "flex",
          mt: "60px",
          ml: "20%",
          gap: "3rem",
          //   margin: "auto",
          // border: "1px solid red",
        }}
      >
        {/* List Items */}
        <ListDetails />

        <Box
          sx={{
            border: "2px solid #EDEDED",
            display: "flex",
            gap: "2rem",
            padding: "4rem",
          }}
        >
          <Box sx={{ width: "12rem" }}>
            <PersonIcon
              sx={{
                width: "100%",
                fontSize: "13rem",
                backgroundColor: "#D9D9D9",
                color: "#FFFFFF",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {/* Name */}
            <InputField variant="outlined" placeholder="Name" />

            {/* Temporary Address */}
            <InputField variant="outlined" placeholder="Temporary Address" />

            {/* Permanent Address */}
            <InputField variant="outlined" placeholder="Permanent Address" />

            {/* Contact */}
            <InputField variant="outlined" placeholder="Contact" />

            {/* Email */}
            <InputField variant="outlined" placeholder="Email" />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF5A3C",
                textTransform: "uppercase",
                padding: "10px 0",
                fontSize: "1rem",
              }}
            >
              save
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Stack>
  );
};
