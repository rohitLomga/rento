import { Container, Stack, Typography, Box, Pagination } from "@mui/material";
import Navbar from "../../Components/NavbarAndFooter/Navbar";
import { FilterProperty } from "../../Components/FilterPage/FilterProperty/FilterProperty";
import { SearchBar } from "../../Components/FilterPage/SearchBar/SearchBar";
import Footer from "../../Components/NavbarAndFooter/Footer";

export const SearchRoom = () => {
  return (
    <Stack>
      {/* Navbar */}
      <Navbar />

      <Container
        // * Main container css of filter and search rooms
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          gap: "5%",
        }}
      >
        <Box sx={{ margin: "auto", mt: "50px" }}>
          {/* Filter text and number of results */}
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", fontSize: "24px" }}
            >
              Filters
            </Typography>
            <Typography variant="body1">
              About 9,620 results (0.62 seconds)
            </Typography>
          </Box>

          <Box>
            <FilterProperty />
          </Box>
        </Box>

        {/* Search bar and select textfield */}
        <SearchBar />
      </Container>

      {/* Page navigation */}
      <Stack spacing={2} sx={{ m: "auto", mt: "50px" }}>
        <Pagination
          count={10}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#5C727D !important", // Change the color of the pagination items
            },
            "& .Mui-selected": {
              backgroundColor: "#FF5A3C !important", // Change the background color of the selected item
              color: "white !important", // Change the text color of the selected item
            },
          }}
        />
      </Stack>

      {/* Footer */}
      <Footer />
    </Stack>
  );
};
