import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../Images/profileImage.png";
import PlaceIcon from "@mui/icons-material/Place"; // Locaiton icon
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"; // Delete icon
import { Title } from "../ProductDetails/Title/Title";
import { Item } from "./Item";

export const CartUI = () => {
  return (
    <Stack>
      <Container
        sx={{
          width: "60%",
          backgroundColor: "#F9F9F9",
          borderRadius: "25px",
          mt: "5%",
          pb: "5%",
        }}
      >
        {/* Title */}
        <Title title="Cart" />

        {/* Item */}
        <Box sx={{ mt: "1rem" }}>
          <Item />
          <Item />
        </Box>

        {/* Total Price */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "6px",
            backgroundColor: "#F24822",
          }}
        >
          <Box
            sx={{
              width: "24%",
              display: "flex",
              justifyContent: "end",
              padding: "5px 0",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#FFFFFF" }}
            >
              Subtotal (2 Items)
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
              $ 34
            </Typography>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};
