import {
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
  Checkbox,
  Box,
} from "@mui/material";
import React from "react";

export const Amenities = ({ label }) => {
  return (
    <Stack>
      <Box>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "#FF5A3C", // Checked state color
                  },
                }}
              />
            }
            label={label}
          />
        </FormGroup>
      </Box>
    </Stack>
  );
};
