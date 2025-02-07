"use client";

import { ThemeProvider } from "@emotion/react";

const UIThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default UIThemeProvider;
