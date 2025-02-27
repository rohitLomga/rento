import {
  AppBar,
  Box,
  Icon,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SportsBasketballRoundedIcon from "@mui/icons-material/SportsBasketballRounded";
import homeIcon from "../../homeLogo.png"; // Home logo image
import XIcon from "@mui/icons-material/X"; // X icon
import InstagramIcon from "@mui/icons-material/Instagram"; // Instagram icon
import TwitterIcon from "@mui/icons-material/Twitter"; // Twitter icon

// CSS THEME
import { useTheme } from "@mui/material/styles";
import navbartheme from "../../../../CSS/User/NavbarTheme";

// Navbar Component
export default function Navbar() {
  const theme = useTheme();
  const styles = navbartheme(theme);

  return (
    <Stack>
      {/* Upper bar */}
      <AppBar position="static" sx={styles.mainBox}>
        <Box sx={styles.emailAndLocationBox}>
          <EmailIcon sx={styles.iconColor} />
          <Typography variant="h6" component="span">
            info@webmail.com
          </Typography>

          {/* Location Icon */}
          <LocationOnRoundedIcon sx={styles.locationIcon} />

          <Typography variant="h6">15/A, Nest Tower, NYC</Typography>
        </Box>

        <Box gap={2} sx={styles.icons}>
          <FacebookRoundedIcon />
          <TwitterIcon /> {/* X - Twitter Icon */}
          <InstagramIcon /> {/* Instagram Icon */}
          <SportsBasketballRoundedIcon />
        </Box>
      </AppBar>

      {/* Lower bar */}
      <AppBar color="common.white" position="static">
        <Toolbar sx={styles.lowerBar}>
          <Box sx={styles.logoAndText}>
            {/* <IconButton size='large'> Icon of the logo Rento Finder
                        <Typography>Hello</Typography>
                    </IconButton> */}
            <img src={homeIcon} />
            <Typography
              variant="h4"
              sx={{ fontFamily: "'Poor Story', cursive" }}
            >
              Rentofinder
            </Typography>
          </Box>

          <Box sx={styles.middleText}>
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Property</Typography>
            <Typography>News</Typography>
            <Typography>Contact</Typography>
          </Box>

          <Box sx={styles.buttons}>
            <Button variant="contained" sx={styles.locationButton}>
              Location
            </Button>
            <Button variant="outlined" sx={styles.loginButton}>
              Log In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Stack>
  );
}
