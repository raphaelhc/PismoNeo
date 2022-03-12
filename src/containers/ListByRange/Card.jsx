import React, { memo } from 'react';
import Typography from '@mui/material/Typography';
import Card from 'components/Card'
import PropTypes from 'prop-types';
import { hasHazardousText } from './constant'

const BasicCard = ({ object, onSelectItem }) => {
    return (
        <Card onSelect={() => onSelectItem(object)} actionButtonLabel="Mais detalhes">
            <div>
                <Typography component="span" sx={{ fontSize: 14 }} gutterBottom >
                    Name:
                </Typography>
                <Typography component="span" sx={{ ml: 1, 'fontWeight': '600' }} variant="subtitle2" gutterBottom>
                    {object.name}
                </Typography>
                <br />
                <Typography component="span" sx={{ mb: 1.5 }} color="text.secondary">
                    Diâmetro max:
                </Typography>
                <Typography component="span" sx={{ ml: 1, 'fontWeight': '600' }} variant="subtitle2" gutterBottom>
                    {Number(object?.estimated_diameter?.kilometers?.estimated_diameter_max).toFixed(3)} km
                </Typography>
                <br />
                <Typography component="span" sx={{ mb: 1.5 }} color="text.secondary">
                    Oferece risco:
                </Typography>
                <Typography
                    color={hasHazardousText[object?.is_potentially_hazardous_asteroid].color}
                    component="span" sx={{ ml: 1, 'fontWeight': '600' }} variant="subtitle2" gutterBottom>
                    {hasHazardousText[object?.is_potentially_hazardous_asteroid].label}
                </Typography>
            </div>

        </Card>
    );
}

BasicCard.propTypes = {
    onSelectItem: PropTypes.func.isRequired,
    object: PropTypes.object,
};

export default memo(BasicCard)