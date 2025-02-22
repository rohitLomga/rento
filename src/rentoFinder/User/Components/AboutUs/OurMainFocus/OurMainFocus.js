import { Container, Stack, Typography, Box, Chip } from "@mui/material";
import React from "react";
import { Homes } from "./BuySellRent";

export const OurMainFocus = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "#F2F6F7",
        padding: "5rem 0",
        margin: "5rem 0",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          width: "70%",
          padding: 0,
        }}
      >
        <Box>
          <Chip
            label="Our Services"
            sx={{
              backgroundColor: "#FF5A3C1A",
              padding: "0.5rem 1rem",
              color: "#FF5A3C",
            }}
          />
        </Box>

        {/* Our main focus TEXT */}
        <Typography variant="h4">Our Main Focus</Typography>

        {/* Buy, sell or rent home */}
        <Homes />
      </Container>
    </Stack>
  );
};
