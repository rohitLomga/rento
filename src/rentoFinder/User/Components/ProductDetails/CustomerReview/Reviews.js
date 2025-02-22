import { Divider, Stack } from "@mui/material";
import React from "react";
import profile1 from "../ProfileImages/profile1.jpeg";
import { Title } from "../Title/Title";
import { CustomerReview } from "./CustomerReview";

export const Reviews = () => {
  const reviews = [
    {
      profile: profile1,
      person: "Emily",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod, quae, dolores, atque quia quibusdam repellendus voluptas voluptatibus doloremque fugit quos.",
    },
  ];
  return (
    <Stack>
      <Title title="Customer Review" />
      <Stack>
        {reviews.map((review) => (
          <CustomerReview {...review} />
        ))}
      </Stack>
      <Divider orientation="horizontal" sx={{ m: "2rem 0" }} />

      <Stack>
        {reviews.map((review) => (
          <CustomerReview {...review} />
        ))}
      </Stack>
    </Stack>
  );
};
