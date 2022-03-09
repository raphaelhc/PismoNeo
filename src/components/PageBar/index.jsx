/* eslint-disable react/prop-types */
import Paper from '@mui/material/Paper';
import React, { memo, Fragment } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import { default as Bar } from '@mui/material/AppBar';

const PageBar = ({ pageName, children }) => {
    return (
        <Fragment>
            <div >
                <Paper elevation={3}>
                    <Toolbar variant="dense" sx={{
                        boxShadow: 1, display: 'flex',
                        justifyContent: 'space-between', color: 'black', 'padding-top': '1rem', 'padding-bottom': '1rem'
                    }}>
                        <Typography color='primary' sx={{ 'font-weight': '600', 'min-width': '9rem' }}>{pageName}</Typography>
                        {children}
                    </Toolbar>
                </Paper>
            </div>
        </Fragment >
    );
}

export default memo(PageBar)