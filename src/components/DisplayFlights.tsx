import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import { styled } from '@mui/material/styles';
import { Button, Container, Grid } from "@mui/material";
import data from "../data.json"

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
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes()

  console.log(data[1].prices[0])
  console.log(time)


  return (
    <StyledContainer>
      <StyledBox>
      <Paper elevation={2}>
        <Grid container spacing={2}>
        <Grid item xs={2}>
        <img height={50} width={50} src={data[2].imageUrl} alt="" />
          </Grid>
          <Grid item xs={3}>
            <p><b>Depart:</b> {data[2].departure[1] } Am (Frankfurt Airport)</p>
            <p><b>Arrive:</b> {data[2].arrival[6] }  Am (London Heathrow)</p>
          </Grid>
          <Grid item xs={2}>
            <p>Time: 2h:30 mins</p>
            <p>Date: {new Date().toISOString().slice(0, 10)}</p>
          </Grid>
          <Grid item xs={3}>
            <p>Price: ${data[2].prices[0]}</p>
            <p>Airline: {data[2].name}</p>
            <p>Type: {data[2].cabinClass[0]}</p>
          </Grid>
          <Grid item xs={2}>
          <Button variant="contained">Select Flight</Button>
        
          </Grid>
        </Grid>
      </Paper>
    </StyledBox>
    </StyledContainer>
  );
}
