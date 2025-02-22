import { Box, Divider, Stack, styled, Typography } from "@mui/material";
import { Filter } from "../Filter/Filter";
import FilterByPrice from "../FilterByPrice/FilterByPrice";

const StyledDivider = styled(Divider)({
  marginTop: "20px",
});

export const FilterProperty = () => {
  const labelAndPrice = [
    {
      label: "House",
      price: "4,000",
    },
    {
      label: "Single Family",
      price: "4,000",
    },
    {
      label: "Apartment",
      price: "4,000",
    },
    {
      label: "Office Villa",
      price: "4,000",
    },
    {
      label: "Luxury Home",
      price: "4,000",
    },
    {
      label: "Studio",
      price: "4,000",
    },
  ];

  const amenities = [
    {
      label: "Dishwasher",
      price: "5,000",
    },
    {
      label: "Floor Coverings",
      price: "5,000",
    },
    {
      label: "Internet",
      price: "5,000",
    },
    {
      label: "Build Wardrobes",
      price: "5,000",
    },
    {
      label: "Supermarket",
      price: "5,000",
    },
    {
      label: "Kids Zone",
      price: "5,000",
    },
  ];

  // Array of price range
  const priceRange = [
    {
      label: "Low Budget",
      price: "$5,000 - $10,000",
    },
    {
      label: "Medium",
      price: "$10,000 - $30,000",
    },
    {
      label: "High Budget",
      price: "$30,000",
    },
  ];

  // * Bed and Bath
  const bedAndBath = [
    {
      label: "Single",
      price: "5,000",
    },
    {
      label: "Double",
      price: "5,000",
    },
    {
      label: "Upto 3",
      price: "5,000",
    },
    {
      label: "Upto 5",
      price: "5,000",
    },
  ];

  // * Category
  const category = [
    {
      label: "Buying",
      price: "5,000",
    },
    {
      label: "Renting",
      price: "5,000",
    },
  ];
  // Return the JSX of the FilterProperty component
  return (
    <Stack
      sx={{
        display: "inline-block",
        padding: "20px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        mt: "30px",
      }}
    >
      {/* Property Type */}
      <Box>
        <Typography variant="h6">Property Type</Typography>
        {labelAndPrice.map((labelsPrices) => (
          <Filter {...labelsPrices} />
        ))}
      </Box>

      {/* Divider */}
      <StyledDivider />

      {/* Amenities */}
      <Box>
        <Typography variant="h6" sx={{ mt: "20px" }}>
          Amenities
        </Typography>
        {amenities.map((labelsPrices) => (
          <Filter {...labelsPrices} />
        ))}
      </Box>

      {/* Divider */}
      <StyledDivider />

      {/* Price Range */}
      <Box>
        <Typography variant="h6" sx={{ mt: "20px" }}>
          Price Range
        </Typography>
        {priceRange.map((labelsPrices) => (
          <Filter {...labelsPrices} />
        ))}
      </Box>

      {/* Divider */}
      <StyledDivider />

      {/* Filter by price */}
      <Box>
        <Typography variant="h6" sx={{ mt: "20px" }}>
          Filter By Price
        </Typography>
        <Filter checkbox={false} label="Your Range :" price="$5 - $300" />

        {/* //! Check Later edit the price on */}
        {/*//! Price value is not defined */}
        <FilterByPrice />
      </Box>

      {/* Divider */}
      <StyledDivider />

      {/* Bed and Bath */}
      <Box>
        <Typography variant="h6" sx={{ mt: "20px" }}>
          Bed and Bath
        </Typography>
        {bedAndBath.map((labelsPrices) => (
          <Filter {...labelsPrices} />
        ))}
      </Box>

      {/* Divider */}
      <StyledDivider />

      {/* Category */}
      <Box>
        <Typography variant="h6" sx={{ mt: "20px" }}>
          Category
        </Typography>
        {category.map((labelsPrices) => (
          <Filter {...labelsPrices} />
        ))}
      </Box>
    </Stack>
  );
};
