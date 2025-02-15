import {
    Box,
    Button,
    MenuItem,
    Stack,
    TextField,
    Typography,
    Container,
 } from "@mui/material"

import Navbar from "../../Components/NavbarAndFooter/Navbar" // Navbar
import roomImage from "../../room1.jpg" // Image
import RoomsTabs from "../../Components/Tabs/RoomTabs" // Tabs
import styled from "@emotion/styled"
import { NearbyListings } from "../../Components/Rooms/NearbyListings"
import { CustomVideoPlayer } from "../../Components/Video/RoomVideo"
import { ButtonAndHeadingText } from "../../Components/ButtonAndHeadingText/ButtonAndHeadingText"
import { NewRooms } from "../../Components/NewRooms/NewRooms"
import Footer from "../../Components/NavbarAndFooter/Footer" // Footer Component

const SelectTextField = styled(TextField)({

        width: '20%',
        '&:hover .MuiInputLabel-root': {
            color: '#FF5A3C', // Label color on hover over the TextField area
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: '#FF5A3C', // Outline color on hover
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FF5A3C', // Outline color when focused
            },
        },
        '& .MuiInputLabel-root': {
            '&.Mui-focused': {
                color: '#FF5A3C', // Label color when focused
            },
        },

})

// Function of Landing Page
export const LandingPage = () => {
    return(
        <Stack>
            <Navbar />

            <Box>
                <Box
                    component="img"
                    sx={{
                        // position: "relative",
                        width: "100%",
                        height: "100vh",
                        backgroundImage: `url(${roomImage})`, // Set background image
                        backgroundSize: "cover",
                        overflow: 'hidden',
                        zIndex: 1, // Lower zIndex to send the image to the back
                        // backgroundPosition: "center",
                    }}
                    // src={roomImage}

                    />

                    {/* Text inside Image */}
                    <Typography variant="h3" 
                        sx={{
                            width: '520px',
                            textAlign: 'center',
                            margin: 'auto',
                            mt: '-550px',
                            mb: '10px',
                            fontWeight: '1000',
                            color: 'white',
                            textShadow: '2px 2px 5px #FF5A3C'
                        }}>
                        Locate a room that meets your needs.
                    </Typography>

                    <Typography variant="body1" 
                            sx={{
                            width: '550px',
                            textAlign: 'center',
                            margin: 'auto',
                            color: 'white'
                        }}>
                        We are Bihar's #1 platform for renting rooms and flats! With the largest network of property listings, we make it easy to find your perfect rental - no more wandering streets or dealing with local agents. Enjoy a hassle-free experience and find exactly what you need, all in one place!
                    </Typography>

                    
                    <Typography variant="body1" 
                            sx={{
                            width: '550px',
                            textAlign: 'center',
                            margin: 'auto',
                            color: 'white'
                        }}>
                    all in one place!
                    </Typography>

                    {/* Button on the image (Start searching button) */}
                    <Button 
                        variant="contained"
                        sx={{
                            mt: '10px',
                            marginLeft: '44%',
                            backgroundColor: '#FF5A3C',
                            borderRadius: '0',
                            padding: '12px 20px'
                        }}>
                        Start Searching!
                    </Button>

                    {/* Container of the choosing options */}
                    <Container 
                        sx={{
                            // border: '1px solid red',
                            margin: 'auto',
                            width : '80%',
                            // height: '200px',
                            mt: '193px',
                            padding: '0px',
                            display: 'flex',
                            // gap: '30px',
                            padding: '25px',
                            justifyContent: 'space-evenly',
                            boxShadow: '0px 2px 3px #999db2',
                            zIndex: 2, // Higher zIndex to bring the container to the front
                            position: 'relative',
                            backgroundColor: 'white'
                        }}>

                        {/* First select field */}
                        {/* Select field of Area */}
                        <SelectTextField
                            select
                            label = "Choose Area"
                            // fullWidth
                            sx={{
                                width: '20%'
                            }}
                            >

                            {area.map((option, index) => (
                                <MenuItem key={index} value={option.value}>{option.value}</MenuItem>
                            ))}

                            </SelectTextField>

                            <SelectTextField 
                                select
                                label = "Property Status"
                            >
                                {propertyStatus.map((status) => (
                                    <MenuItem value={status.value}>{status.value}</MenuItem>
                                ))}

                            </SelectTextField>

                            {/* Dropdown of propery type */}
                            <SelectTextField 
                                select
                                label = "Property Type"
                                // fullWidth
                                
                            >
                                {propertyType.map((type) => (
                                    <MenuItem value={type.value}>{type.value}</MenuItem>
                                ))}
                            </SelectTextField>

                            {/* Button of Book Now */}
                            <Button variant="outlined"
                                sx={{
                                    borderColor: '#FF5A3C', color: '#FF5A3C', borderRadius: 0
                                }}>
                                Book Now
                            </Button>

                            {/*  Button of Current Location*/}
                            <Button variant="contained"
                                sx={{
                                    backgroundColor: '#FF5A3C', borderRadius : 0
                                }}>
                                Current Location
                            </Button>
                      
                    </Container>
            </Box>

            {/* Button and Heading text */}
            {/* Featured Listings */}
            <ButtonAndHeadingText
                headingText="Featured Listings"
            />

            {/* Apartments */}
            <RoomsTabs />
            
            {/* Nearby Listings with button */}
            <ButtonAndHeadingText
                headingText="Nearby Listings"
            />

            {/* Rooms of nearby */}
            <NearbyListings />

            {/* Video */}
            <CustomVideoPlayer />

            {/* New and blogs */}
            <ButtonAndHeadingText
                buttonText="New and blogs"
                headingText="Latest New Feeds"
            />

            {/* New Rooms */}
            <NewRooms />

            {/* Footer */}
            <Footer />
        </Stack>
    )
}

// Array of area
const area = [
    {
        value: 'Your area 1',
    },
    {
        value: 'Your area 2'
    }
]

// Array of property type
const propertyType = [
    {
        value: 'Available'
    },
    {
        value: 'Rented'
    }
]

// Area of Property Status
const propertyStatus = [
    {
        value: 'Status 1'
    },
    {
        value: 'Status 2'
    }
]
