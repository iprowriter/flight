import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import { Button, Container, Grid } from "@mui/material";
import { flightData } from "../flightData";
import { iFlightData } from "../common/interfaces";



const StyledContainer = styled(Container)`
  margin-top: 10px;
  padding: 2rem;
`;

export default function DestinationList(props: any) {
 

  //this accepts data API as paramater, check for all destination cities ...
  //..and return an array that contains unique cities.
  // (no city should appear twice)
  function destinationCity(data: iFlightData[]) {
    let allCities = data.map((item: any) => {
      return item.destinationCity;
    });
    let uniqueCities: string[] = [];
    allCities.map((item: any) => {
      if (!uniqueCities.includes(item)) {
        return uniqueCities.push(item);
      }
    });
    return uniqueCities;
  }

  console.log(destinationCity(flightData));


  const handleSelectedCountry = (e: any) => {
    const value = e.target.value;
    props.getDestination(value);
  };

  return (
    <StyledContainer>
      <Paper elevation={2}>
        <Box>
          <List>
            <Grid container direction="row">
              {destinationCity(flightData).map((item, index) => (
                <Grid item xs={6} md={4} lg={4} key={index}>
                  <ListItem>
                    <Button onClick={handleSelectedCountry} value={item}>
                      {item}
                    </Button>
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
