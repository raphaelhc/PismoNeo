import React, { memo } from 'react'
import PropTypes from 'prop-types';
import { CardStyled } from './styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Placeholder = ({ text, icon: Icon }) => {
    return (
        <Box sx={{ height: '100%', display: 'flex' }}>
            <CardStyled>
                {Icon && <div><Icon /></div>}
                <Typography component="span" sx={{ fontSize: 14 }} gutterBottom >
                    {text}
                </Typography>
            </CardStyled>
        </Box>
    )
}

Placeholder.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object,
};

export default memo(Placeholder)
