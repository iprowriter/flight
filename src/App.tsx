import React from 'react';
import Header from './components/Header'
import SearchDestination from './components/SearchDestination';
import Display from './components/Display';
import SnackBar from './components/Snackbar';


function App() {
  return (
    <>
    <Header />
     <p>one task per day</p>
     <SearchDestination/>
     <SnackBar/>
     <Display/>
    </>
  );
}

export default App;
