import {
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import React from "react";
import { ListUI } from "./ListUI";

import PersonIcon from "@mui/icons-material/Person";
import RecentActorsIcon from "@mui/icons-material/RecentActors"; // This is account details // ! Change the icon
import ListAltIcon from "@mui/icons-material/ListAlt"; // Properties
import FavoriteIcon from "@mui/icons-material/Favorite"; // Heart icon
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd"; // Add list icon
import PaymentIcon from "@mui/icons-material/Payment"; // ! Payment icon is not matching Change the icon
import PasswordIcon from "@mui/icons-material/Password"; // ! Password icon is not matching Change the icon
import LogoutIcon from "@mui/icons-material/Logout"; // ! Log out icon is not matching Change the icon

export const ListDetails = () => {
  const listData = [
    {
      label: "Account Details",
      Icon: RecentActorsIcon,
    },
    {
      label: "My Properties",
      Icon: ListAltIcon,
    },
    {
      label: "Favourited Properties",
      Icon: FavoriteIcon,
    },
    {
      label: "Add Property",
      Icon: PlaylistAddIcon,
    },
    {
      label: "Payments",
      Icon: PaymentIcon,
    },
    {
      label: "Change Password",
      Icon: PasswordIcon,
    },
    {
      label: "Logut",
      Icon: LogoutIcon,
    },
  ];
  return (
    <Stack>
      <Box>
        {/* Profile list item */}
        <Box sx={{ backgroundColor: "#171B2A", color: "white", width: "100%" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Profile" />
                <ListItemIcon>
                  <PersonIcon sx={{ color: "white" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        {/* Other list items */}
        {/* Edit Details */}
        {listData.map((data) => (
          <ListUI {...data} />
        ))}
      </Box>
    </Stack>
  );
};
