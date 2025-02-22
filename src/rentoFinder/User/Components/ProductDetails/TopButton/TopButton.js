import { Stack, Box, Button, Typography } from "@mui/material";
import React from "react";
import { CalendarToday, Comment } from "@mui/icons-material";

export const TopButton = () => {
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          mb: "1rem",
        }}
      >
        {/* Button of featured and for renting */}
        <Button variant="contained" sx={{ backgroundColor: "#FF5A3C" }}>
          featured
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#FFA500" }}>
          for renting
        </Button>

        {/* Calender */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CalendarToday sx={{ color: "#FF5A3C", pr: "5px" }} />
          <Typography variant="body2">May 19, 2021</Typography>
        </Box>

        {/* Comments */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* //! Change the comment icon */}
          <Comment sx={{ pr: "5px" }} />
          <Typography variant="body2">35 Comments</Typography>
        </Box>
      </Box>
    </Stack>
  );
};
