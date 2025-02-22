import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded"; // Dot icon
import smartHomeDesign from "../Icons/home.png"; // Smart home design icon
import beautifulScene from "../Icons/beautifulScene.png"; // Beautiful scene icon
import exceptional from "../Icons/exceptional lifestyle.png"; // Exceptional lifestyle icon
import security from "../Icons/security.png"; // 24x7 security icon

// Component function of Icons with title UI
export const IconsWithTitle = ({ icon, title }) => {
  return (
    <Stack>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", color: "#5C727D" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "#F5DFDC",
            }}
          >
            <Box component="img" src={icon} sx={{ padding: "1rem" }} />
          </Box>
          <FiberManualRecordRoundedIcon sx={{ fontSize: "1rem", mx: 1 }} />
          <Typography variant="body1">{title}</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

// Function of Icons and titles with details
export const HomeFeatures = () => {
  const homeDetails = [
    {
      icon: smartHomeDesign,
      title: "Smart Home Design",
    },
    {
      icon: beautifulScene,
      title: "Beautiful Scene Around",
    },
    {
      icon: exceptional,
      title: "Exceptional Lifestyle",
    },
    {
      icon: security,
      title: "Complete 24/7 Security",
    },
  ];
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 2,
        width: "100%",
      }}
    >
      {homeDetails.map((details, index) => (
        <IconsWithTitle key={index} {...details} />
      ))}
    </Box>
  );
};
