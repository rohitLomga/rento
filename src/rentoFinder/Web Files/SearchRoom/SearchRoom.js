import { Container, Stack, Typography,Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import Navbar from "../../Components/NavbarAndFooter/Navbar"
import { FilterProperty } from "../../Components/FilterProperty/FilterProperty"
import WindowIcon from '@mui/icons-material/Window'; // window icon
export const SearchRoom = () => {
    return(
        <Stack>
            {/* Navbar */}
            <Navbar />

            <Container sx={{margin: 'auto', mt: '50px'}}>

                {/* Filter text and number of results */}
                <Box>
                    <Typography variant="h6">Filters</Typography>
                    <Typography variant="body1">About 9,620 results (0.62 seconds)</Typography>
                </Box>

                <Box>
                    <FilterProperty />
                </Box>
            </Container>

            <Container>

                <Box>
                    <WindowIcon />
                    
                </Box>

            </Container>
        </Stack>
    )
}