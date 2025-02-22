import {
  Container,
  Divider,
  Stack,
  Typography,
  Box,
  styled,
  Button,
} from "@mui/material";
import React from "react";
import { Title } from "../../Components/ProductDetails/Title/Title"; // Title
import image from "../../room3.jpg"; // Image
import PlaceIcon from "@mui/icons-material/Place"; // Locaiton icon
import { CustomerDetails } from "../../Components/OrderSummary/CustomerDetails";
import Navbar from "../../Components/NavbarAndFooter/Navbar";
import Footer from "../../Components/NavbarAndFooter/Footer";

// Prices Box
const PricesBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  //   m: "8px 0",
});

// Price
const ColoredText = styled(Typography)({
  color: "#ABAAAA",
});

// Prices in bold
const BoldFont = styled(Typography)({
  fontWeight: "bolder",
});
// Function of the order summary
export const OrderSummary = () => {
  // Customer details
  const customer = [
    {
      label1: "Customer Name",
      value1: "John Simson",
      label2: "Cardholder Name",
      value2: "John Simson",
      label3: "Payment Method",
      value3: "Credit Card",
    },
    {
      label1: "Customer Name",
      value1: "John Simson",
      label2: "Cardholder Name",
      value2: "John Simson",
      label3: "Payment Method",
      value3: "Credit Card",
    },
    {
      label1: "Customer Name",
      value1: "John Simson",
      label2: "Cardholder Name",
      value2: "John Simson",
      label3: "Payment Method",
      value3: "Credit Card",
    },
  ];
  return (
    <Stack>
      {/* Navbar */}
      <Navbar />

      <Container sx={{ width: "70%", m: "10rem auto" }}>
        {/* Title */}
        <Title title="Order Details" />

        {/* Image of the property */}
        <Box>
          <Box
            component="img"
            src={image}
            sx={{ width: "100%", height: "400px" }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <Typography variant="h5">Diamond Manor Apartment</Typography>
            <Typography variant="body1" sx={{ color: "#ABAAAA" }}>
              Property Id : #HZ29
            </Typography>
          </Box>

          {/* Location */}
          <Box
            sx={{
              display: "flex",
              padding: "5px 1rem",
              gap: "1rem",
              //   backgroundColor: "#ECECEC",
            }}
          >
            <PlaceIcon sx={{ color: "#F24822" }} />
            <Typography variant="body1" sx={{ color: "#5C727D" }}>
              Belmont Gardens, Chicago
            </Typography>
          </Box>

          {/* Divider */}
          <Divider sx={{ m: "1rem 0" }} />

          {/* Customer Details */}

          <Box>
            {customer.map((details) => (
              <CustomerDetails {...details} />
            ))}
          </Box>

          {/* Divider */}
          <Divider sx={{ m: "1rem 0" }} />

          {/* Subtotal, tax, and discount */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0 1rem",
              gap: "0.5rem",
            }}
          >
            {/* Subtotal */}
            <PricesBox>
              <ColoredText variant="body1">Subtotal</ColoredText>
              <BoldFont variant="body1">$ 34</BoldFont>
            </PricesBox>

            {/* Tax */}
            <PricesBox>
              <ColoredText variant="body1">Tax</ColoredText>
              <BoldFont variant="body1">30%</BoldFont>
            </PricesBox>

            {/* Discount */}
            <PricesBox>
              <ColoredText variant="body1">Discount</ColoredText>
              <BoldFont variant="body1">5%</BoldFont>
            </PricesBox>
          </Box>

          {/* Divider */}
          <Divider sx={{ m: "1rem" }} />

          {/* Proceed Now */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem 2rem",
              backgroundColor: "#EDEDED",
            }}
          >
            <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <Typography variant="body1">
                Send booking confirmation email on my
              </Typography>
              <Typography variant="body1"> xyz@gmail.com</Typography>
            </Box>

            {/* Proceed now button */}
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#FF5A3C",
                padding: "0.5rem 6rem",
                borderRadius: 0,
              }}
            >
              Proceed Now
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Stack>
  );
};
