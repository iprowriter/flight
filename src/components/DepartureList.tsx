import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { flightData } from "../flightData";
import { iFlightData } from "../common/interfaces";

const StyledContainer = styled(Container)`
  margin-top: 10px;
  padding: 2rem;
`;

export default function DepatureList(props: any) {
  //this accepts data API as paramater, check for all departure cities ...
  //..and return an array that contains unique cities.
  // (no city should appear twice)
  function departureCity(data: iFlightData[]) {
    let allCities = data.map((item: any) => {
      return item.departureCity;
    });
    let uniqueCities: string[] = [];
    allCities.forEach((item: any) => {
      if (!uniqueCities.includes(item)) {
        return uniqueCities.push(item);
      }
    });
    return uniqueCities;
  }

//handleSelectedCountry pass the value of the selected departureCity to the parent component - "SearchDestination"
  const handleSelectedCountry = (e: any) => {
    const value = e.target.value;
    props.getDestination(value);
    props.activateDestination()
  };


 

  return (
    <StyledContainer>
      <Paper elevation={2}>
        <Box>
          <Box mt={0}>
          <Typography variant="subtitle1"  gutterBottom>
            Please select the city you are flying from:
            </Typography>
          </Box>
          <Divider />
          <List>
            <Grid container direction="row">
              {departureCity(flightData).map((item, index) => (
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
