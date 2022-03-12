import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import React, { memo, Fragment } from 'react';
import Typography from '@mui/material/Typography';
import { ToolbarStyled } from './styles'

const PageBar = ({ pageName, children }) => {
    return (
        <Fragment>
            <div >
                <Paper elevation={3}>
                    <ToolbarStyled variant="dense">
                        {pageName && <Typography color='primary' sx={{ 'fontWeight': '600', 'minWidth': '9rem' }}>
                            {pageName}
                        </Typography>}
                        {children}
                    </ToolbarStyled>
                </Paper>
            </div>
        </Fragment >
    );
}

PageBar.propTypes = {
    pageName: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default memo(PageBar)