import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import image1 from "../Images/profileImage.png";
import PlaceIcon from "@mui/icons-material/Place"; // Locaiton icon
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"; // Delete icon

export const Item = ({
  image = image1,
  title = "Diamond Manor Apartment",
  propertyID = "#HZ29",
  location = "Belmont Gardens, Chicago",
  price = 34,
}) => {
  return (
    <Stack>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            padding: "2rem",
            backgroundColor: "#F3F3F3",
            borderRadius: "20px",
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={image}
            sx={{ width: "150px", borderRadius: "23px" }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                padding: "5px",
                //   gap: "1rem",
                justifyContent: "space-evenly",
                backgroundColor: "#ECECEC",
              }}
            >
              {/* Name of the apartment */}
              <Typography variant="h6">{title}</Typography>

              {/* Divider */}
              <Divider
                orientation="vetical"
                sx={{ width: "2px", backgroundColor: "#B9B9B9" }}
              />

              {/* Property id */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "2px 1rem",
                  backgroundColor: "white",
                  color: "#ABAAAA",
                }}
              >
                <Typography variant="body1">
                  Property Id : {propertyID}
                </Typography>
              </Box>
            </Box>

            {/* Location */}
            <Box
              sx={{
                display: "flex",
                padding: "5px 1rem",
                gap: "1rem",
                backgroundColor: "#ECECEC",
              }}
            >
              <PlaceIcon sx={{ color: "#F24822" }} />
              <Typography variant="body1" sx={{ color: "#5C727D" }}>
                {location}
              </Typography>
            </Box>

            {/* Add more, Save for later and Share */}
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                pl: "1rem",
              }}
            >
              {/* Add more */}
              <Box sx={{ display: "flex" }}>
                {/* Delete icon */}
                <DeleteOutlineIcon
                  sx={{
                    border: "2px solid #F24822",
                    p: "2px",
                    backgroundColor: "#FFFFFF",
                  }}
                />
                <Box
                  sx={{
                    padding: "3px 5rem",
                    backgroundColor: "#F24822",
                    color: "white",
                  }}
                >
                  <Typography variant="body1">1</Typography>
                </Box>

                <Box
                  sx={{
                    padding: "0 7px",
                    border: "2px solid #F24822",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <Typography variant="body1">+</Typography>
                </Box>
              </Box>

              {/* Divider */}
              <Divider sx={{ width: "2px", backgroundColor: "#B9B9B9" }} />

              {/* Save for Later */}
              <Box sx={{ backgroundColor: "#E6E6E6" }}>
                <Typography variant="body1" sx={{ padding: "3px 14px" }}>
                  Save For Later
                </Typography>
              </Box>

              {/* Divider */}
              <Divider sx={{ width: "1.5px", backgroundColor: "#B9B9B9" }} />

              {/* Share */}
              <Box sx={{ backgroundColor: "#E6E6E6" }}>
                <Typography variant="body1" sx={{ padding: "3px 14px" }}>
                  Share
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Price */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "6px",
            backgroundColor: "#F3F3F3",
          }}
        >
          <Box
            sx={{
              width: "125px",
              display: "flex",
              justifyContent: "end",
              padding: "5px 0",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Price
            </Typography>
          </Box>

          <Box
            sx={{
              width: "150px",
              backgroundColor: "#FFFFFF",
              margin: "8px",
              padding: "5px",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              $ {price}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Divider
        orientation="horizontal"
        sx={{ width: "100%", backgroundColor: "#B9B9B9", m: "1rem 0" }}
      />
    </Stack>
  );
};
