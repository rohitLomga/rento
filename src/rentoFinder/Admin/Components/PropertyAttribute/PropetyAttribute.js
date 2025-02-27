import {
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Box,
  FormControl,
  OutlinedInput,
  Button,
  Container,
} from "@mui/material";
import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList"; // Filter Icon

// CSS THEME
import propertyattributetheme from "../../../../CSS/Admin/PropertyAttributeTheme";
import { useTheme } from "@mui/material/styles";

export const PropertyAttribute = () => {
  const theme = useTheme();
  const styles = propertyattributetheme(theme);
  return (
    <Container sx={styles.containerBox}>
      <Typography variant="h5">Property attribute</Typography>

      {/* Search and add new Box */}
      <Box sx={styles.searchBar}>
        <Typography variant="body1" sx={styles.propetyListText}>
          Property List
        </Typography>

        {/* Search Input */}
        <Typography variant="body2">Search : </Typography>

        <FormControl>
          <OutlinedInput
            size="small"
            sx={styles.outlineColor}
            endAdornment={
              <InputAdornment position="end">
                <FilterListIcon sx={styles.icon} />
              </InputAdornment>
            }
          />
        </FormControl>

        {/* Add New Button */}
        <Button variant="contained" sx={styles.AddNewButton}>
          + Add New
        </Button>
      </Box>
    </Container>
  );
};
