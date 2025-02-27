import { Button, Stack, TextField, Box } from "@mui/material";

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

      {/* <Button variant="contained" sx={styles.editButton}>
        Edit
      </Button> */}

      <Box sx={styles.buttonBox}>
        {/* //TODO : Change the approve button color when working with the logics */}
        <Button variant="contained" sx={styles.approvedSellerBtn}>
          Approve
        </Button>
        <Button variant="contained" sx={styles.approvedSellerBtn}>
          Decline
        </Button>
        <Button variant="contained" sx={styles.approvedSellerBtn}>
          Hold
        </Button>
      </Box>
    </Stack>
  );
};
