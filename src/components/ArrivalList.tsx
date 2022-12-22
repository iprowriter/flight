import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import { Button, Container, Grid } from "@mui/material";

const StyledContainer = styled(Container)`
  margin-top: 10px;
  padding: 2rem;
`;

export default function ArrivalList(props: any) {
  let country = [
    "Germany",
    "Australia",
    "United Kingdom",
    "Nigeria",
    "France",
    "USA",
    "Poland",
    "Canada",
    "Ghana",
    "Ireland",
    "Netherland",
    "Spain",
    "Austria",
    "Qatar",
    "Saudi Arabia",
    "Brazil",
    "Bahamas",
    "China",
    "North Korea",
  ];

  const handleSelectedCountry = (e: any) => {
    const value = e.target.value;
    console.log(value, "from arrival");
    props.getArrival(value);
  };

  return (
    <StyledContainer>
      <Paper elevation={2}>
        <Box>
          <List>
            <Grid container direction="row">
              {country.map((item, index) => (
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
