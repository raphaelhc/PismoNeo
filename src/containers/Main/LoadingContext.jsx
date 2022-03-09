/* eslint-disable react/prop-types */
import React, { useState, createContext, useContext } from "react";

const initialLoadingState = {
    loading: null,
    setLoading: null
};

const LoadingContext = createContext(initialLoadingState);

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(null);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}

const useLoading = () => {
    const context = useContext(LoadingContext);

    return context;
};

export default useLoading;