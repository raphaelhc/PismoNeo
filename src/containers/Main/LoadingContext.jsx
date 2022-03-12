import React, { useState, createContext, useContext } from "react";
import PropTypes from 'prop-types';
import Loading from "components/Loading/index";

const initialLoadingState = {
    loading: null,
    setLoading: null
};

const LoadingContext = createContext(initialLoadingState);

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(null);
    const [values] = useState({ setLoading });

    return (
        <LoadingContext.Provider value={values}>
            <Loading loading={loading}></Loading>
            {children}
        </LoadingContext.Provider>
    )
}

const useLoading = () => {
    const context = useContext(LoadingContext);

    return context;
};

LoadingProvider.propTypes = {
    children: PropTypes.object
};

export default useLoading;