import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import DepatureList from "./DepartureList";
import ArrivalList from "./ArrivalList";
import { useDispatch } from 'react-redux'
import { userDeparture,  userDestination } from "../redux/slices/flightSelection";



const StyledBox = styled(Box)`
  background-color: aliceblue;
  color: darkslategray;
  padding: 2rem;
  text-align: center;
`;

export default function SearchDestination() {
  const [focusOne, setFocusOne] = React.useState(false);
  const [focusTwo, setFocusTwo] = React.useState(false);
  const [destination, setDestination] = React.useState("");
  const [arrival, setArrival] = React.useState("");

  const  dispatch = useDispatch();


  //function gets the  value from a child component (DepatureList) and save the  value on Redux
  const getDestinationCountry = (value: string) => {
    setDestination(value);
    dispatch(userDeparture(value))
  };

  //function gets the value frorm a child component (ArrivalList) and save the  value on Redux
  const getArrivalCountry = (value: string) => {
    setArrival(value);
    dispatch(userDestination(value))
  };

  //function that shows the value of both destination and arrival countries
  const getDestinationAndArrival = () => {
    if (destination === "") {
      alert("please add destination")
    } else if (arrival === "") {
      alert("please add arrival")
    }  else {
      alert("success")
    }
    console.log(destination, arrival)
  }




  return (
    <StyledBox>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="Depart From"
          variant="filled"
          onFocus={() => {
            setFocusOne(true);
            setFocusTwo(false);
          }}
          value={destination}
        />
        <TextField
          id="filled-basic"
          label="Arrive At"
          variant="filled"
          onFocus={() => {
            setFocusTwo(true);
            setFocusOne(false);
          }}
          value={arrival}
        />
        <Button
          variant="contained"
          sx={{ height: "7ch" }}
          onClick={() => {
            setFocusOne(false);
            setFocusTwo(false);
            getDestinationAndArrival();
          }}
        >
          Search Flights
        </Button>
      </Box>
      {focusOne && <DepatureList getDestination={getDestinationCountry} />}
      {focusTwo && <ArrivalList getArrival={getArrivalCountry} />}
    </StyledBox>
  );
}
