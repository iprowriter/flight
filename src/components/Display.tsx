import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { flightData } from "../flightData";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 2rem;
`;

export default function Display() {

  let selectedDeparture = useSelector((state: RootState) => state.flight.departure)
  let selectedDestination = useSelector((state: RootState) => state.flight.destination)

  const selectedFlight = flightData.filter((item) => {
    if (
      item.departureCity
        .toLowerCase()
        .includes(selectedDeparture.toLowerCase()) && item.destinationCity
        .toLowerCase()
        .includes(selectedDestination.toLowerCase())
        
    )
      return item;
  });

  //this function is used to send user to pricing page after flight selection
  const navigate = useNavigate()


  return (
    <StyledContainer>
      {selectedFlight.map((item) => (
        <Paper elevation={2} sx={{ marginTop: "45px" }} key={item.id}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2} lg={2} borderRight={2} bgcolor="">
              <Box>
                <Grid
                  container
                  my={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box>
                    <Grid item xs={12}>
                      <img height={50} width={50} src={item.imageUrl} alt="" />
                    </Grid>
                    <Grid item xs={12} paddingTop={3}>
                      {item.name}
                    </Grid>
                  </Box>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={7} lg={7} borderRight={2}>
              <Box>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box>
                      <Grid>
                        <Typography variant="h4">
                          {item.departureTime}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography>{item.code + item.flightCode} </Typography>
                      </Grid>
                      <Grid>
                        <Typography>
                          <b>{item.departureCity}</b>
                        </Typography>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box>
                      <Grid>
                        <Typography variant="h4">{item.arrivalTime} </Typography>
                      </Grid>
                      <Grid>
                        <Typography>{item.code + item.flightCode} </Typography>
                      </Grid>
                      <Grid>
                        <Typography>
                          <b>{item.destinationCity} </b>
                        </Typography>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              lg={3}
              bgcolor=""
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding={2}
            >
              <Box sx={{ width: "100%" }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ borderRadius: "20px" }}
                  fullWidth
                  onClick={()=> navigate("/price")}
                >
                  Select Flight
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </StyledContainer>
  );
}
