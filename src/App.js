// src/App.js
import React from 'react';
import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import theme from './theme'; // Import your custom theme
import TrainDashboard from './components/TrainDashboard/TrainDashboard';

const App = () => {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <TrainDashboard />
      </div>
    </CssVarsProvider>
  );
};

export default App;
