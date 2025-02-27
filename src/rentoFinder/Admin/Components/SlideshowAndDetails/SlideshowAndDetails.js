import { Box, Paper, Stack } from "@mui/material";
import React from "react";

// CSS
import slideshowAndDetailsTheme from "../../../../CSS/Admin/SlideshowAndDetailstheme";
import { useTheme } from "@mui/material/styles";
import { BasicDetails } from "../BasicDetails/BasicDetails";
import { Amenities } from "../Amenities/Amenities";
import { Location } from "../Location/Location";
import { Tabs } from "./Tabs";
import { Slideshow } from "../Slideshow/Slideshow";

export const SlideshowAndDetails = () => {
  const theme = useTheme();
  const styles = slideshowAndDetailsTheme(theme);
  return (
    <Stack>
      <Box component={Paper} sx={styles.mainBox}>
        {/* Slideshow */}
        <Box sx={styles.slideshowBox}>
          <Slideshow />
        </Box>

        {/* Basic Details, Amenities and Location */}
        {/* <BasicDetails /> */}
        <Tabs />
      </Box>
    </Stack>
  );
};
