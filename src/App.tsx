import React from 'react';
import Header from './components/Header'
import SearchDestination from './components/SearchDestination';
import Display from './components/Display';


function App() {
  return (
    <>
    <Header />
     <p>one task per day</p>
     <SearchDestination/>
     <Display/>
    </>
  );
}

export default App;
