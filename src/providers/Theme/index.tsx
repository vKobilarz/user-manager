import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#8e44ad',
    primaryLight: '#9b59b6',
    success: '#2ecc71',
    error: '#e74c3c',
    warning: '#e67e22',
    info: '#3498db',
    white: '#ecf0f1',
    black: '#2c3e50',
    gray: '#95a5a6',
  },
};

interface Theme {
  children: ReactNode;
}

const Theme: FC<Theme> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
