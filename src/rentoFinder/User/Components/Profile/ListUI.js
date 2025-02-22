import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Box,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";

export const ListUI = ({ label, Icon = PersonIcon }) => {
  return (
    <Stack>
      {/* List */}
      <Box
        sx={{
          width: "20vw",
          border: "1px solid #EEEEEE",
          color: "#5C727D",
        }}
      >
        {/* Other list items */}
        <Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={label} />
                <ListItemIcon>{Icon && <Icon />}</ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Stack>
  );
};
