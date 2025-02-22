import {
  Box,
  Button,
  Rating,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

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
export const AddReview = () => {
  return (
    <Stack
      spacing={3}
      sx={{ padding: "2rem", backgroundColor: "#F0F4F7", mt: "3rem" }}
    >
      {/* Add a review text */}
      <Typography variant="h5">Add a Review</Typography>

      {/* Your rating */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Typography variant="h6">Your Ratings:</Typography>
        <Rating value={5} readOnly />
      </Box>

      {/* Textarea to write comments */}
      <Input label="" multiline rows={4} variant="outlined" fullWidth />

      {/* Name */}
      <Input variant="outlined" placeholder="Type Your Name..." />

      {/* Email */}
      <Input variant="outlined" placeholder="Type Your email..." />

      {/* Website */}
      <Input variant="outlined" placeholder="Type Your website..." />

      {/* TEXT Saving name, email, and website */}
      <Typography variant="body2" sx={{ color: "#A6B3BA", fontSize: "14px" }}>
        Save my name, email, and website in its browsers for the next time I
        comment
      </Typography>

      {/* Button */}
      <Button
        variant="cocntained"
        sx={{
          backgroundColor: "#FF5A3C",
          padding: "10px",
          width: "20%",
          color: "white",
        }}
      >
        Submit
      </Button>
    </Stack>
  );
};
