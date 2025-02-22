import { Divider, Stack, Typography, Box, styled } from "@mui/material";
import React from "react";

// Customer details box css
const CustomerBox = styled(Box)({
  //   border: "1px solid red",
  width: "33.33%",
});

// Text details of customer
const TextCenter = styled(Typography)({
  textAlign: "center",
});

export const CustomerDetails = ({
  label1,
  label2,
  label3,
  value1,
  value2,
  value3,
}) => {
  return (
    <Stack>
      <Box sx={{ display: "flex", m: "1rem 0", color: "#ABAAAA" }}>
        <CustomerBox>
          <TextCenter variant="body1">
            {label1} : {value1}
          </TextCenter>
        </CustomerBox>

        <Box>
          {/* Divider */}
          <Divider
            orientation="vertical"
            sx={{ width: "1px", backgroundColor: "#B9B9B9" }}
          />
        </Box>

        <CustomerBox>
          <TextCenter variant="body1">
            {label2} : {value2}
          </TextCenter>
        </CustomerBox>

        <Box>
          {/* Divider */}
          <Divider
            orientation="vertical"
            sx={{ width: "1px", backgroundColor: "#B9B9B9" }}
          />
        </Box>

        <CustomerBox>
          <TextCenter variant="body1">
            {label3} : {value3}
          </TextCenter>
        </CustomerBox>
      </Box>
    </Stack>
  );
};
