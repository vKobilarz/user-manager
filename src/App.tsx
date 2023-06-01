import React from 'react';

import RouterProvider from './providers/Router';
import GlobalStyle from './providers/Theme/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RouterProvider />
    </div>
  );
}

export default App;
