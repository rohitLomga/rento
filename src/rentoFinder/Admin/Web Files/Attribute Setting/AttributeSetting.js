import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LongBar from "../../Components/LongBar/LongBar";
import { Menu } from "../../Components/Menu/Menu";

export const AttributeSetting = () => {
  return (
    <Stack>
      {/* Long Bar */}
      <LongBar />

      {/* Menu */}

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <Menu />
        </Box>
        <Box>
          <Typography variant="h3">Attribute Setting</Typography>
        </Box>
      </Box>
    </Stack>
  );
};
