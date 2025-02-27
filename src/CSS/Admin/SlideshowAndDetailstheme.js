const slideshowAndDetailsTheme = (theme) => ({
  mainBox: {
    // border: "1px solid red",
    width: "400px",
    // height: "600px",
    padding: "1rem",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  },

  slideshowBox: {
    // border: "1px solid red",
    width: "100%",
    height: "200px",
    mb: "1rem",
    borderRadius: "10px",
    overflow: "hidden",
    posititon: "relative",
  },

  closeIcon: {
    position: "absolute",
    zIndex: 3,
    mt: "7px",
    ml: "7px",
    backgroundColor: "#3D3D4E",
    padding: "5px",
    color: "white",
    borderRadius: "50%",
    cursor: "pointer",
  },
});

export default slideshowAndDetailsTheme;
