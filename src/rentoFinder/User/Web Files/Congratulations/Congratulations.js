import { Container, Stack, Typography, Box } from "@mui/material";
import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import Navbar from "../../Components/NavbarAndFooter/Navbar";
import Footer from "../../Components/NavbarAndFooter/Footer";
export const Congratulations = () => {
  return (
    <Stack>
      {/* Navbar */}
      <Navbar />
      <Container
        sx={{
          width: "25%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          mt: "5rem",
          mb: "9rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            color: "#FF5A3C",
            fontWeight: 700,
          }}
        >
          <Typography variant="h3">Congratulations</Typography>
          <Typography variant="h3">&</Typography>
          <Typography variant="h3">Thank You</Typography>
        </Box>
        <Typography variant="body1" sx={{ fontWeight: "bolder", mt: "1rem" }}>
          For Booking
        </Typography>

        {/* Tick icon */}
        <DoneRoundedIcon
          sx={{
            padding: "1rem",
            color: "white",
            fontSize: "3rem",
            borderRadius: "50%",
            m: "2rem 0 1rem 0",
            backgroundColor: "#84FFC3",
          }}
        />
        <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
          Your Booking is Confirmed
        </Typography>
      </Container>

      {/* Footer */}
      <Footer />
    </Stack>
  );
};
