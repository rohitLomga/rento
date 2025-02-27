import React from "react";

import {
  FormControlLabel,
  FormGroup,
  Stack,
  Checkbox,
  Box,
} from "@mui/material";

// CSS
import { amenitiesTheme } from "../../../../CSS/Admin/AmenitiesTheme";
import { useTheme } from "@mui/material/styles";

const AmenitiesUI = ({ label, isOdd }) => {
  const theme = useTheme();
  const styles = amenitiesTheme(theme);
  return (
    <Stack>
      <Box>
        {/* //! Not knowing how to do conditionally background color in external CSS */}
        <FormGroup sx={{ backgroundColor: isOdd ? "#FFFFFF" : "#E6E6ED" }}>
          <FormControlLabel
            control={<Checkbox sx={styles.checkbox} />}
            label={label}
          />
        </FormGroup>
      </Box>
    </Stack>
  );
};

export const Amenities = () => {
  const amenities = [
    { label: "Air Conditioner" },
    { label: "Gym" },
    { label: "Refrigerator" },
    { label: "Window Coverings" },
    { label: "Air Conditioner" },
    { label: "Air Conditioner" },
    { label: "Air Conditioner" },
    { label: "Air Conditioner" },
    { label: "Air Conditioner" },
    { label: "Air Conditioner" },
  ];
  return (
    <Stack>
      {amenities.map((labels, index) => (
        <AmenitiesUI key={index} {...labels} isOdd={index % 2 !== 0} />
      ))}
    </Stack>
  );
};
