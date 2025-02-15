import { 
    Stack,
    Box,
    Button,
    Typography,
    List,
    ListItem,
    ListItemText
 } from "@mui/material"

 import roomImage from '../../room1.jpg'; // Room image
 import StarBorderIcon from '@mui/icons-material/StarBorder'; // Star Icon
 import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Heart icon (Favorite icon)
 import BedIcon from '@mui/icons-material/Bed'; // Bed Icon
 import BathtubIcon from '@mui/icons-material/Bathtub'; // Bathtub icon
 import CropSquareIcon from '@mui/icons-material/CropSquare'; // Square icon (Change it later)
 import LocationOnIcon from '@mui/icons-material/LocationOn'; // Location icon
 import CameraAltIcon from '@mui/icons-material/CameraAlt'; // Camera icon
 import LocalMoviesIcon from '@mui/icons-material/LocalMovies'; // Movie icon

export const Apartment = ({
    image, 
    noOfPhotos, 
    noOfVideos, 
    location, 
    price, 
    apartmentName, 
    description1, 
    description2, 
    bedrooms, 
    bathrooms, 
    area
}) => {
    return(
        <Stack>
            
            {/* Image container */}
            {/* Apartments to show to the user for booking */}
            <Box 
                sx={{
                    width: '350px',
                    overflow: 'hidden',
                    ml: 0,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Soft shadow effect
                    boxSizing: 'border-box',
                    p: 0
                }}>
                {/* Image */}
                <Box
                    component="img"
                    src={image}
                    sx={{
                        height: '220px',
                        width: '100%',
                    }}
                />

                {/* Rento finder verified text */}
                <Box 
                sx={{
                    display: 'inline-block',
                    padding: '0 10px',
                    backgroundColor: '#77C720',
                    color: 'white',
                    position: 'relative',
                    top: '-210px',
                    left: '140px'

                }}>
                    <List sx={{ listStyleType: 'disc', pl: 2,py: 0  }}>
                        <ListItem sx={{ display: 'list-item', listStyleType: 'disc', p: 0,py: 0 }}>
                        <ListItemText 
                            primary={
                                <Typography variant="body2" sx={{ fontSize: '13px' }}>
                                    RENTOFINDER VERIFIED
                                </Typography>
                                }/>
                        </ListItem>
                    </List>
                </Box>

                {/* Location name with icon inside the image */}
                <Box sx={{
                    display: 'flex', 
                    alignItems: 'center',
                    position: 'relative',
                    top: '-65px',
                    left: '10px',
                    color: 'white'
                }}>
                    <LocationOnIcon />
                    <Typography variant="body2">
                        {location}
                    </Typography>
                </Box>

                {/* Camera icon */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        color: '#EDEEEC',
                        padding: '3px 5px',
                        backgroundColor: '#6F7668',
                        position: 'relative',
                        top: '-93px',
                        left: '250px',
                        width: '32px',
                        borderRadius: '2px'
                        // display: 'inline-block'
                        }}>
                    
                    <CameraAltIcon />
                    <Typography variant="body1">
                        {noOfPhotos}
                    </Typography>
                </Box>

                {/* Movie icon beside the camera icon */}
                <Box 
                sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    color: '#EDEEEC',
                    padding: '3px 5px',
                    backgroundColor: '#6F7668',
                    position: 'relative',
                    top: '-123px',
                    left: '300px',
                    width: '32px',
                    borderRadius: '2px'
                    }}>
                    <LocalMoviesIcon/>
                    <Typography variant="body1">
                        {noOfVideos}
                    </Typography>
                </Box>

                {/* Rating star and wishlist icons just under the image */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0 15px',
                        mt: '-110px'
                    }}>
                    <Box sx={{display: 'flex',color: '#5C727D',  padding: '3px 5px', backgroundColor: '#F2F6F7'}}>
                        {/* Rating with star icon */}
                        <Typography variant="body1" sx={{fontSize: '20px', mt: '-2px'}}>
                            4
                        </Typography>
                        <StarBorderIcon sx={{color: '#5C727D'}}/>

                    </Box>

                    {/* Heart Icon */}
                    <FavoriteBorderIcon sx={{color: '#5C727D', padding: '5px 8px',backgroundColor: '#F2F6F7'}}/>
                </Box>

                {/* Price */}
                <Typography variant="body1" sx={{color: '#FF5A3C', pl: '15px', m: '10px 0'}}>
                    ${price}/Month
                </Typography>

                {/* Name of Apartment */}
                <Typography variant="h6" sx={{pl: '15px'}}>
                    {apartmentName}
                </Typography>

                <Typography variant="body2" sx={{color: '#5C727D',pl: '15px', mt: '20px'}}>
                    {description1}
                </Typography>

                <Typography variant="body2" sx={{color: '#5C727D',pl: '15px', mt: '5px'}}>
                    {description2}
                </Typography>

                {/* Small icons of bed, bathtub and area */}
                <Box sx={{
                    display: 'flex',
                    padding: '0 19px',
                    justifyContent: 'space-between',
                    mt: '20px',
                    mb: '30px',
                    color: '#5C727D'
                }}>

                    {/* Bed Icon */}
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Typography variant="body1" sx={{mt: '0px'}}>{bedrooms}</Typography>
                        {/* <BedIcon />
                        <Typography variant="body1" sx={{display: 'flex', flexDirection: 'column'}}>Bedrooms</Typography> */}

                        <Box sx={{ display: 'flex', flexDirection: 'column',}}>
                            <BedIcon />
                            <List sx={{listStyleType: 'disc', p: 0}}>
                                <ListItem sx={{display: 'list-item', p: 0, ml: '8px'}}>
                                    <ListItemText primary="Bedrooms" sx={{ml: '-8px'}}/>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>

                    {/* Bathtub icon */}
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Typography variant="body1" sx={{mt: '2px'}}>{bathrooms}</Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column',}}>
                            <BathtubIcon />
                            <List sx={{listStyleType: 'disc', p: 0}}>
                                <ListItem sx={{display: 'list-item', p: 0, ml: '8px'}}>
                                    <ListItemText primary="Bathrooms" sx={{ml: '-8px'}}/>
                                </ListItem>
                            </List>
                        </Box>
                        
                    </Box>

                    {/* Area icon */}
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Typography variant="body1" sx={{mt: '1px', mr: '-25px'}}>{area}</Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column',}}>
                            <CropSquareIcon sx={{ml: '25px'}}/>  {/* Area icon (Change it later)*/}
                            <List sx={{listStyleType: 'disc', p: 0}}>
                                <ListItem sx={{display: 'list-item', p: 0, ml: '8px'}}>
                                    <ListItemText primary="Square feet" sx={{ml: '-8px'}}/>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Box>
                    
                {/* More info button */}
                <Button 
                    variant="contained" 
                    fullWidth
                    sx={{
                        borderRadius: 0,
                        backgroundColor: '#FF5A3C',
                        padding: '10px 0',
                        mt: '10px'
                    }}>More info</Button>
                
            </Box>
        </Stack>
    )
}