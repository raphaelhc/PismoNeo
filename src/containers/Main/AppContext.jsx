import React, { useState, createContext, useContext, useEffect } from "react";
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const initialState = {
  error: null,
  setError: null,
  screenMode: 'light',
  setScreenMode: null
};

const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [screenMode, setScreenMode] = useState('light');
  const theme = createTheme({
    palette: {
      mode: screenMode,
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      light: {
        main: '#fff',
        contrastText: '#fff',
      },
      datePicker: {
        selectColor: 'red',
      },
    },
  })

  console.log('createTheme', theme);

  useEffect(() => {
    if (error) {
      setOpenAlert(true)
    }
  }, [openAlert, error]);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(null)
    setOpenAlert(false);
  };

  const renderErroDetail = (label, data) => {

    return data && (<AlertTitle>{label}: {data}</AlertTitle>)
  }


  return (
    <AppContext.Provider value={{ error, setError, screenMode, setScreenMode }}>
      <ThemeProvider theme={theme}>

        {children}
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {renderErroDetail('Error code', error?.response?.status)}
            {renderErroDetail('URL', error?.response?.request?.responseURL)}
            {renderErroDetail('Status', error?.response?.statusText)}
            {renderErroDetail('Message', error?.response?.data?.error_message)}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

const useError = () => {
  const context = useContext(AppContext);

  return context;
};

export const useScreenMode = () => {
  const context = useContext(AppContext);

  return context;
};

AppProvider.propTypes = {
  children: PropTypes.object
};

export default useError;