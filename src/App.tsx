import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import BasicForm from './___BasicForm';
import ThermalForm from './___ThermalForm';
import Tabs from './tabs/Tabs';
import TestForm from './__TestForm';


type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Domestic parameters",
    index: 1,
    Component: BasicForm
  },
  {
    label: "System parameters",
    index: 2,
    Component: ThermalForm
  },
  {
    label: "Test",
    index: 3,
    Component: TestForm
  }
];

function App() {

  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 5 }}>
        <Tabs selectedTab={selectedTab}
          onClick={setSelectedTab}
          tabs={tabs}
        ></Tabs>
      </Box>
    </Container>
  );
}

export default App;
