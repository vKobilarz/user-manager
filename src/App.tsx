import React from 'react';

import RouterProvider from './providers/Router';
import GlobalStyle from './providers/Theme/global';
import ThemeProvider from './providers/Theme';
import NotificationProvider from './providers/Notification';

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <GlobalStyle />
        <RouterProvider />
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
