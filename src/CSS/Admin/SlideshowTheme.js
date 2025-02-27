export const slideshowTheme = () => ({
  // Dots
  dots: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#fff",
    opacity: 0.75,
  },

  //   Dots Position
  dotsPosition: {
    position: "absolute",
    bottom: "85px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  //   Dots in line
  dotsLine: {
    margin: 0,
    padding: 0,
    display: "flex",
    gap: "0px",
  },

  //   Main Box
  mainBox: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    position: "relative",
    // Override default slick dots styles
    "& .slick-dots li button:before": {
      color: "black !important", // Force black color for dots
      opacity: "0.75 !important", // Force opacity
      fontSize: "10px !important", // Adjust size if needed
    },
    "& .slick-dots li.slick-active button:before": {
      color: "red !important", // Force red color for active dot
      opacity: "1 !important", // Force opacity
    },
  },

  //   Images
  images: { width: "100%", height: "auto" },
});
