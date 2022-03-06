/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { memo, Fragment } from 'react';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from 'components/AppBar'
import PageBar from 'components/PageBar'



const DefaultPage = ({ pageBarContent, children, pageName }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <div>
                <AppBar title='Near Earth Object'></AppBar>
                <PageBar pageName={pageName} pageBarContent={pageBarContent}></PageBar>
            </div>
            <Toolbar />
            <Container maxWidth="md">
                <Box sx={{ mt: 16 }}>
                    {children}
                </Box>
            </Container>
        </React.Fragment >
    );
}

export default memo(DefaultPage)

