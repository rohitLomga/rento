const menutheme = (theme) => ({
  mainMenuBox: {
    display: "flex",
    // flexDirection: "row-reverse",
    width: "18%",
    flexShrink: 1,
    position: "fixed",
    zIndex: 12,
  },

  longBar: {
    position: "fixed",
    zIndex: 10,
    width: "100%",
    height: "60px",
    overflow: "hidden",
    backgroundColor: theme.components.Palette.primary.adminMenu,
  },

  listItemMenu: {
    width: "100%",
    backgroundColor: theme.components.Palette.primary.adminMenu,
    display: "flex",
    flexShrink: 1,
    // height: "100vh",
    // padding: "1rem",
  },
  adminLogo: {
    display: "flex",
    color: "white",
    // justifyContent: "center",
    height: "28px",
    mt: "2rem",
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

  // Menu Item
  menuItem: { pl: "3rem" },
});

export default menutheme;
