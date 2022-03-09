import React, { useState, createContext, useContext, useEffect } from "react";
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Loading from 'components/Loading'
import useLoading from './LoadingContext'
import { theme } from 'common/theme'

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
  const { loading, setLoading } = useLoading()
  const [screenMode, setScreenMode] = useState('light');

  const updatedTheme = createTheme({ ...theme, palette: { ...theme.palette, mode: screenMode } })

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

  const renderErroDetail = (label, data) => data && <AlertTitle>{label}: {data}</AlertTitle>

  const request = (apiRequest) => {
    setLoading(true)
    return apiRequest()?.then((data) => data).catch((error) => setError(error)).finally(() => setLoading(false))
  }

  return (
    <AppContext.Provider value={{ error, setError, screenMode, setScreenMode, request }}>
      <ThemeProvider theme={updatedTheme}>
        {loading && <Loading></Loading>}
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

const useRequest = () => {
  const context = useContext(AppContext);

  return context;
};

export const useScreenMode = () => {
  const { screenMode, setScreenMode } = useContext(AppContext);

  return { screenMode, setScreenMode };
};

AppProvider.propTypes = {
  children: PropTypes.object
};

export default useRequest;