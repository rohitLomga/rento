export const textfieldPropsTheme = (theme) => ({
  textFieldGap: {
    mb: "1rem",

    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: theme.components.Palette.primary.rentoFinderColorTheme, // Outline color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.components.Palette.primary.rentoFinderColorTheme, // Outline color when focused
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.components.Palette.primary.rentoFinderColorTheme, // Label color when focused
    },
  },

  basicDetailsBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flexShrink: 1,
  },

  editButton: {
    backgroundColor: theme.components.Palette.primary.rentoFinderColorTheme,
    p: "5px 2rem",
    textTransform: "capitalize",
    alignSelf: "flex-end",
    borderRadius: 0,
  },

  // Approved seller buttons
  approvedSellerBtn: {
    backgroundColor: theme.components.Palette.primary.rentoFinderColorTheme,
    // p: "5px 1rem",
    width: "100px",
    textTransform: "capitalize",
    borderRadius: 0,
  },

  // Button Box
  buttonBox: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
});
