import { 
    Stack,
    Box,
    Typography,
    Divider
 } from "@mui/material"

 import roomImage from '../../room1.jpg'; // Room image
import PersonIcon from '@mui/icons-material/Person'; // Profile icon (Person icon)
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; // Tag icon
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Calender icon


export const Room = ({
    image = roomImage, 
    tag,
    title,
    date = "February 12, 2025",
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
                    boxSizing: 'border-box',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Soft shadow effect
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

           

                {/* Rating star and wishlist icons just under the image */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        // padding: '0 15px',
                        width: '93%',
                        margin: 'auto',
                        mt: '12px'
                    }}>
                    <Box sx={{display: 'flex',gap: '3px', padding: '3px 0'}}>
                        {/* Rating with star icon */}
                        <PersonIcon sx={{color: '#FF5A3C'}}/>
                        <Typography variant="body1" sx={{fontSize: '16px'}}>
                            By: Admin
                        </Typography>

                    </Box>

                    <Box sx={{display: 'flex',alignItems: 'center',gap: '5px', padding: '3px 5px'}}>
                        {/* Rating with star icon */}
                        <LocalOfferIcon sx={{color: '#FF5A3C'}}/>
                        <Typography variant="body1" sx={{fontSize: '16px', textTransform: 'capitalize'}}>
                            {tag}
                        </Typography>

                    </Box>
                </Box>

                {/* Name of Apartment */}
                <Box sx={{width: '93%', margin: 'auto', }}>
                    <Typography 
                        variant="h6" 
                        sx={{
                            width: '70%',
                            m: '15px 0',
                            textTransform: 'capitalize',
                            fontWeight: 600}}>
                        {title}
                    </Typography>
                </Box>

                <Divider
                    sx={{
                        width: '85%', // Set the width to 50% of the parent container
                        borderBottomWidth: 1, // Optional: Adjust the thickness of the divider
                        borderColor: '#5C727D',
                        margin: 'auto',
                        my: 4, // Add margin on top and bottom for spacing
                      }}
                    />

                    {/* Date with calender and read more text */}
                    <Box sx={{
                        width: '93%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: 'auto',
                        mb: '20px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                        }}>
                            <CalendarTodayIcon sx={{color: '#FF5A3C'}}/>
                            <Typography variant="body1">
                                {date}
                            </Typography>
                        </Box>

                        <Typography variant="body1" sx={{color: '#FF5A3C'}}>READ MORE</Typography>
                    </Box>
            </Box>
        </Stack>
    )
}