import { useState } from 'react';
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext'; // Keep this import from @mui/lab
import TabList from '@mui/lab/TabList'; // Keep this import from @mui/lab
import TabPanel from '@mui/lab/TabPanel'; // Keep this import from @mui/lab


import { TwoBhkFlat } from '../Rooms/2BhkFlat'; 
import { Category_4 } from '../Rooms/Category_4'; 
import { SharedRoom } from '../Rooms/SharedRoom'; 
import { SingleRoom } from '../Rooms/SingleRoom';

export default function RoomsTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1'}}>
      <TabContext value={value}>
        <Box sx={{ display: 'flex', justifyContent: 'center',     
          '& .Mui-selected': {
                color: '#FF5A3C'
              },
             }}>
          <TabList 
          onChange={handleChange} 
          aria-label="Room Tabs"
          sx={{
            '& .MuiTab-root': {
              // Styles for all tabs
              transition: 'background-color 0.3s',
            },
            '& .Mui-selected': {
              color: '#FF5A3C'

            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#FF5A3C',  // Change the blue indicator color to your desired color
            },
   
          }}>
            <Tab label="Single Room" value="1" />
            <Tab label="2 BHK Flat" value="2" />
            <Tab label="Shared Room" value="3" />
            <Tab label="Category 4" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1"><SingleRoom /></TabPanel>
        <TabPanel value="2"><TwoBhkFlat /></TabPanel>
        <TabPanel value="3"><SharedRoom /></TabPanel>
        <TabPanel value="4"><Category_4 /></TabPanel>
      </TabContext>
    </Box>
  );
}
