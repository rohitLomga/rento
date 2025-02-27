import { Stack, Box, Container, Chip, Typography, Button } from "@mui/material";
import React from "react";

import image from "../../../room1.jpg"; // Room Image
import { HomeFeatures } from "../IconsWithTitle/IconsWithTitle";
import { Video } from "../../Video/RoomVideo";

export const ImageWithVideo = () => {
  return (
    <Stack>
      <Container
        sx={{
          width: "65%",
          mt: "5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: "100%",

            display: "flex",
            flexDirection: "row",
            gap: "3rem",
          }}
        >
          {/* Image */}
          <Box
            sx={{
              width: "330px",
              overflow: "hidden",
              padding: "10px",
              // position: "relative",
              // zIndex: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow effect
            }}
          >
            <Box
              component="img"
              src={image}
              sx={{ width: "100%", height: "100%", display: "block" }}
            />

            {/* Video */}
            <Box
              sx={{
                width: "200px",
                height: "150px",
                backgroundColor: "black",
                position: "absolute",
                top: "66%",
                left: "1%",
                zIndex: 3,
              }}
            >
              <Video height="100%" />
            </Box>
          </Box>

          {/* Text beside the image */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* About us Chip */}
            <Box>
              <Chip
                label="About us"
                sx={{
                  backgroundColor: "#FF5A3C1A",
                  padding: "0.5rem 1rem",
                  // opacity: "10%",
                  color: "#FF5A3C",
                }}
              />
            </Box>

            <Typography variant="h4">
              The Leading Real Estate <br /> Rental Marketplace
            </Typography>

            <Typography variant="body1">
              Over 39,000 people work for us in more than 70 countries all over{" "}
              <br />
              the This breadth of global coverage, combined with specialist
              <br />
              services
            </Typography>

            {/* Icons and Title */}
            <HomeFeatures />

            {/* Text in colouerd box */}
            <Box
              sx={{
                backgroundColor: "#E53E290D",
                borderLeft: "3px",
                borderLeftStyle: "solid",
                borderLeftColor: "#FF5A3C",
                padding: "1rem",
                color: "#5C727D",
              }}
            >
              <Typography variant="body1">
                "Enimad minim veniam quis nostrud exercitation <br />
                llamco laboris. Lorem ipsum dolor sit amet"
              </Typography>
            </Box>

            {/* Button */}
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF5A3C",
                  color: "white",
                  borderRadius: 0,
                  padding: "0.5rem 1rem",
                }}
              >
                our services
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};
