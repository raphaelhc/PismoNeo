import React, { useState, createContext, useContext, memo } from "react";
import PropTypes from 'prop-types';
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles';
import { theme } from 'common/theme'

const initialState = {
    screenMode: 'light',
    setScreenMode: null
};

const ThemeContext = createContext(initialState);

export const ThemeCustomProvider = ({ children }) => {
    const [screenMode, setScreenMode] = useState('light');

    const updatedTheme = createTheme({ ...theme, palette: { ...theme.palette, mode: screenMode } })

    return (
        <ThemeContext.Provider value={{ screenMode, setScreenMode }}>
            <ThemeProvider theme={updatedTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    return context;
};

ThemeCustomProvider.propTypes = {
    children: PropTypes.object
};

export default memo(useTheme);