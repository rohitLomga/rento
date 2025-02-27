import { BorderColor } from "@mui/icons-material";

const navbartheme = (theme) => ({
  mainBox: {
    height: 40,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: theme.components.Palette.primary.blueBackground,
  },

  emailAndLocationBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  iconColor: {
    color: theme.components.Palette.primary.rentoFinderColorTheme,
  },

  locationIcon: {
    color: theme.components.Palette.primary.rentoFinderColorTheme,
    marginLeft: "20px",
  },

  icons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  lowerBar: {
    display: "flex",
    justifyContent: "space-around",
  },

  logoAndText: {
    display: "flex",
    alignItems: "baseline",
  },

  middleText: {
    display: "flex",
    gap: "15px",
  },

  buttons: {
    display: "flex",
    gap: "15px",
  },

  locationButton: {
    backgroundColor: theme.components.Palette.primary.rentoFinderColorTheme,
  },

  loginButton: {
    borderColor: theme.components.Palette.primary.rentoFinderColorTheme,
    color: theme.components.Palette.primary.blueText,
  },
});

export default navbartheme;
