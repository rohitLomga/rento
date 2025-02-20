import { Stack, Box } from "@mui/material";
import { Apartment } from "../Apartment/Apartment"; // Apartment Props
import roomImage from "../../../room1.jpg";

export const Category_4 = () => {
  return (
    <Stack>
      {/* Apartments */}
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        {/* Apartment 1 */}
        <Apartment
          image={roomImage}
          noOfPhotos="4"
          noOfVideos="2"
          location="Belmonds Garden, Chicago"
          price="34500"
          apartmentName="Category 4"
          description1="Beautiful Huge 1 Family House Of"
          description2="Westbury. New renoveted With New Wood"
          bedrooms="3"
          bathrooms="2"
          area="3450"
        />

        {/* Apartment 2 */}
        <Apartment
          image={roomImage}
          noOfPhotos="4"
          noOfVideos="2"
          location="Belmonds Garden, Chicago"
          price="34500"
          apartmentName="Category 4"
          description1="Beautiful Huge 1 Family House Of"
          description2="Westbury. New renoveted With New Wood"
          bedrooms="3"
          bathrooms="2"
          area="3450"
        />

        {/* Apartment 3 */}
        <Apartment
          image={roomImage}
          noOfPhotos="4"
          noOfVideos="2"
          location="Belmonds Garden, Chicago"
          price="34500"
          apartmentName="Category 4"
          description1="Beautiful Huge 1 Family House Of"
          description2="Westbury. New renoveted With New Wood"
          bedrooms="3"
          bathrooms="2"
          area="3450"
        />
      </Box>
    </Stack>
  );
};
