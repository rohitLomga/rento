import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

{
  /* Check Later edit the price on */
}
{
  /* Price value is not defined */
}

function valuetext(value) {
  return `${value}°C`;
}

export default function FilterByPrice() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 280, m: "auto" }}>
      <Slider
        // getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{ color: "#FF5A3C" }}
      />
    </Box>
  );
}
