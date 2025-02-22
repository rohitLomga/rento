import { Stack, Button } from "@mui/material";
import React from "react";
import { DropMessageForBook } from "../DropMessageForBook/DropMessageForBook";
import { HouseDetails } from "../Houses/HouseDetails";
import { TopCategories } from "../TopCategories/TopCategories";
import { BookRoom } from "../BookRoom/BookRoom";
import { FollowUs } from "../FollowUs/FollowUs";
import { LastOfRight } from "../LastOfRight/LastOfRight";

export const RightSideContainer = () => {
  return (
    <Stack sx={{ width: "25vw", display: "flex", gap: "2rem 0" }}>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#FF5A3C", textTransform: "capitalize" }}
      >
        Book Now
      </Button>

      {/* Drop message for Book */}
      <DropMessageForBook />

      {/* Details of Houses */}
      <HouseDetails />

      {/* Top Categories */}
      <TopCategories />

      {/* Drop a message for Book */}
      <BookRoom />

      {/* Follow us */}
      <FollowUs />

      {/* Last Content of the right side */}
      <LastOfRight />
    </Stack>
  );
};
