import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import DestinationList from "./DestinationList";
import ArrivalList from "./ArrivalList";

const StyledBox = styled(Box)`
  background-color: aliceblue;
  color: darkslategray;
  padding: 2rem;
  text-align: center;
`;

export default function SearchDestination() {
  const [focusOne, setFocusOne] = React.useState(false);
  const [focusTwo, setFocusTwo] = React.useState(false);
  const [country, setCountry] = React.useState("");
  const [arrival, setArrival] = React.useState("");

  //function gets the  value from a child component (DestinationList)
  const getSelectedCountry = (value: string) => {
    console.log(value, "from f");
    setCountry(value);
  };

  //function gets the value frorm a child component (ArrivalList)
  const getArrivalCountry = (value: string) => {
    console.log(value, "from arrival parent");
    setArrival(value);
  };

  //function that turns focus on or off to avoid two Textfield being focused at the same time
  const handleFocusState1 = () => {
    setFocusTwo(false);
  };

  const handleFocusState2 = () => {
    setFocusOne(false);
  };

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
            handleFocusState1();
          }}
          value={country}
        />
        <TextField
          id="filled-basic"
          label="Arrive At"
          variant="filled"
          onFocus={() => {
            setFocusTwo(true);
            handleFocusState2();
          }}
          value={arrival}
        />
        <Button
          variant="contained"
          sx={{ height: "7ch" }}
          onClick={() => {
            handleFocusState1();
            handleFocusState2();
          }}
        >
          Search Flights
        </Button>
      </Box>
      {focusOne && <DestinationList getCountry={getSelectedCountry} />}
      {focusTwo && <ArrivalList getArrival={getArrivalCountry} />}
    </StyledBox>
  );
}
