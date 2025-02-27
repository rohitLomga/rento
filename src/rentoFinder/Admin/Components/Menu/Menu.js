import {
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import React from "react";

import rentoFinderIcon from "./homeLogo.png"; // Logo
import profile1 from "./Profile Images/profile1.jpg"; // Profile Image 1
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"; // Arrow icon

// Theme
import menutheme from "../../../../CSS/Admin/MenuTheme"; // CSS OF MENU
import { useTheme } from "@mui/material/styles";

export const Menu = () => {
  const theme = useTheme();
  const styles = menutheme(theme);
  return (
    <Stack sx={styles.mainMenuBox}>
      {/* Long Bar */}
      <Box sx={styles.longBar} />

      <Stack sx={styles.listItemMenu}>
        <Box sx={styles.adminLogo}>
          {/* LOGO icon */}
          <Box component="img" src={rentoFinderIcon} />

          <Box>
            <Typography variant="h5" sx={styles.rentoFinderLogoText}>
              Rentofinder
            </Typography>
            <Typography variant="body2" sx={styles.adminLogoText}>
              Admin
            </Typography>
          </Box>
        </Box>

        {/* Datas of list */}
        <List sx={styles.listTextBox}>
          <ListItemButton sx={styles.selectedList}>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton sx={styles.spacingList}>
            <ListItemText primary="Property attribute" />
          </ListItemButton>
          <ListItemButton sx={styles.spacingList}>
            <ListItemText primary="Seller verification" />
          </ListItemButton>
          <ListItemButton sx={styles.spacingList}>
            <ListItemText primary="Rating manager" />
          </ListItemButton>
          <ListItemButton sx={styles.spacingList}>
            <ListItemText primary="Attribute Setting" />
          </ListItemButton>

          {/* Lower side */}
          <ListItemButton sx={styles.lowerList}>
            <ListItemText primary="Setting" />
          </ListItemButton>

          <ListItemButton sx={styles.spacingList}>
            <ListItemText primary="Support" />
          </ListItemButton>
        </List>

        <Box sx={styles.profileButtonBox}>
          {/* Profile button */}
          <Box sx={styles.profileButton}>
            <Avatar alt="profile Image" src={profile1} />

            <Box>
              <Typography variant="body1">Name</Typography>
              <Typography variant="body2">hello@gmail.com</Typography>
            </Box>

            {/* Arrow */}
            <KeyboardArrowRightIcon />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
