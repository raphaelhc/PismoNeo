import React, { memo } from 'react'
import PropTypes from 'prop-types';
import { CardStyled, BoxStyled } from './styles'
import Typography from '@mui/material/Typography';


const Placeholder = ({ text, icon: Icon }) => {
    return (
        <BoxStyled>
            <CardStyled>
                {Icon && <div><Icon /></div>}
                <Typography component="span" sx={{ fontSize: 14 }} gutterBottom >
                    {text}
                </Typography>
            </CardStyled>
        </BoxStyled>
    )
}

Placeholder.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object,
};

export default memo(Placeholder)
