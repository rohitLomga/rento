import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person"; // Profile icon
import PlaceIcon from "@mui/icons-material/Place"; // Locaiton icon
import AddIcCallIcon from "@mui/icons-material/AddIcCall"; // Call icon
import MailIcon from "@mui/icons-material/Mail"; // Email

export const EditDetails = () => {
  return (
    <Stack>
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
          <Typography variant="h5">Rohit Lomga</Typography>

          {/* Location */}
          <Box sx={{ display: "flex", gap: "1rem", color: "#5C727D" }}>
            <PlaceIcon />
            <Typography variant="body1">Ranchi, India</Typography>
          </Box>

          {/* Phone number */}
          <Box sx={{ display: "flex", gap: "1rem", color: "#5C727D" }}>
            <AddIcCallIcon />
            <Typography variant="body1">+91 9863587412</Typography>
          </Box>

          {/* Email */}
          <Box sx={{ display: "flex", gap: "1rem", color: "#5C727D" }}>
            <MailIcon />
            <Typography variant="body1">hello@gmail.com</Typography>
          </Box>

          <Button
            variant="contained"
            sx={{ backgroundColor: "#FF5A3C", textTransform: "capitalize" }}
          >
            Edit
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};
