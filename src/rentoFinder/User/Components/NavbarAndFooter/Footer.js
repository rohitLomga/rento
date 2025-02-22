import {
  Box,
  Container,
  Stack,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
  List,
  FormControl,
  InputAdornment,
  OutlinedInput,
  InputLabel,
} from "@mui/material";

import homeIcon from "../Images/homeIcon.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X"; // X icon
import TwitterIcon from "@mui/icons-material/Twitter"; // Twitter icon
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // Linked in
import YouTubeIcon from "@mui/icons-material/YouTube"; // Youtube

// Box of each
const StyledBox = styled(Box)({
  border: "1px solid red",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  border: "none",
});

// Bottom leftmost container with rentofinter logo
const FirstRow = styled(Typography)({
  margin: "5px 15px",
});

// Footer css
const FooterTypography = styled(Typography)({
  padding: "10px 0 15px 12px",
  fontWeight: "bold",
});

// Newsleter part
const Newsleter = styled(OutlinedInput)({
  backgroundColor: "white",
  borderRadius: "0",
  fontSize: "16px",
  color: "black",
  paddingRight: 0,
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

// Texts in the form of list under the header
const ListText = styled(Typography)({
  margin: "5px 15px",
});

export default function Footer() {
  return (
    <Stack>
      {/* Footer */}
      <Container
        maxWidth="large"
        sx={{
          display: "flex",
          border: "1px solid red",
          flexDirection: "row",
          backgroundColor: "#171B2A",
          color: "white",
          border: "none",
          padding: "30px 0 0 0",
          mt: "60px",
        }}
      >
        <StyledBox>
          <Box
            sx={{ display: "flex", alignItems: "baseline", marginLeft: "12px" }}
          >
            <img src={homeIcon} />
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Poor Story', cursive",
                fontSize: "36px",
                fontWeight: "lighter",
              }}
            >
              Rentofinder
            </Typography>
          </Box>

          <FirstRow variant="body2" sx={{ mt: "12px" }}>
            Bihar's top choice for room and flat rentals! Find your perfect home
            hassle-free with the largest property listings-all in one place, no
            street roaming required.
          </FirstRow>

          <FirstRow variant="body1">Broklyn, New York, United States</FirstRow>
          <FirstRow variant="body1">+0123-456789</FirstRow>
          <FirstRow variant="body1">hello@gmail.com</FirstRow>

          {/* Icons */}
          <Box
            sx={{
              margin: "10px 0 0 20px",
              display: "flex",
              width: "50%",
              justifyContent: "space-between",
              mb: "20px",
            }}
          >
            {/* Icon style is not working */}
            <FacebookRoundedIcon
              sx={{ color: "white", backgroundColor: "#171B2A" }}
            />{" "}
            {/* Facebook icon */}
            <TwitterIcon /> {/* X - Twitter icon */}
            <LinkedInIcon /> {/* Linked in icon */}
            <YouTubeIcon /> {/* Youtube icon */}
          </Box>
        </StyledBox>

        <StyledBox>
          <FooterTypography variant="h5">Company</FooterTypography>
          <ListText variant="body2">About</ListText>
          <ListText variant="body2">Blog</ListText>
          <ListText variant="body2">All Products</ListText>
          <ListText variant="body2">Location Maps</ListText>
          <ListText variant="body2">FAQ</ListText>
          <ListText variant="body2">Contact us</ListText>
        </StyledBox>

        <StyledBox>
          <FooterTypography variant="h5">Services</FooterTypography>
          <ListText variant="body2">Order Tracking</ListText>
          <ListText variant="body2">Wishlist</ListText>
          <ListText variant="body2">Login</ListText>
          <ListText variant="body2">My account</ListText>
          <ListText variant="body2">Terms & Conditions</ListText>
          <ListText variant="body2">Promotional Offer</ListText>
        </StyledBox>

        <StyledBox>
          <FooterTypography variant="h5">Log In</FooterTypography>
          <ListText variant="body2">My account</ListText>
          <ListText variant="body2">Wishlist</ListText>
          <ListText variant="body2">Order Tracking</ListText>
          <ListText variant="body2">FAQ</ListText>
          <ListText variant="body2">Contact us</ListText>

          {/* <List sx={{ padding: 0 }}>

     

                    </List> */}
        </StyledBox>

        <StyledBox>
          <FooterTypography variant="h5">Newsletter</FooterTypography>
          <Typography variant="body2" sx={{ paddingLeft: "10px" }}>
            Subscribe to our weekly Newsletter and receive updates via email.
          </Typography>

          {/* <TextField variant="outlined" label="Email*" fullWidth /> */}

          <FormControl
            variant="outlined"
            sx={{ m: 1.3, mt: 3, width: "35ch", backgroundColor: "white" }}
          >
            <Newsleter
              placeholder="Email*" // Placeholder
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
                  <TelegramIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </StyledBox>
      </Container>

      {/* Last content of footer */}
      {/* copyright part */}
      <Container
        maxWidth="large"
        sx={{
          height: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#282B38",
          color: "white",
        }}
      >
        <Box>
          <Typography variant="body1">
            All Rights Reserved @ Company 2024
          </Typography>
        </Box>

        <Box
          sx={{
            width: "400px",
            height: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#282B38",
            flexDirection: "row",
          }}
        >
          <Typography variant="body1">Terms & Conditions</Typography>
          <Typography variant="body1">Claim</Typography>
          <Typography variant="body1">Privacy & Policy</Typography>
        </Box>
      </Container>
    </Stack>
  );
}
