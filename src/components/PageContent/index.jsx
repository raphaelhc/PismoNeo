/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react'
import Container from '@mui/material/Container';



const PageContent = ({ children }) => {
    return (
        <Container sx={{ height: '100%', 'overflow-y': 'auto', my: 2 }} maxWidth="lg">
            {children}
        </Container>
    )
}

export default memo(PageContent)
