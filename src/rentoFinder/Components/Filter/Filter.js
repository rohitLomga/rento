import { Stack, Box, FormGroup, Checkbox, Typography, FormControlLabel} from "@mui/material"

export const Filter = ({label, price}) => {

    return(
        <Stack>
            <Box sx={{
                width: '300px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                p: 0, 
                m: 0
            }}>
                <FormGroup>
                        <FormControlLabel 
                        control={<Checkbox     
                            sx={{
                            '&.Mui-checked': {
                                color: '#FF5A3C', // Checked state color
                            },
                        }} />} 

                        label={label}
                    />
                </FormGroup>

                <Typography variant="body1">{price}</Typography>
            </Box>
        </Stack>
    )
}