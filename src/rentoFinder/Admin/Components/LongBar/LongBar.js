import React from "react";
import { Stack, Box } from "@mui/material";

// Theme
import menutheme from "../../../../CSS/Admin/MenuTheme"; // CSS OF MENU
import { useTheme } from "@mui/material/styles";

const LongBar = () => {
  const theme = useTheme();
  const styles = menutheme(theme);
  return (
    <Stack>
      {/* Long Bar */}
      <Box sx={styles.longBar} />
    </Stack>
  );
};

export default LongBar;
