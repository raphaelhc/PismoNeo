/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react'
import Cardt from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Placeholder = ({ text, icon: Icon }) => {
    return (
        <Box sx={{ height: '100%', display: 'flex' }}>
            <Cardt sx={{ 'margin-top': 'auto', 'margin-bottom': 'auto', 'margin-left': 'auto', 'margin-right': 'auto', py: 10, px: 5, color: 'darkgray', 'text-align': 'center' }}>
                {Icon && <div><Icon /></div>}
                <Typography component="span" sx={{ fontSize: 14 }} gutterBottom >
                    {text}
                </Typography>
            </Cardt>
        </Box>
    )
}

export default memo(Placeholder)
