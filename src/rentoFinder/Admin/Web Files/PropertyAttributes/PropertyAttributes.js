import { Box, Stack } from "@mui/material";
import React from "react";
import { Menu } from "../../Components/Menu/Menu";
import { PropertyAttribute } from "../../Components/PropertyAttribute/PropetyAttribute";
import { TableData } from "../../Components/TableData/TableData";
import { SlideshowAndDetails } from "../../Components/SlideshowAndDetails/SlideshowAndDetails";

// CSS
import attributestheme from "../../../../CSS/Admin/AttributesTheme";
import { useTheme } from "@mui/material/styles";
import LongBar from "../../Components/LongBar/LongBar";

export const PropertyAttributes = () => {
  const theme = useTheme();
  const styles = attributestheme(theme);

  return (
    <Stack>
      {/* Long Bar */}
      <LongBar />

      <Box sx={styles.all}>
        {/* Menu Items */}
        <Box>
          <Menu />
        </Box>

        <Box>
          <Box sx={styles.mainBox}>
            <Box>
              <PropertyAttribute />

              <TableData />
            </Box>

            <Box>
              <SlideshowAndDetails />
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
