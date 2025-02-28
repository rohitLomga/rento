import { Stack } from "@mui/material";
import React from "react";
import { Menu } from "../../Components/Menu/Menu";
import LongBar from "../../Components/LongBar/LongBar";

export const Dashboard = () => {
  return (
    <Stack>
      {/* Long Bar */}
      <LongBar />

      {/* Menu */}
      <Menu />
    </Stack>
  );
};
