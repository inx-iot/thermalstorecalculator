import { Box, Container } from '@mui/material';
import React from 'react';
import './App.css';
import ThermalForm from './___ThermalForm';

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <ThermalForm />
      </Box>
    </Container>
  );
}

export default App;
