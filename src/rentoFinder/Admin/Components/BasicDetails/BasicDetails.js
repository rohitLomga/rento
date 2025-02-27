import { Button, Stack, TextField } from "@mui/material";

// CSS
import { textfieldPropsTheme } from "../../../../CSS/Admin/TextFieldPropsTheme";
import { useTheme } from "@emotion/react";

export const TextFieldProps = ({ placeholder }) => {
  const theme = useTheme();
  const styles = textfieldPropsTheme(theme);
  return (
    <Stack>
      <TextField
        variant="outlined"
        placeholder={placeholder}
        size="small"
        sx={styles.textFieldGap}
      />
    </Stack>
  );
};

export const BasicDetails = () => {
  // CSS
  const theme = useTheme();
  const styles = textfieldPropsTheme(theme);

  const placeholderData = [
    {
      placeholder: "Name",
    },
    {
      placeholder: "Property Title*",
    },
    {
      placeholder: "Property Type",
    },
    {
      placeholder: "No. of rooms",
    },
    {
      placeholder: "No. of bathrooms",
    },
    {
      placeholder: "Parking*",
    },
    {
      placeholder: "Year of build",
    },
    {
      placeholder: "Price*",
    },
  ];

  return (
    <Stack sx={styles.basicDetailsBox}>
      {placeholderData.map((datas) => (
        <TextFieldProps {...datas} />
      ))}

      <Button variant="contained" sx={styles.editButton}>
        Edit
      </Button>
    </Stack>
  );
};
