import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import './App.css';
import ThermalForm from './___ThermalForm';

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example with TypeScript
        </Typography>
        <ThermalForm />
      </Box>
    </Container>
  );
}

export default App;
