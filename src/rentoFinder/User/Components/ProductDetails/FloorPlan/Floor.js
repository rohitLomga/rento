import { Stack, Box, Typography } from "@mui/material";
import { Title } from "../Title/Title";
import image from "../../../room2.jpg"; // Image
import floorImage from "../../Images/floor.png";

export const Floor = () => {
  return (
    <Stack>
      <Title title="Floor Plan" />

      <Box sx={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <Box
          component="img"
          src={floorImage}
          sx={{ width: "50%", mt: "1rem" }}
        />

        <Box sx={{ mt: "-1rem" }}>
          <Typography variant="h5">Second Floor</Typography>
          <Typography variant="body1" sx={{ color: "#5C727D" }}>
            Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem
            ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod
            tempor.Incididunt labore et dolore magna aliqua. sed ayd minim
            veniam
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};
