import React from 'react';
import Header from './components/Header'
import SearchDestination from './components/SearchDestination';
import Display from './components/Display';
import DestinationList from './components/DestinationList';


function App() {
  return (
    <>
    <Header />
     <p>one task per day</p>
     <SearchDestination/>
     <DestinationList />
     <Display/>
    </>
  );
}

export default App;
