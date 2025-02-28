import {
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  Box,
  Avatar,
  MenuItem,
  Collapse,
} from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import rentoFinderIcon from "./homeLogo.png"; // Logo
import profile1 from "./Profile Images/profile1.jpg"; // Profile Image 1
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"; // Arrow icon

// Theme
import menutheme from "../../../../CSS/Admin/MenuTheme"; // CSS OF MENU
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  // CSS Theme
  const theme = useTheme();
  const styles = menutheme(theme);

  const navigate = useNavigate();

  // Function to move to dashboard
  function MoveToDashboard() {
    navigate("/dashboard");
  }

  // Move to property attribute
  function MoveToPropertyAttribute() {
    navigate("/");
  }

  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <Stack sx={styles.mainMenuBox}>
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
          {/* Dashboard */}
          <ListItemButton
            sx={{
              ...styles.spacingList,
              backgroundColor:
                activeItem === "Dashboard" ? "#FFFFFF" : "inherit",
              color: activeItem === "Dashboard" ? "#282828" : "inherit",
              ":hover": {
                backgroundColor:
                  activeItem === "Dashboard" ? "#FFFFFF" : "inherit",
              },
            }}
            onClick={() => {
              handleListItemClick("Dashboard");
              MoveToDashboard();
            }}
          >
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          {/* Property Attribute */}
          <ListItemButton
            sx={{
              ...styles.spacingList,
              backgroundColor:
                activeItem === "Property attribute" ? "#FFFFFF" : "inherit",
              color:
                activeItem === "Property attribute" ? "#282828" : "inherit",
              ":hover": {
                backgroundColor:
                  activeItem === "Property attribute" ? "#FFFFFF" : "inherit",
              },
            }}
            onClick={() => {
              handleListItemClick("Property attribute");
              MoveToPropertyAttribute();
            }}
          >
            <ListItemText primary="Property attribute" />
          </ListItemButton>

          {/* Seller Verification */}
          <ListItemButton
            sx={{
              ...styles.spacingList,
              backgroundColor:
                activeItem === "Seller verification" ? "#FFFFFF" : "inherit",
              color:
                activeItem === "Seller verification" ? "#282828" : "inherit",
              ":hover": {
                backgroundColor:
                  activeItem === "Seller verification" ? "#FFFFFF" : "inherit",
              },
            }}
            onClick={() => {
              handleListItemClick("Seller verification");
              handleClick();
            }}
          >
            <ListItemText primary="Seller verification" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <MenuItem sx={styles.menuItem}>Approved Seller</MenuItem>
              <MenuItem sx={styles.menuItem}>Pending Approval</MenuItem>
              <MenuItem sx={styles.menuItem}>Seller On Hold</MenuItem>
              <MenuItem sx={styles.menuItem}>Seller Form</MenuItem>
            </List>
          </Collapse>

          {/* Rating Manager */}
          <ListItemButton
            sx={{
              ...styles.spacingList,
              backgroundColor:
                activeItem === "Rating manager" ? "#FFFFFF" : "inherit",
              color: activeItem === "Rating manager" ? "#282828" : "inherit",
              ":hover": {
                backgroundColor:
                  activeItem === "Rating manager" ? "#FFFFFF" : "inherit",
              },
            }}
            onClick={() => handleListItemClick("Rating manager")}
          >
            <ListItemText primary="Rating manager" />
          </ListItemButton>

          {/* Attribute Setting */}
          <ListItemButton
            sx={{
              ...styles.spacingList,
              backgroundColor:
                activeItem === "Attribute Setting" ? "#FFFFFF" : "inherit",
              color: activeItem === "Attribute Setting" ? "#282828" : "inherit",
              ":hover": {
                backgroundColor:
                  activeItem === "Attribute Setting" ? "#FFFFFF" : "inherit",
              },
            }}
            onClick={() => handleListItemClick("Attribute Setting")}
          >
            <ListItemText primary="Attribute Setting" />
          </ListItemButton>

          {/* Lower side */}
          {/* Setting */}
          <ListItemButton
            sx={{
              ...styles.lowerList,
              backgroundColor: activeItem === "Setting" ? "#FFFFFF" : "inherit",
              color: activeItem === "Setting" ? "#282828" : "inherit",
              ":hover": {
                backgroundColor:
                  activeItem === "Setting" ? "#FFFFFF" : "inherit",
              },
            }}
            onClick={() => handleListItemClick("Setting")}
          >
            <ListItemText primary="Setting" />
          </ListItemButton>

          {/* Support */}
          <ListItemButton
            sx={{
              ...styles.spacingList,
              backgroundColor: activeItem === "Support" ? "#FFFFFF" : "inherit",
              color: activeItem === "Support" ? "#282828" : "inherit",
              ":hover": {
                backgroundColor:
                  activeItem === "Support" ? "#FFFFFF" : "inherit",
              },
            }}
            onClick={() => handleListItemClick("Support")}
          >
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
