/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReactComponent as AsteroidIconComponent } from 'assets/asteroid.svg';
import Grid from '@mui/material/Grid';

// eslint-disable-next-line react/prop-types
export default function BasicCard({ object }) {

    const hasHazardousText = {
        true: { label: "Sim", color: 'error' },
        false: { label: "Não", color: 'default' }
    }

    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 200, margin: '0.2rem' }}>
                <CardContent sx={{ display: 'flex', 'justify-content': 'space-between' }}>
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
                            {Number(object.estimated_diameter.kilometers.estimated_diameter_max).toFixed(3)} km
                        </Typography>
                        <br />
                        <Typography component="span" sx={{ mb: 1.5 }} color="text.secondary">
                            Oferece risco:
                        </Typography>
                        <Typography color={hasHazardousText[object.is_potentially_hazardous_asteroid].color} component="span" sx={{ ml: 1, 'font-weight': '600' }} variant="subtitle2" gutterBottom>
                            {hasHazardousText[object.is_potentially_hazardous_asteroid].label}
                        </Typography>
                    </div>
                    <div>
                        <AsteroidIconComponent />
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small">Mais detalhes</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}