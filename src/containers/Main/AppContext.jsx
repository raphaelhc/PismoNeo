import React, { useState, createContext, useContext, memo, Fragment } from "react";
import PropTypes from 'prop-types';
import { ThemeCustomProvider } from './ThemeContext'
import useLoading from './LoadingContext'
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

  const request = (apiRequest) => {
    setLoading(true)
    return apiRequest()?.then((data) => data).catch((error) => setError(error)).finally(() => setLoading(false))
  }

  const [values] = useState({ request });

  return (
    <AppContext.Provider value={values}>
      <ThemeCustomProvider>
        <Fragment>
          {children}
          <ErrorAlert error={error} setError={setError} />
        </Fragment>
      </ThemeCustomProvider>
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

export default memo(AppProvider);