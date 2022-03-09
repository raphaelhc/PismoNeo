/* eslint-disable react/prop-types */
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabsButtonForce({ data, onSelect, selectedDay }) {
    const handleChange = (event, newValue) => {
        onSelect(newValue)
    };

    const renderItems = () => data.map((item, key) => <Tab component="p" role="tabItem" label={item.label} value={item.value} key={key} />)

    return (
        <Box sx={{ display: 'flex', 'justifyContent': 'center' }}>
            <Tabs
                value={selectedDay}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
            >
                {renderItems()}
            </Tabs>
        </Box>
    );
}