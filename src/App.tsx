import React from 'react';

import RouterProvider from './providers/Router';
import GlobalStyle from './providers/Theme/global';
import ThemeProvider from './providers/Theme';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <RouterProvider />
    </ThemeProvider>
  );
}

export default App;
