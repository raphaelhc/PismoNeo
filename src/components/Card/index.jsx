/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { ReactComponent as AsteroidIconComponent } from 'assets/asteroid.svg';
import Grid from '@mui/material/Grid';

export default function BasicCard({ children, onSelect, actionButtonLabel }) {
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 200, margin: '0.2rem' }}>
                <CardContent sx={{ display: 'flex', 'justify-content': 'space-between' }}>
                    <div>
                        {children}
                    </div>
                    <div>
                        <AsteroidIconComponent />
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => onSelect()}>{actionButtonLabel}</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}