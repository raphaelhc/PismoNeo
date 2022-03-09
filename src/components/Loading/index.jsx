import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { BoxStyled, WrapperStyled } from './styles'


const Loading = () => {
  return (
    <BoxStyled>
      <WrapperStyled>
        <CircularProgress thickness={5} />
        <div>
          <Typography component="div" variant="h6" sx={{ ml: 1, 'minWidth': '9rem' }} color="primary">Carregando...</Typography>
        </div>
      </WrapperStyled>
    </BoxStyled>
  );
};


export default Loading;