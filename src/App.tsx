import React from 'react';
import Header from './components/Header'
import Destinations from './components/Destination';
import DisplayFlights from './components/DisplayFlights';
import Display from './components/Display';
import Display2 from './components/Display2';


function App() {
  return (
    <>
    <Header />
     <p>one task per day</p>
     <Destinations />
     <DisplayFlights/>
     <Display2/>
    </>
  );
}

export default App;
