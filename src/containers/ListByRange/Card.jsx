/* eslint-disable react/prop-types */
import * as React from 'react';
//import Card from '@mui/material/Card';

import Typography from '@mui/material/Typography';
import Card from 'components/Card'

// eslint-disable-next-line react/prop-types
export default function BasicCard({ object, onSelectItem }) {

    const hasHazardousText = {
        true: { label: "Sim", color: 'error' },
        false: { label: "Não", color: 'default' }
    }
    return (
        <Card onSelect={() => onSelectItem(object)} actionButtonLabel="Mais detalhes">
            <div>
                <Typography component="span" sx={{ fontSize: 14 }} gutterBottom >
                    Name:
                </Typography>
                <Typography component="span" sx={{ ml: 1, 'font-weight': '600' }} variant="subtitle2" gutterBottom>
                    {object.name}
                </Typography>
                <br />
                <Typography component="span" sx={{ mb: 1.5 }} color="text.secondary">
                    Diâmetro max:
                </Typography>
                <Typography component="span" sx={{ ml: 1, 'font-weight': '600' }} variant="subtitle2" gutterBottom>
                    {Number(object?.estimated_diameter?.kilometers?.estimated_diameter_max).toFixed(3)} km
                </Typography>
                <br />
                <Typography component="span" sx={{ mb: 1.5 }} color="text.secondary">
                    Oferece risco:
                </Typography>
                <Typography color={hasHazardousText[object?.is_potentially_hazardous_asteroid].color} component="span" sx={{ ml: 1, 'font-weight': '600' }} variant="subtitle2" gutterBottom>
                    {hasHazardousText[object?.is_potentially_hazardous_asteroid].label}
                </Typography>
            </div>

        </Card>
    );
}