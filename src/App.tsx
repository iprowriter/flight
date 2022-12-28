import React from 'react';
import Header from './components/Header'
import SearchDestination from './components/SearchDestination';
import Display from './components/Display';
import SnackBar from './components/Snackbar';


function App() {

  //a function that check if departureCity and destinationCity is selected before displaying flights results
  const  [toAndFroSelected, setToAndFroSelected] = React.useState(false)

  const handleToAndFroSelected = () => {
    setToAndFroSelected(true)
  }
  


  return (
    <>
    <Header />
     <p>one task per day</p>
     <SearchDestination handleToAndFroSelected={handleToAndFroSelected}/>
     <SnackBar/>
     {toAndFroSelected && <Display/>}
    </>
  );
}

export default App;
