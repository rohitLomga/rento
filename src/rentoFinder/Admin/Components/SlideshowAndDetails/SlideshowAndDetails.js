import { Box, Stack } from "@mui/material";
import React from "react";

// CSS
import slideshowAndDetailsTheme from "../../../../CSS/Admin/SlideshowAndDetailstheme";
import { useTheme } from "@mui/material/styles";
import { BasicDetails } from "../BasicDetails/BasicDetails";
import { Amenities } from "../Amenities/Amenities";
import { Location } from "../Location/Location";
import { Tabs } from "./Tabs";

export const SlideshowAndDetails = () => {
  const theme = useTheme();
  const styles = slideshowAndDetailsTheme(theme);
  return (
    <Stack>
      <Box sx={styles.mainBox}>
        {/* Slideshow */}
        <Box sx={styles.slideshowBox}></Box>

        {/* Basic Details, Amenities and Location */}
        {/* <BasicDetails /> */}
        <Tabs />
      </Box>
    </Stack>
  );
};
