import * as React from "react";
import SearchDestination from "../components/SearchDestination";
import Display from "../components/Display";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import DiscoverCard from "../components/DiscoverCard";



export default function Home() {
    const selectedDestination = useSelector(
        (state: RootState) => state.flight.destination
      );
    
      //a function that check if departureCity and destinationCity is selected before displaying flights results
      const [toAndFroSelected, setToAndFroSelected] = React.useState(false);
    
      const handleToAndFroSelected = () => {
        setToAndFroSelected(true);
      };
    
      //useEffect is used here to remove Flight results information when the user changes the departureCity
      React.useEffect(() => {
        if (selectedDestination === "") setToAndFroSelected(false);
      }, [selectedDestination]);


    return(
        <>
      <SearchDestination handleToAndFroSelected={handleToAndFroSelected} />
      {toAndFroSelected && <Display />}
      <DiscoverCard/>
        </>
    )
}