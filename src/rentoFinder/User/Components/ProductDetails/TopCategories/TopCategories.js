import { Stack } from "@mui/material";
import React from "react";
import { Title } from "../Title/Title";
import { NameAndValue } from "../PropertyDetail/NameAndValue";

export const TopCategories = () => {
  // Details
  const details = [
    {
      name: "Apartments",
      value: "(25)",
    },
    {
      name: "Apartments",
      value: "(25)",
    },
    {
      name: "Apartments",
      value: "(25)",
    },
    {
      name: "Apart",
      value: "(25)",
    },
    {
      name: "Apartments",
      value: "(25)",
    },
  ];
  return (
    <Stack sx={{ border: "2px solid #EDEDED", padding: "0 2rem 2rem 2rem" }}>
      <Title title="Top Categories" />

      {details.map((data) => (
        <NameAndValue {...data} left="30px" />
      ))}
    </Stack>
  );
};
