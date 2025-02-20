import { Stack, Box, Typography } from "@mui/material";
import React from "react";

export const Title = ({ title }) => {
  return (
    <Stack>
      <Box sx={{ m: "3rem 0 1rem 0", display: "flex" }}>
        {/* <Divider orientation="vertical" sx={{ width: "10px" }} /> */}
        <Stack
          sx={{
            width: "2px",
            height: "32px",
            backgroundColor: "#FF5A3C",
            mr: "8px",
          }}
        ></Stack>
        <Typography
          variant="h6"
          sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
        >
          {title}
        </Typography>
      </Box>
    </Stack>
  );
};
