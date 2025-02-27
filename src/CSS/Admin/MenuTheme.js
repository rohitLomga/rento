const menutheme = (theme) => ({
  mainMenuBox: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
  },

  longBar: {
    width: "100%",
    height: "60px",
    backgroundColor: theme.components.Palette.primary.adminMenu,
  },
  listItemMenu: {
    width: "20%",
    backgroundColor: theme.components.Palette.primary.adminMenu,
    display: "flex",
    // height: "100vh",
    // padding: "1rem",
  },
  adminLogo: {
    display: "flex",
    color: "white",
    // justifyContent: "center",
    height: "28px",
    mt: "1rem",
    ml: "1.5rem",
  },
  rentoFinderLogoText: {
    mt: "3px",
  },
  adminLogoText: {
    mt: "-8px",
    ml: "80px",
  },
  listTextBox: {
    width: "100%",
    color: theme.components.Palette.primary.white,
    mt: "30%",
  },
  selectedList: {
    backgroundColor: theme.components.Palette.primary.selectedListBackground,
    color: "#000000",
    pl: "2rem",
    // margin: 0,
  },
  spacingList: { pl: "2rem" },

  lowerList: { mt: "63%", pl: "2rem" },

  profileButtonBox: { p: "1rem" },

  profileButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.components.Palette.primary.rentoFinderColorTheme,
    padding: "10px",
    borderRadius: "10px",
    color: theme.components.Palette.primary.white,
    cursor: "pointer",
  },
});

export default menutheme;
