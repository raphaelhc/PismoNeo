import React, { useState, createContext, useContext, memo } from "react";
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import useLoading from './LoadingContext'
import { theme } from 'common/theme'
import ErrorAlert from './ErrorAlert'

const initialState = {
  error: null,
  setError: null,
  screenMode: 'light',
  setScreenMode: null
};

const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const { setLoading } = useLoading()
  const [screenMode, setScreenMode] = useState('light');

  const updatedTheme = createTheme({ ...theme, palette: { ...theme.palette, mode: screenMode } })

  const request = (apiRequest) => {
    setLoading(true)
    return apiRequest()?.then((data) => data).catch((error) => setError(error)).finally(() => setLoading(false))
  }

  return (
    <AppContext.Provider value={{ screenMode, setScreenMode, request }}>
      <ThemeProvider theme={updatedTheme}>
        {children}
        <ErrorAlert error={error} setError={setError} />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export const useRequest = () => {
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

export default memo(AppProvider, (prev, next) => console.log(prev, next));