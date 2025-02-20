import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import "@fontsource/nunito-sans"; //* Font

export const PropertyDetail = ({ name, value }) => {
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          width: "100%",

          //   border: "1px solid red",
          //   justifyContent: "space-evenly",
        }}
      >
        {/* Labels */}
        <Box
          sx={{
            display: "flex",
            width: "130px",
            // border: "1px solid red",
            justifyContent: "flex-start",
            // mr: "1rem",
            color: "#5C727D",
            mt: "0.5rem",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            {name}:
          </Typography>
        </Box>

        {/* Value of label */}
        <Box
          sx={{
            display: "flex",
            width: "100px",
            // border: "1px solid red",
            justifyContent: "flex-start",
            mt: "0.5rem",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            {value}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};
