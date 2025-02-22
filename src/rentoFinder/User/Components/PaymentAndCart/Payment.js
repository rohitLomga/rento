import {
  Container,
  Stack,
  TextField,
  Typography,
  Box,
  Button,
  styled,
} from "@mui/material";
import React from "react";
import { Title } from "../ProductDetails/Title/Title";
import PaymentStepper from "./Stepper";
import PlaceIcon from "@mui/icons-material/Place"; // Locaiton icon

// ICONS
import visa from "./Images/visa.png"; // Visa icon
import creditcard from "./Images/creditcard.png"; // Credit card icon
import mastercard from "./Images/mastercard.png"; // Master card icon
import googlePay from "./Images/google-pay.png"; // Google Pay icon
import bank from "./Images/bank.png"; // Bank icon
import phonepe from "./Images/phonepe.png"; // PhonePe icon

// CSS of Icons
const PaymentOption = styled(Box)({
  padding: "5px 1.5rem",
  borderRadius: "12px",
  backgroundColor: "#E2E0E0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

// Css of Textfield
const InputField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#FF5A3C",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF5A3C",
    },
  },
});

export const Payment = () => {
  return (
    <Stack>
      <Container sx={{ width: "50vw", mb: "10%" }}>
        {/* Title */}
        <Title title="Payment" />

        {/* Payment Stepper */}
        <PaymentStepper />

        <Box sx={{ width: "84.5%", ml: "3.1rem" }}>
          {/* // TODO : Change the icons of payment options */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: "2rem 0",
            }}
          >
            <PaymentOption>
              {/* <PlaceIcon /> */}
              <Box component="img" src={mastercard} />
            </PaymentOption>

            <PaymentOption>
              {/* <PlaceIcon /> */}
              <Box component="img" src={creditcard} />
            </PaymentOption>

            <PaymentOption>
              {/* <PlaceIcon /> */}
              <Box component="img" src={visa} />
            </PaymentOption>

            <PaymentOption>
              {/* <PlaceIcon /> */}
              <Box component="img" src={googlePay} />
            </PaymentOption>

            <PaymentOption>
              {/* <PlaceIcon /> */}
              <Box component="img" src={phonepe} />
            </PaymentOption>

            <PaymentOption>
              {/* <PlaceIcon /> */}
              <Box component="img" src={bank} />
            </PaymentOption>
          </Box>

          {/* Card Holder name */}
          <Box>
            <Typography variant="h6">Cardholder Name</Typography>
            <InputField
              variant="outlined"
              placeholder="John Simson"
              fullWidth
            />
          </Box>

          {/* Card Details */}
          <Box
            sx={{
              display: "flex",
              //   justifyContent: "space-evenly",
              width: "106.5%",
              mt: "1rem",
            }}
          >
            {/* Card Number */}
            <Box sx={{ mr: "2rem" }}>
              <Typography variant="h6">Card Number</Typography>
              <InputField
                variant="outlined"
                placeholder="1245-2564-2562-9657"
                fullWidth
                sx={{ width: "350px" }}
              />
            </Box>

            {/* Date */}
            <Box>
              <Typography variant="h6">Date</Typography>
              <InputField
                variant="outlined"
                placeholder="10/2025"
                sx={{ width: "70%" }}
              />
            </Box>

            {/* CVV */}
            <Box>
              <Typography variant="h6">CVV</Typography>
              <InputField
                variant="outlined"
                placeholder="010"
                sx={{ width: "70%" }}
              />
            </Box>
          </Box>

          {/* //! Checkbox is not added */}

          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              mt: "3rem",
            }}
          >
            <Button
              variant="contained"
              sx={{
                margin: "auto",
                backgroundColor: "#FF5A3C",
                padding: "8px 8rem",
                textTransform: "capitalize",
              }}
            >
              Pay Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};
