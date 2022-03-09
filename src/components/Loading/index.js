import React from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';


const Loading = () => {
  return (
    <Box sx={{ 'align-items': 'center', 'display': 'flex', 'height': '100vh', 'justify-content': 'center', 'width': '100%', 'position': 'absolute', 'background-color': '#fff', 'opacity': '0.9', 'z-index': '5000' }} >
        <Box sx={{ 'text-align': 'center' }}>
            <CircularProgress thickness={5} />
            <div>
            <Typography component="div" variant="h6" sx={{ ml: 1, 'min-width': '9rem' }} color="primary">Carregando...</Typography>
            </div>
        </Box>
    </Box>
  );
};


export default Loading;