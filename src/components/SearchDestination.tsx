import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import DepatureList from "./DepartureList";
import ArrivalList from "./ArrivalList";
import { useDispatch } from "react-redux";
import {
  userDeparture,
  userDestination,
} from "../redux/slices/flightSelection";
import SnackBar from "./Snackbar";

const StyledBox = styled(Box)`
  background-color: aliceblue;
  color: darkslategray;
  padding: 2rem;
  text-align: center;
`;

export default function SearchDestination(props:  any) {
  const [focusOne, setFocusOne] = React.useState(false);
  const [focusTwo, setFocusTwo] = React.useState(false);
  const [departure, setDeparture] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);

  const dispatch = useDispatch();

  //function gets the  value from a child component (DepatureList) and save the  value on Redux
  const getDestinationCountry = (value: string) => {
    setDeparture(value);
    dispatch(userDeparture(value));
  };

  //function gets the value frorm a child component (ArrivalList) and save the  value on Redux
  const getArrivalCountry = (value: string) => {
    setArrival(value);
    dispatch(userDestination(value));
  };


  //This function automatically activate destination inputBox after the user selects departure city from the UI.
  const activateDestination = () => {
    setFocusOne(false);
    setFocusTwo(true);
  };

  //function that enables the disabled search flight button
  //the dispatch UserDestination here is used to know when user changed departureCity, this ensures the arrival of... 
  //...destination becomes empty string
  React.useEffect(() => {
    if (departure !== "" && arrival !== "") 
    setDisabled(false);
    dispatch(userDestination(arrival))
  }, [arrival, departure, dispatch]);

  //this function ensures that the user does not select destination before departure location.
  const checkDepartureFirst = () => {
    if (departure === "") {
      alert("please select departure first");
      setFocusTwo(false);
      setFocusOne(true);
    } else {
      setFocusTwo(true);
      setFocusOne(false);
    }
  };

  //a function that checks if Destination is selected before activating search result. It  is a prop from APP.tsx component
  const checkSelection =  () => {
    if (arrival !== "")
    props.handleToAndFroSelected()
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
            setArrival("")
          }}
          value={departure}
        />
        <TextField
          id="filled-basic"
          label="Arrive At"
          variant="filled"
          onFocus={() => {checkDepartureFirst()}}
          value={arrival}
          onChange={checkDepartureFirst}
        />
        <Button
          variant="contained"
          sx={{ height: "7ch" }}
          onClick={() => {
            setFocusOne(false);
            setFocusTwo(false);
            checkSelection();
          }}
          disabled={disabled}
        >
          Search Flights
        </Button>
      </Box>
      {focusOne && (
        <DepatureList
          getDestination={getDestinationCountry}
          activateDestination={activateDestination}
        />
      )}
      {focusTwo && <ArrivalList getArrival={getArrivalCountry} />}
    </StyledBox>
  );
}
