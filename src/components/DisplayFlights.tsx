import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import { styled } from '@mui/material/styles';
import { Button, Container, Grid } from "@mui/material";

const StyledBox = styled(Box)`
  width: 30;
  margin-top: 50;
  color: darkslategray;
  padding: 2rem;
  text-align: center;
`;

const StyledContainer = styled(Container)`
  margin-top: 12px;
`;

export default function DisplayFlights() {
  let data = require('./data.json');
  console.log(data.airlines.name)


  return (
    <StyledContainer>
      <StyledBox>
      <Paper elevation={2}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <p>Depart: 2:30 Am (Frankfurt Airport)</p>
            <p>Arrive: 4:30 Am (London Heathrow)</p>
          </Grid>
          <Grid item xs={3}>
            <p>Time: 2h:30 mins</p>
            <p>Date: {new Date().toISOString().slice(0, 10)}</p>
          </Grid>
          <Grid item xs={3}>
            <p>Price: $150</p>
            <p>Airline: Lufthansa</p>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained">Select Flight</Button>
          </Grid>
        </Grid>
      </Paper>
    </StyledBox>
    </StyledContainer>
  );
}
