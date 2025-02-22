import {
  Stack,
  ImageListItem,
  ListItemText,
  ListItem,
  ListItemIcon,
  Typography,
  Box,
  Button,
} from "@mui/material";

import image1 from "../../../room3.jpg"; // Image of room
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"; // Dot icon
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // Heart icon
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Location icon

// * Room component of filter room
export const RentAndSellRoom = ({
  roomImage = image1,
  title,
  location,
  price,
  width,
  bedroom = 3,
  bathroom = 3,
  area = 1234,
  btn = false,
  btnText,
}) => {
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          mt: "0px",
          display: "inline-block",
          width: width ? width : "350px", // Condition because there is different size on one page
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", // Soft shadow effect
        }}
      >
        {/* Image */}
        <ImageListItem>
          <img
            src={roomImage}
            alt="room"
            style={{ width: "100%", height: "240px" }}
          />
        </ImageListItem>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            mt: "10px",
          }}
        >
          {/* Text under the image with dot */}
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="5px" sx={{ color: "#FF5A3C" }} />
            </ListItemIcon>
            <ListItemText
              primary="FOR RENT"
              sx={{ ml: "-30px", color: "#FF5A3C" }}
            />
          </ListItem>

          {/* Heart icon */}
          <FavoriteBorderIcon
            sx={{
              color: "#5C727D",
              p: "10px",
              backgroundColor: "#F2F6F7",
              mr: "10px",
            }}
          />
        </Box>

        {/* Details of apartment written under the image */}
        <Box
          sx={{
            padding: "15px",
            display: "flex",
            gap: "15px",
            flexDirection: "column",
          }}
        >
          {/* Title of the apartment */}
          <Typography variant="h6" sx={{ fontWeight: "600", fontSize: "22px" }}>
            {title}
          </Typography>

          {/* Location with location icon */}
          <Box sx={{ display: "flex" }}>
            <LocationOnIcon sx={{ color: "#FF5A3C" }} />
            <Typography
              variant="body1"
              sx={{
                mt: "3px",
                color: "#5C727D",
              }}
            >
              {location}
            </Typography>
          </Box>

          {/* Details of the apartmenet */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "#5C727D",
            }}
          >
            <Typography variant="body2">{bedroom} Bedrooms</Typography>
            <Typography variant="body2">{bathroom} Bathrooms</Typography>
            <Typography variant="body2">{area} square ft</Typography>
          </Box>

          {/* Price */}
          <Typography
            variant="h6"
            sx={{ fontWeight: "600", fontSize: "22px", color: "#FF5A3C" }}
          >
            $ {price} / Month
          </Typography>
        </Box>

        {/* Button */}
        {btn ? (
          <Button
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 0,
              backgroundColor: "#FF5A3C",
              textTransform: "capitalize",
            }}
          >
            {btnText}
          </Button>
        ) : (
          ""
        )}
      </Box>
    </Stack>
  );
};
