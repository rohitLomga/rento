import { Box, Stack,Typography } from "@mui/material"
import { Filter } from "../Filter/Filter"
import FilterByPrice from "../FilterByPrice/FilterByPrice"

export const FilterProperty = () => {

    const labelAndPrice = [
        {
            label: "House",
            price: "4,000"
        },
        {
            label: "Single Family",
            price: "4,000"
        },
        {
            label: "Apartment",
            price: "4,000"
        },
        {
            label: "Office Villa",
            price: "4,000"
        },
        {
            label: "Luxury Home",
            price: "4,000"
        },
        {
            label: "Studio",
            price: "4,000"
        }
    ]

    const amenities = [
        {
            label: "Dishwasher",
            price: "5,000"
        },
        {
            label: "Floor Coverings",
            price: "5,000"
        },
        {
            label: "Internet",
            price: "5,000"
        },
        {
            label: "Build Wardrobes",
            price: "5,000"
        },
        {
            label: "Supermarket",
            price: "5,000"
        },
        {
            label: "Kids Zone",
            price: "5,000"
        }
    ]

    // Array of price range
    const priceRange = [
        {
            label: "Low Budget",
            price: "$5,000 - $10,000"
        },
        {
            label: "Medium",
            price: "$10,000 - $30,000"
        },
        {
            label: "High Budget",
            price: "$30,000"
        }
    ]
    return(
        <Stack sx={{
            display: 'inline-block', 
            padding: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            mt: '30px'
            }}>

            {/* Property Type */}
            <Box>
                <Typography variant="h6">Property Type</Typography>
                {labelAndPrice.map((labelsPrices) => (
                    <Filter {...labelsPrices} />
                ))}
            </Box>

            {/* Amenities */}
            <Box>
                <Typography variant="h6" sx={{mt: '20px'}}>Amenities</Typography>
                {amenities.map((labelsPrices) => (
                    <Filter {...labelsPrices} />
                ))}
            </Box>

            {/* Price Range */}
            <Box>
                <Typography variant="h6" sx={{mt: '20px'}}>Price Range</Typography>
                {priceRange.map((labelsPrices) => (
                    <Filter {...labelsPrices} />
                ))}
            </Box>

            {/* Filter by price */}
            <Box>
                <Typography variant="h6" sx={{mt: '20px'}}>Filter By Price</Typography>
                <Filter 
                    label="Your Range"
                    price="$5 - $300"
                />

                {/* Check Later edit the price on */}
                {/* Price value is not defined */}
                <FilterByPrice />

            </Box>

        </Stack>
    )
}