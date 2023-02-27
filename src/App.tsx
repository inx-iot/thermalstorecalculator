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
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Domestic parameters",
    index: 1
  },
  {
    label: "System parameters",
    index: 2
  },
  {
    label: "Test",
    index: 3
  }
];

export interface ISharedState {
  someState:number
}

function App() {

  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  const [sharedState, setSharedState] = useState<ISharedState>({someState:0})

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 5 }}>
        <Tabs selectedTab={selectedTab}
          onClick={setSelectedTab}
          tabs={tabs}
        ></Tabs>
        <BasicForm visible={selectedTab===1}></BasicForm>
        <ThermalForm sharedState={sharedState} visible={selectedTab===2}></ThermalForm>
        <TestForm sharedState={sharedState} visible={selectedTab===3} setSomeSharedState={(some:number)=>{
          var newState={...sharedState}
          newState.someState=some
          setSharedState(newState)
        }}></TestForm>
      </Box>

      
    </Container>
  );
}

export default App;
