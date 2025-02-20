import React from "react";

import { Box, Button, Stack, Typography } from "@mui/material";
import { CalendarToday, Comment } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Details } from "../PropertyDetail/Details";
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

export const DescriptionAndButton = () => {
  return (
    <Stack sx={{ border: "1px solid red", width: "38vw", mt: "4rem" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: "1rem",
        }}
      >
        {/* Button of featured and for renting */}
        <Button variant="contained" sx={{ backgroundColor: "#FF5A3C" }}>
          featured
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#FFA500" }}>
          for renting
        </Button>

        {/* Calender */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CalendarToday sx={{ color: "#FF5A3C", pr: "5px" }} />
          <Typography variant="body2">May 19, 2021</Typography>
        </Box>

        {/* Comments */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* //! Change the comment icon */}
          <Comment sx={{ pr: "5px" }} />
          <Typography variant="body2">35 Comments</Typography>
        </Box>
      </Box>
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
      <Details />

      {/* Features */}
      <FeaturesDetails />

      {/* Nearby */}
      <Nearby />

      {/* From Our Gallery */}
      <OurGallery />

      {/* Amenities */}
      <AmenitiesDetails />

      {/* //! Ask how to set google maps */}

      {/* Property Video */}
      <PropertyVideo />

      {/* Customer Reviews */}
      <Reviews />

      {/* Add Review */}
      <AddReview />
    </Stack>
  );
};
