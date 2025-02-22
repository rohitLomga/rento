import { Stack, Grid } from "@mui/material";
import React from "react";
import { RentAndSellRoom } from "./RentAndSellRoom";

// Many rooms with parent component (props component)
export const Rooms = () => {
  const rooms = [
    {
      //TODO : ( CHANGE THE IMAGE ) roomImage: image1,
      title: "Room 1",
      location: "Location 1",
      price: "4,000",
    },
    {
      //TODO : ( CHANGE THE IMAGE ) roomImage: image1,
      title: "Room 2",
      location: "Location 2",
      price: "4,000",
    },
    {
      //TODO : ( CHANGE THE IMAGE ) roomImage: image1,
      title: "Room 3",
      location: "Location 3",
      price: "4,000",
    },
    {
      //TODO : ( CHANGE THE IMAGE ) roomImage: image1,
      title: "Room 4",
      location: "Location 4",
      price: "4,000",
    },
    {
      //TODO : ( CHANGE THE IMAGE ) roomImage: image1,
      title: "Room 5",
      location: "Location 5",
      price: "4,000",
    },
    {
      // roomImage: image1,
      title: "Room 6",
      location: "Location 6",
      price: "4,000",
    },
  ];

  return (
    <Grid container spacing={2} sx={{ width: "100%" }}>
      {rooms.map((room, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <RentAndSellRoom {...room} />
        </Grid>
      ))}
    </Grid>
  );
};
