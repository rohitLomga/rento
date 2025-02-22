import {
  Stack,
  Box,
  MenuItem,
  TextField,
  InputAdornment,
  OutlinedInput,
  styled,
} from "@mui/material";

import WindowIcon from "@mui/icons-material/Window"; // window icon
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"; // List icon
import SearchIcon from "@mui/icons-material/Search"; // Search icon
import { Rooms } from "../FilterRoom/Rooms";

// Style of search bar
const SearchInput = styled(OutlinedInput)({
  backgroundColor: "white",
  borderRadius: "0",
  fontSize: "16px",
  color: "black",
  paddingRight: 0,
  width: "96.5%",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FF5A3C", // Outline color
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FF5A3C", // Outline on hover
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FF5A3C", // Outline when focused
  },
});

// Style of select textfield
const SelectTextField = styled(TextField)({
  width: "40%",
  "&:hover .MuiInputLabel-root": {
    color: "#FF5A3C", // Label color on hover over the TextField area
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#FF5A3C", // Outline color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF5A3C", // Outline color when focused
    },
  },
  "& .MuiInputLabel-root": {
    "&.Mui-focused": {
      color: "#FF5A3C", // Label color when focused
    },
  },
});

// --------------------------------- End of the style -----------------------------------

export const SearchBar = () => {
  return (
    <Stack>
      {/* Select textfield and icons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: "50px",
          gap: "10px",
          mb: "20px",
        }}
      >
        <WindowIcon sx={{ width: "30px", height: "30px", color: "#FF5A3C" }} />
        <FormatListBulletedIcon
          sx={{ width: "30px", height: "30px", color: "#5C727D" }}
        />

        {/*Select field of Default setting */}
        <SelectTextField select defaultValue="Default Setting" size="small">
          <MenuItem value="Default Setting">Default Setting</MenuItem>
        </SelectTextField>

        {/* Per page */}
        <SelectTextField select defaultValue="Default Setting" size="small">
          <MenuItem value="per page 10">per page 10</MenuItem>
        </SelectTextField>
      </Box>

      {/* Search keyword with icon  */}
      <SearchInput
        placeholder="Search your keyword"
        endAdornment={
          <InputAdornment
            position="end"
            sx={{
              marginRight: 0, // Remove adornment margin
              "& .MuiSvgIcon-root": {
                padding: "16px",
                color: "white",
                backgroundColor: "#FF5A3C",
              },
            }}
          >
            <SearchIcon />
          </InputAdornment>
        }
      />
      {/* ------------------------------------------------------------------------------------------- */}

      {/* Rooms for rent */}
      <Rooms />
    </Stack>
  );
};
