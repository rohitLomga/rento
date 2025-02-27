const propertyattributetheme = (theme) => ({
  containerBox: {
    // mt: "-40rem",
    // ml: "20%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
    width: "100%",
    gap: "1rem",
    // alignItems: "center",
    padding: "1rem",
    // border: "1px solid red",
    flexShrink: 1,
  },

  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
    pl: "1rem",
    flexShrink: 1,
  },

  propetyListText: {
    mr: "5rem",
  },

  //   ! This is not working
  //   ? This the outline color of the search bar
  outlineColor: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        backgroundColor: "#E6E6ED",
      },
      "&:hover fieldset": {
        borderColor: "red",
      },
    },
  },

  //   Add New Button
  AddNewButton: {
    backgroundColor: theme.components.Palette.primary.adminButton,
    textTransform: "capitalize",
  },

  //   Icon on the search bar
  icon: {
    color: theme.components.Palette.primary.adminButton,
    backgroundColor: theme.components.Palette.primary.white,
    borderRadius: "50%",
    padding: "5px",
  },
});

export default propertyattributetheme;
