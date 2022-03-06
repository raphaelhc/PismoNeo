/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment, memo, useCallback, useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const GridComponent = ({ children, mt }) => {
    const myRef = React.createRef();
    useEffect(() => {
        myRef?.current?.scrollTo(0, 0)
    });

    return (
        <Box sx={{ mt, height: 'calc(100vh - 18rem)', 'overflow-y': 'auto' }}>
            <Grid
                ref={myRef}
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
                sx={{ 'overflow-x': 'hidden', 'overflow-y': 'auto', 'align-content': 'baseline' }}
            >
                {children}
            </Grid>
        </Box>

    )
}

export default memo(GridComponent)
