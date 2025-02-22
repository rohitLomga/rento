import { Stack } from "@mui/material";
import React from "react";
import Navbar from "../../Components/NavbarAndFooter/Navbar";
import { CartUI } from "../../Components/PaymentAndCart/CartUI";
import { Payment } from "../../Components/PaymentAndCart/Payment";
import Footer from "../../Components/NavbarAndFooter/Footer";

export const PaymentAndCartSelling = () => {
  return (
    <Stack>
      {/* Navbar */}
      <Navbar />

      {/* Cart */}
      <CartUI />

      {/* Payment */}
      <Payment />

      <Footer />
    </Stack>
  );
};
