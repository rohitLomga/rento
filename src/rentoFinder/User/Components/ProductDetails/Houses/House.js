import { Rating, Stack, Typography, Box, Divider } from "@mui/material";
import React from "react";
import image1 from "../../../room3.jpg";

export const House = ({ image = image1, title, price, isLast }) => {
  return (
    <Stack>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        {/* Image */}
        <Box
          component="img"
          src={image}
          sx={{ width: "100px", height: "70px" }}
        />

        {/* Details of house */}
        <Box>
          <Rating value={5} readOnly />
          <Typography
            variant="body1"
            sx={{ fontSize: "14px", fontWeight: 500 }}
          >
            {title}
          </Typography>

          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography
              variant="body1"
              sx={{ color: "#FF5A3C", fontSize: "14px", fontWeight: 500 }}
            >
              ${price}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#B04D3B",
                fontSize: "11px",
                fontWeight: 500,
                mt: "3px",
              }}
            >
              ${price}
            </Typography>
          </Box>
        </Box>
      </Box>

      {!isLast && <Divider sx={{ m: "2rem 0 1rem 0" }} />}
    </Stack>
  );
};
