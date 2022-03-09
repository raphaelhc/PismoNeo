import * as React from 'react';
import PropTypes from 'prop-types';
import { CardStyled, CardContentStyled } from './styles';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { ReactComponent as AsteroidIconComponent } from 'assets/asteroid.svg';
import Grid from '@mui/material/Grid';

const BasicCard = ({ children, onSelect, actionButtonLabel }) => {
    return (
        <Grid item xs={2} sm={4} md={4}>
            <CardStyled>
                <CardContentStyled>
                    <div>
                        {children}
                    </div>
                    <div>
                        <AsteroidIconComponent />
                    </div>
                </CardContentStyled>
                <CardActions>
                    <Button size="small" role="cardActionButton" onClick={() => onSelect()}>{actionButtonLabel}</Button>
                </CardActions>
            </CardStyled>
        </Grid>
    );
}

BasicCard.propTypes = {
    children: PropTypes.node,
    onSelect: PropTypes.func,
    actionButtonLabel: PropTypes.string
};

export default BasicCard