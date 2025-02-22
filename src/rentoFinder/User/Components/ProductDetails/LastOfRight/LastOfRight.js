import { Box, Stack, styled } from "@mui/material";
import React from "react";
import { Title } from "../Title/Title";

// Style of the Box
// ! Check the font weight from the UI
const StyledBox = styled(Box)({
  padding: "10px 30px",
  backgroundColor: "#F2F6F7",
  textTransform: "uppercase",
  color: "#5C727D",
});

export const LastOfRight = () => {
  return (
    <Stack sx={{ border: "2px solid #EDEDED", padding: "0 2rem 2rem 2rem" }}>
      {/* Title */}
      <Title title="Drop Message For Book" />
      <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <StyledBox component="div" sx={{}}>
          Popular
        </StyledBox>
        <StyledBox component="div">Design</StyledBox>
        <StyledBox component="div">ux</StyledBox>
        <StyledBox component="div">usability</StyledBox>
        <StyledBox component="div">develop</StyledBox>
        <StyledBox component="div">icon</StyledBox>
        <StyledBox component="div">car</StyledBox>
        <StyledBox component="div">service</StyledBox>
        <StyledBox component="div">repairs</StyledBox>
        <StyledBox component="div">auto parts</StyledBox>
        <StyledBox component="div">oil</StyledBox>
        <StyledBox component="div">dealer</StyledBox>
        <StyledBox component="div">oil change</StyledBox>
        <StyledBox component="div">body colour</StyledBox>
      </Box>
    </Stack>
  );
};
