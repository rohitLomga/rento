import { Stack, Button } from "@mui/material";
import React from "react";
import { TextFieldProps } from "../BasicDetails/BasicDetails";

// CSS
import { textfieldPropsTheme } from "../../../../CSS/Admin/TextFieldPropsTheme";
import { useTheme } from "@emotion/react";

export const Location = () => {
  const theme = useTheme();
  const styles = textfieldPropsTheme(theme);

  const locationDetails = [
    { placeholder: "Locality*" },
    { placeholder: "City*" },
    { placeholder: "Address*" },
    { placeholder: "Home Area*" },
    { placeholder: "Map location*" },
  ];
  return (
    <Stack sx={styles.basicDetailsBox}>
      {locationDetails.map((placehoders) => (
        <TextFieldProps {...placehoders} />
      ))}

      {/* Save Button */}
      <Button variant="contained" sx={styles.editButton}>
        Save
      </Button>
    </Stack>
  );
};
