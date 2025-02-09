"use client";

import { UIProvider } from "@/shared/centralizeManagement/UIManager";
import store from "@/store";
import { Suspense } from "react";
import { Provider } from "react-redux";


const AppProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <UIThemeProvider>
                <UIProvider>
                    <Suspense>
                        {children}
                    </Suspense>
                </UIProvider>
            </UIThemeProvider>
        </Provider>
    );
};

export default AppProvider;
