import { useState, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import { PlayCircle, PauseCircle } from "@mui/icons-material";
import video1 from '../../video1.mp4'

export const CustomVideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };


    return (
        <Box
            sx={{
                m: '100px 0',
                width: '100vw', // Full viewport width
                height: '375px', // Fixed height
                marginLeft: 'calc(-50vw + 50%)', // Center the box horizontally
                marginRight: 'calc(-50vw + 50%)', // Center the box horizontally
                overflow: 'hidden', // Hide overflow
                position: 'relative', // Ensure proper positioning
            }}
        >
            {/* Video Element */}
            <video

                style={{
                    width: '100%', // Full width of the container
                    height: '100%', // Full height of the container
                    objectFit: 'cover', // Ensure the video covers the entire area
                }}
                ref={videoRef}
                onClick={handlePlayPause} // Click to play/pause
            >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Custom Play/Pause Button */}
            {!isPlaying && (
                <IconButton
                    onClick={handlePlayPause}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        // backgroundColor: "rgba(0, 0, 0, 0.5)",
                        borderRadius: "50%",
                        p: 1,
                        transition: "opacity 0.3s",
                        // '&:hover': { backgroundColor: "rgba(0, 0, 0, 0.8)" }
                    }}
                >
                    <PlayCircle sx={{ fontSize: 80 }} />
                </IconButton>
            )}
        </Box>
    );
};
