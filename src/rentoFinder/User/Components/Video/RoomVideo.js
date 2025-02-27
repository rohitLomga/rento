import { useState, useRef } from "react";
import { Box, IconButton, CircularProgress, Typography } from "@mui/material";
import { PlayCircle, ErrorOutline } from "@mui/icons-material";
// import video1 from "../../video1.mp4";
import video1 from "../../video.mp4";

export const Video = ({ video = video1, height }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error attempting to play video:", error);
            setError("Failed to play video. Please try again."); // Set error message
          });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoLoaded = () => {
    setIsLoading(false); // Video has loaded, stop loading
    setError(null); // Clear any previous errors
  };

  const handleVideoError = () => {
    setIsLoading(false); // Stop loading
    setError("Failed to load video. Please check the URL or your connection."); // Set error message
  };

  return (
    <Box
      sx={{
        // m: "100px 0",
        width: "100%", // Full viewport width
        height: height ? height : "375px", // Fixed height
        marginRight: "calc(-50vw + 50%)", // Center the box horizontally
        overflow: "hidden", // Hide overflow
        position: "relative", // Ensure proper positioning
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black", // Background for loading/error states
      }}
    >
      {/* Video Element */}
      <video
        style={{
          width: "100%", // Full width of the container
          height: "100%", // Full height of the container
          objectFit: "cover", // Ensure the video covers the entire area
          display: isLoading || error ? "none" : "block", // Hide video if loading or error
        }}
        ref={videoRef}
        onClick={handlePlayPause} // Click to play/pause
        onLoadedData={handleVideoLoaded} // Triggered when video is loaded
        onError={handleVideoError} // Triggered if video fails to load
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Loading Spinner (Shown when loading or error) */}
      {(isLoading || error) && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
          }}
        >
          <CircularProgress sx={{ color: "white", mb: 2 }} /> {/* Spinner */}
          {error && ( // Error message (only shown if there's an error)
            <>
              <ErrorOutline sx={{ fontSize: 60, mb: 1 }} />
              <Typography variant="body1">{error}</Typography>
            </>
          )}
        </Box>
      )}

      {/* Custom Play/Pause Button */}
      {!isPlaying && !isLoading && !error && (
        <IconButton
          onClick={handlePlayPause}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            borderRadius: "50%",
            p: 1,
            transition: "opacity 0.3s",
          }}
        >
          <PlayCircle sx={{ fontSize: 80 }} />
        </IconButton>
      )}
    </Box>
  );
};
