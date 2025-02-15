import { Stack, Typography, Button } from "@mui/material"

export const ButtonAndHeadingText = ({buttonText = "Properties", headingText}) => {
    return(
        <Stack sx={{
            mt: '50px',
        }}>
            
            {/* Text below big Image */}
            {/* Properties text */}
            <Button 
            variant="outlined"
            sx={{
                border: '1.5px solid #000000',
                margin: 'auto',
                padding: '5px 20px',
                bgcolor: '#FCEFE8',
                color: '#FF5A3C',
                borderRadius: '40px',
                textTransform: 'capitalize'
            }}
            >{buttonText}</Button>

            {/* Featured listings text */}
            <Typography
                component="div"
                variant="h4"
                sx={{
                    margin: 'auto',
                    pt: '20px',
                    pb: '20px',
                    fontWeight: 'bolder'
                }}>
                {headingText}
            </Typography>

        </Stack>
    )
}