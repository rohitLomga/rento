import { Button, Stack, styled, TextField, Box } from "@mui/material";
import React from "react";
import { Title } from "../Title/Title";

// Styling the textfield
const Input = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#FF5A3C",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF5A3C",
    },
  },
  backgroundColor: "white",
});

// Function of drop message
export const DropMessageForBook = () => {
  return (
    <Stack>
      <Box
        sx={{
          border: "2px solid #EDEDED",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "0 2rem 2rem 2rem",
        }}
      >
        {/* Drop message for booking TITLE */}
        <Title title="Drop Message For Book" />
        {/* Name */}
        <Input variant="outlined" placeholder="Your Name*" required />

        {/* Email */}
        <Input variant="outlined" placeholder="Your e-Mail*" required />

        {/* Textarea to write details */}
        <Input label="" multiline rows={4} variant="outlined" fullWidth />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF5A3C",
            width: "60%",
            textTransform: "capitalize",
            p: "10px 0",
          }}
        >
          send message
        </Button>
      </Box>
    </Stack>
  );
};
