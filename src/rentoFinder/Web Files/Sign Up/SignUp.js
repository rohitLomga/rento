import {
    Box,
    Container,
    Stack,
    TextField,
    Typography,
    styled,
    Checkbox,
    FormControlLabel,
    Button,

 } from "@mui/material"

import Navbar from "../../Components/NavbarAndFooter/Navbar";
import Footer from "../../Components/NavbarAndFooter/Footer";


// Input field
const StyledTextField = styled(TextField)({
    display: 'flex',
    // flexDirection: 'column',
    marginTop: '30px',
    width: '100%',
    borderColor: 'green',

    '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'gray', // Default outline color
            },
            '&:hover fieldset': {
                color: 'gray',
                borderColor: '#FF5A3C', // Outline color on hover
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FF5A3C', // Outline color when focused
            },
            '&:hover .MuiInputLabel-root': {
                color: 'gray', // Label color
            },
        },
        '& .MuiInputBase-input': {
        color: 'gray', // Default text color
    },
    '& .MuiInputLabel-root': {
        color: 'gray', // Label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#FF5A3C', // Label color when focused
    },
})

// Sign Up Function
export const SignUp = () => {
    return(
        <Stack>
            <Navbar />
            
            <Container maxWidth='sm' sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '60px' }}>
                <Typography variant="h4">Register </Typography>
                <Typography variant="h4">your Account</Typography>
                <Typography variant="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Typography>
                <Typography>Sit aliquid, Non distinctio vel iste</Typography>

                <Box sx={{marginTop: '10px', width: '75%'}}>
                    <StyledTextField variant="outlined" label="First Name" fullWidth />
                    <StyledTextField variant="outlined" label="Last Name" fullWidth/>
                    <StyledTextField variant="outlined" label="Email" fullWidth/>
                    <StyledTextField variant="outlined" label="Contact" fullWidth />
                    
                    {/* Checkbox Consent */}
                    <FormControlLabel 
                        control={<Checkbox     
                            sx={{
                            '&.Mui-checked': {
                                color: '#FF5A3C', // Checked state color
                            },

                            marginTop: '-10px'
                        }} />} 

                        label="I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy." 

                        sx={{
                            margin: '10px 0',
                            alignItems: 'flex-start', // Align the checkbox at the start of the label
                            '& .MuiTypography-root': {
                                fontSize: '14px',
                                lineHeight: 1.5,
                                // marginTop: '4px'
                            },
                        }}
                    />

                    {/* Agree privacy policy checkbox  */}
                    <FormControlLabel 
                        control={<Checkbox     
                            sx={{
                            '&.Mui-checked': {
                                color: '#FF5A3C', // Checked state color
                            },

                            marginTop: '-10px'
                        }} />} 

                        label='By clicking "create account", I consent to the privacy and policy' 

                        sx={{
                            margin: '0 0 10px 0',
                            alignItems: 'flex-start', // Align the checkbox at the start of the label
                            '& .MuiTypography-root': {
                                fontSize: '14px',
                                lineHeight: 1.5,
                                // marginTop: '4px'
                            },
                        }}
                    />
                </Box>
                {/* create account button */}
                <Button variant='contained' sx={{backgroundColor: '#FF5A3C',padding: '10px 30px'}}>CREATE ACCOUNT</Button>

                <Typography variant="body2" sx={{margin: '20px 0'}}>By creating an account, you agree to our :</Typography>
                <Typography variant="body2">TERMS OF CONDITIONS | PRIVACY POLICY</Typography>
                <Typography variant="body2" sx={{margin: '20px 0'}}>ALREADY HAVE AN ACCOUNT?</Typography>

            </Container>
            
            {/* Footer Component */}
            <Footer />
            
        </Stack>
    )
}