const landingtheme = (theme) => ({
  searchButton: {
    mt: "10px",
    marginLeft: "44%",
    backgroundColor: theme.components.Palette.primary.backGround,
    borderRadius: "0",
    padding: "12px 20px",
  },
  componentImg: {
    // position: "relative",
    width: "100%",
    height: "100vh",
    // backgroundImage: `url(${roomImage})`, // Set background image
    backgroundSize: "cover",
    overflow: "hidden",
    zIndex: 1, // Lower zIndex to send the image to the back
    // backgroundPosition: "center",
  },
});
export default landingtheme;
