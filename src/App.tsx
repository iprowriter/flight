import React from 'react';
import Header from './components/Header'
import Destinations from './components/Destination';
import DisplayFlights from './components/DisplayFlights';


function App() {
  return (
    <>
    <Header />
     <p>one task per day</p>
     <Destinations />
     <DisplayFlights/>
    </>
  );
}

export default App;
