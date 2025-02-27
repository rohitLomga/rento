import { Stack } from "@mui/material";
// import video1 from "./video1.mp4";
import video1 from "../../../video.mp4";
import { Video } from "../../../Components/Video/RoomVideo";
import React from "react";
import { Title } from "../Title/Title";

export const PropertyVideo = () => {
  return (
    <Stack>
      <Title title="Property Video" />
      <Video video={video1} />
    </Stack>
  );
};
