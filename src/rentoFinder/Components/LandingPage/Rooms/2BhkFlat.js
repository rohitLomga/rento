import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import { Apartment } from "../Apartment/Apartment";
import roomImage from "../../../room1.jpg";
import "./slideshow.css";

export const TwoBhkFlat = () => {
  const apartments = [
    {
      image: roomImage,
      noOfPhotos: "4",
      noOfVideos: "2",
      location: "Belmonds Garden, Chicago",
      price: "34500",
      apartmentName: "2 BHK Flat",
      description1: "Beautiful Huge 1 Family House Of",
      description2: "Westbury. New renovated With New Wood",
      bedrooms: "3",
      bathrooms: "2",
      area: "3450",
    },
    {
      image: roomImage,
      noOfPhotos: "4",
      noOfVideos: "2",
      location: "Sunset View, California",
      price: "50000",
      apartmentName: "Luxury 2 BHK Flat",
      description1: "Amazing sea-facing apartment",
      description2: "With premium interiors and furnishings",
      bedrooms: "3",
      bathrooms: "3",
      area: "4000",
    },
    {
      image: roomImage,
      noOfPhotos: "4",
      noOfVideos: "2",
      location: "Downtown, New York",
      price: "45000",
      apartmentName: "Modern 2 BHK Flat",
      description1: "Perfect for urban lifestyle",
      description2: "Near shopping malls and metro",
      bedrooms: "2",
      bathrooms: "2",
      area: "2800",
    },
    {
      image: roomImage,
      noOfPhotos: "4",
      noOfVideos: "2",
      location: "Green Valley, Texas",
      price: "32000",
      apartmentName: "Cozy 2 BHK Flat",
      description1: "Peaceful and surrounded by nature",
      description2: "Great amenities and parks nearby",
      bedrooms: "3",
      bathrooms: "2",
      area: "3300",
    },
    {
      image: roomImage,
      noOfPhotos: "4",
      noOfVideos: "2",
      location: "Skyline Towers, Miami",
      price: "60000",
      apartmentName: "Luxury 2 BHK Flat",
      description1: "Oceanfront penthouse",
      description2: "Includes private pool and rooftop",
      bedrooms: "3",
      bathrooms: "3",
      area: "5000",
    },
    {
      image: roomImage,
      noOfPhotos: "4",
      noOfVideos: "2",
      location: "Lakeview Apartments, Seattle",
      price: "38000",
      apartmentName: "Spacious 2 BHK Flat",
      description1: "Near lake with a beautiful view",
      description2: "Modern interiors and eco-friendly",
      bedrooms: "2",
      bathrooms: "2",
      area: "2900",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const apartmentsPerPage = 3;
  const totalPages = Math.ceil(apartments.length / apartmentsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <Box>
      <Box className="slider-container">
        <Box
          className="slider show"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {apartments.map((apartment, index) => (
            <Box key={index} className="slide">
              <Apartment {...apartment} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Dots Navigation */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={1}
        sx={{ marginTop: "20px" }}
      >
        {Array.from({ length: totalPages }).map((_, index) => (
          <Box
            key={index}
            onClick={() => goToPage(index)}
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: currentPage === index ? "#FF5A3C" : "#5C727D",
              cursor: "pointer",
              transition: "background-color 0.5s",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};
