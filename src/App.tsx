import React from 'react';
import Header from './components/Header'
import Destinations from './components/Destination';
import DisplayFlights from './components/DisplayFlights';
import Display from './components/Display';


function App() {
  return (
    <>
    <Header />
     <p>one task per day</p>
     <Destinations />
     <DisplayFlights/>
     <Display/>
    </>
  );
}

export default App;
