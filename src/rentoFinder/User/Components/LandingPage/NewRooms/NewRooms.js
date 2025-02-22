import { Stack } from "@mui/material"
import { Room } from "../Room/Room"

export const NewRooms = () => {
    return(
        <Stack sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3%',
            margin: 'auto',
            flexDirection: 'row'
        }}>
                  {/* New Rooms */}
            {/* Room 1 */}
           <Room
                tag="Decorate"
                title=" 10 brilliant ways to decorate your home"
            />

            {/* Room 2 */}
            <Room
                tag="Decorate"
                title=" 10 brilliant ways to decorate your home"
            />

            {/* Room 3 */}
            <Room
                tag="Decorate"
                title=" 10 brilliant ways to decorate your home"
            />

        </Stack>
    )
}