import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material";

const steps = ["Pre-booking", "Choose Payment Option", "Payment", "Confirm"];

// Custom Step Icon Component
const CustomStepIcon = styled("div")(({ active, completed }) => ({
  width: 30,
  height: 30,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  color: "white",
  backgroundColor: completed ? "#FF5A3C" : active ? "#FF5A3C" : "gray",
}));

const StepIconComponent = (props) => {
  const { active, completed, icon } = props;
  return (
    <CustomStepIcon active={active ? 1 : 0} completed={completed ? 1 : 0}>
      {completed ? "✔" : icon} {/* Show ✓ when completed */}
    </CustomStepIcon>
  );
};

export default function PaymentStepper() {
  return (
    <Box sx={{ width: "100%", mt: "2rem" }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepIconComponent}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
