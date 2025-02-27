import { Stack } from "@mui/material";
import React from "react";

// Tab
import { useState } from "react";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// Tab Pages
import { BasicDetails } from "../BasicDetails/BasicDetails";
import { Amenities } from "../Amenities/Amenities";
import { Location } from "../Location/Location";

// CSS
import { tabTheme } from "../../../../CSS/Admin/TabTheme";
import { useTheme } from "@mui/material/styles";

export const Tabs = () => {
  // CSS
  const theme = useTheme();
  const styles = tabTheme(theme);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack sx={styles.mainBox}>
      <TabContext value={value}>
        <Box sx={styles.tabBox}>
          <TabList
            onChange={handleChange}
            aria-label="Tabs"
            sx={styles.tabList}
          >
            <Tab label="Basic Details" value="1" />
            <Tab label="Amenities" value="2" />
            <Tab label="Location" value="3" />
          </TabList>
        </Box>

        {/* Basic Details */}
        <TabPanel value="1">
          <BasicDetails />
        </TabPanel>

        {/* Amenities */}
        <TabPanel value="2">
          <Amenities />
        </TabPanel>

        {/* Location */}
        <TabPanel value="3">
          <Location />
        </TabPanel>
      </TabContext>
    </Stack>
  );
};
