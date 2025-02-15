import {AppBar, Box, Icon, IconButton, Toolbar, Typography,Stack, Button} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SportsBasketballRoundedIcon from '@mui/icons-material/SportsBasketballRounded';
import homeIcon from "../../homeLogo.png"; // Home logo image
import XIcon from '@mui/icons-material/X'; // X icon
import InstagramIcon from '@mui/icons-material/Instagram'; // Instagram icon
import TwitterIcon from '@mui/icons-material/Twitter'; // Twitter icon


// Navbar Component
export default function Navbar(){
    return(
        <Stack>
            {/* Upper bar */}
            <AppBar position='static' 
                sx={
                    {
                        height: 40, 
                        display: 'flex', 
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        backgroundColor: '#0D2C43'
                        }
                    }>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <EmailIcon sx={{color: '#FF5A3C'}} />
                    <Typography variant='h6' component='span'>
                        info@webmail.com
                    </Typography>

                    <LocationOnRoundedIcon sx={{color: '#FF5A3C', marginLeft: '20px'}}/> {/* Location Icon */}
                    <Typography variant='h6'>
                        15/A, Nest Tower, NYC
                    </Typography>
                </Box>


                <Box gap={2} sx={
                    {
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                        }
                    }>
                    <FacebookRoundedIcon />
                    <TwitterIcon />  {/* X - Twitter Icon */}
                    <InstagramIcon />     {/* Instagram Icon */}

                    <SportsBasketballRoundedIcon /> 

                </Box>
            </AppBar>

            {/* Lower bar */}
            <AppBar color='common.white' position='static'>
                <Toolbar sx={{display: 'flex', justifyContent : 'space-around'}}>
                    <Box sx={{display: 'flex', alignItems: 'baseline'}}>
                    {/* <IconButton size='large'> Icon of the logo Rento Finder
                        <Typography>Hello</Typography>
                    </IconButton> */}
                    <img src={homeIcon} />
                    <Typography variant='h4' sx={{    fontFamily: 'Poor Story'}}>
                        Rentofinder
                    </Typography>
                    </Box>

                    <Box sx={{display: 'flex', gap: '15px'}}>
                        <Typography>Home</Typography>
                        <Typography>About</Typography>
                        <Typography>Property</Typography>
                        <Typography>News</Typography>
                        <Typography>Contact</Typography>
                    </Box>

                    <Box sx={{display: 'flex', gap: '15px'}}>
                        <Button variant='contained' sx={{backgroundColor: '#FF5A3C',}}>Location</Button>
                        <Button variant='outlined' sx={{borderColor: '#FF5A3C', color: '#0C2C41'}}>Log In</Button>
                    </Box>
                    
                </Toolbar>



                
            </AppBar>
        </Stack>
    )
}