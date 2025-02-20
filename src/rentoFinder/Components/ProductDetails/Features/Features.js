import { Stack, Typography, Box } from "@mui/material";
import React from "react";

export const Features = ({ title, length, breadth, icon }) => {
  const Icon = icon;

  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Icon */}
        <Icon
          sx={{
            color: "#FF5A3C",
            backgroundColor: "#FFF2F0",
            padding: "5px",
            mr: "5px",
          }}
        />
        <Box>
          {/* Title */}
          <Typography
            variant="body1"
            sx={{ fontSize: "14px", fontWeight: 500, color: "#071C1F" }}
          >
            {title}
          </Typography>

          {/* Length and breadth */}
          <Typography
            variant="body2"
            sx={{ fontSize: "14px", fontWeight: 400, color: "#5C727D" }}
          >
            {length} x {breadth} sq feet
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};
