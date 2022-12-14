import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { iFlightData } from "../common/interfaces";
import { flightData } from "../flightData";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const StyledContainer = styled(Container)`
  margin-top: 10px;
  padding: 2rem;
`;

export default function ArrivalList(props: any) {
  let selectedDeparture = useSelector((state: RootState) => state.flight.departure)

  //Data is filtered to return only the cities that matches user's departure city selection
  const selectedFlight = flightData.filter((item) => {
    if (
      item.departureCity
        .toLowerCase()
        .includes(selectedDeparture.toLowerCase())  
    )
      return item;
  });




  //this accepts data API as paramater, check for all arrival cities ...
  //..and return an array that contains unique cities.
  // (no city should appear twice)
  function destinationCity(data: iFlightData[]) {
    let allCities = data.map((item: any) => {
      return item.destinationCity;
    });
    let uniqueCities: string[] = [];
    allCities.forEach((item: any) => {
      if (!uniqueCities.includes(item)) {
        return uniqueCities.push(item);
      }
    });
    return uniqueCities;
  }

  //this is a prop coming from the parent component
  const handleSelectedCountry = (e: any) => {
    const value = e.target.value;
    props.getArrival(value);
  };

  return (
    <StyledContainer>
      <Paper elevation={2}>
        <Box>
        <Box pt={1} sx={{"background-color": "#F8F9FC"}}>
          <Typography variant="subtitle1"  >
            <b>Please select the city you are flying To:</b>
            </Typography>
          </Box>
          <Divider />
          <List>
            <Grid container direction="row">
              {destinationCity(flightData).map((item, index) => (
                <Grid item xs={6} md={4} lg={4} key={index}>
                  <ListItem>
                    {selectedFlight.some((value) =>  value.destinationCity.toLowerCase().includes(item.toLowerCase())
                    ) ? 
                    <Button onClick={handleSelectedCountry} value={item} >
                    {item}
                  </Button>
                    : <Button onClick={handleSelectedCountry} value={item} disabled>
                    {item}
                  </Button>
                    }
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </List>
        </Box>
      </Paper>
    </StyledContainer>
  );
}
