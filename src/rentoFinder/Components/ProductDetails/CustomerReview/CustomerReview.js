import React from "react";
import { Avatar, Rating, Stack, Typography, Box } from "@mui/material";
export const CustomerReview = ({ profile, person, rating, review }) => {
  return (
    <Stack>
      <Stack
        sx={{
          display: "flex",
          gap: "1rem",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="profile 1"
          src={profile}
          sx={{ width: 100, height: 100 }}
        />

        <Box>
          <Typography variant="h6">{person}</Typography>
          <Rating name="read-only" value={rating} readOnly />
          <Typography variant="body2">{review}</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};
