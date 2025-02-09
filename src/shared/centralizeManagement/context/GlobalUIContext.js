'use client';

import Loader from '@/shared/components/pure-components/loader/loader';
// ToastContext.js
import { createContext, useContext, useState } from 'react';

const UiContext = createContext();

export const GlobalUIContext = ({ children }) => {
    const [uiState, setUiState] = useState({
        isDrawerOpen: false, // Initial drawer state
        showLoader: false,
    });

    // Generic function to update the state
    const toggleUIState = (key) => {
        setUiState((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    const setUIState = (key, value) => {
        setUiState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const toggleLoader = (key) => {
        setUiState((prevState) => ({
            ...prevState,
            showLoader: !prevState.showLoader,
        }));
    };

    return (
        <UiContext.Provider value={{ uiState, toggleUIState, setUIState, toggleLoader }}>
            {children}
            {uiState.showLoader && <Loader />}
        </UiContext.Provider>
    );
};

// Custom hook to use the UiContext
export const useUI = () => {
    return useContext(UiContext);
};
