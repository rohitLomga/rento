import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { PropertyDetails } from "../PropertyDetail/PropertyDetails";
import "@fontsource/nunito-sans"; //* Font
import "@fontsource/poppins"; //* Font
import { FeaturesDetails } from "../Features/FeaturesDetails";
import { Title } from "../Title/Title";
import { Nearby } from "../Nearby/Nearby";
import { OurGallery } from "../OurGallery/OurGallery";
import { AmenitiesDetails } from "../Amenities/AmenitiesDetails";
import { PropertyVideo } from "../PropertyVideo/PropertyVideo";
import { Reviews } from "../CustomerReview/Reviews";
import { AddReview } from "../AddReview/AddReview";
import { RelatedProperties } from "../RelatedProperties/RelatedProperties";
import { TopButton } from "../TopButton/TopButton";
import { Floor } from "../FloorPlan/Floor";

export const LeftSideContainer = ({ sell }) => {
  return (
    <Stack sx={{ width: "40vw", mt: "4rem" }}>
      {/* Top button */}
      <TopButton />

      {/* Title */}
      <Typography
        variant="h4"
        sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
      >
        Diamond Manor Apartment
      </Typography>

      {/* Location */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: "1rem",
          mb: "-1.5rem",
        }}
      >
        <LocationOnIcon sx={{ color: "#F24822" }} />
        <Typography
          variant="body2"
          sx={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          Belmont Garden, Chicago
        </Typography>
      </Box>

      {/* Description text */}
      <Title title="Description" />

      <Box>
        <Typography
          variant="body2"
          sx={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          uisque malesuada aliquam erat. Hac pellentesque diam ut a enim.
          Ullamcorper sit feugiat neque nulla habitant morbi ut in ullamcorper.
          Ac faucibus ac gravida ultricies tristique. Luctus lectus lacinia
          pulvinar diam a massa tincidunt condimentum. At diam varius mauris
          feugiat. Cursus curabitur venenatis lorem proin aliquet urna orci at.
          Nunc pharetra commodo luctus aenean nunc tortor eu. Varius mattis
          bibendum ornare condimentum pellentesque aliquam ut. Varius volutpat
          sit habitasse ut interdum amet eget nisl. At congue egestas placerat
          adipiscing fames. Metus vestibulum in massa sagittis adipiscing
          maecenas cursus. Amet tempor rhoncus vitae sit sit quis adipiscing
          porttitor odio. Libero eget pharetra ac suscipit eleifend erat euismod
          tempor. Fusce leo placerat cras odio id nibh rhoncus adipiscing. Sit
          aliquet pretium ultrices praesent. Facilisis egestas tempus arcu
          morbi. Dui sed lorem imperdiet accumsan ac mauris nec. Et massa mattis
          ultrices pharetra nunc ultrices natoque arcu blandit. Eu ac quis non
          non ipsum tellus etiam fermentum leo. Sit tellus sit etiam dui. Nulla{" "}
        </Typography>
      </Box>

      {/* Property Detail */}
      <PropertyDetails />

      {/* Features */}
      <FeaturesDetails />

      {/* Nearby */}
      <Nearby />

      {/* From Our Gallery */}
      <OurGallery />

      {/* Amenities */}
      <AmenitiesDetails />

      {/* //! Ask how to set google maps */}

      {/* Blueprint image of the propety */}
      {sell ? <Floor /> : ""}

      {/* Property Video */}
      <PropertyVideo />

      {/* Customer Reviews */}
      <Reviews />

      {/* Add Review */}
      <AddReview />

      {/* Related Properties */}
      <RelatedProperties />
    </Stack>
  );
};
