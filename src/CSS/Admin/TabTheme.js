export const tabTheme = (theme) => ({
  mainBox: {
    width: "100%",
    border: "1px solid red",
    // textTransform: "capitalize",
  },

  tabBox: {
    display: "flex",
    justifyContent: "center",

    "& .Mui-selected": {
      color: "#282828",
      fontWeight: "bold",
      //   textTransform: "capitalize !important",
    },
  },

  tabList: {
    "& .MuiTab-root": {
      // Styles for all tabs
      transition: "background-color 0.3s",
    },
    "& .Mui-selected": {
      color: "#282828 !important", // Change the text color of the selected tab
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#9C9C9C", // Change the blue indicator color to your desired color
    },
  },
});
