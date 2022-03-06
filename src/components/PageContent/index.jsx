/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



const PageContent = ({ children, mt }) => {
    return (
        <Container sx={{ mt: mt, height: 'calc(100vh - 13rem)', 'overflow-y': 'auto' }} maxWidth="lg">
            <Box sx={{ mt: mt, height: '100%' }}>
                {children}
            </Box>
        </Container>
    )
}

export default memo(PageContent)
