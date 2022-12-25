import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import data from "../data.json";
import { flightData } from "../flightData";



const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 2rem;
`;

export default function Display() {
  let selectedDestination = "Qatar";

  const filteredArray = data
    .filter((item) =>
      item.country.some((item) => item.name === selectedDestination)
    )
    .map((item) => {
      let n = Object.assign({}, item, {
        query: item.country.filter(
          (query) => query.name === selectedDestination
        ),
      });
      return n;
    });

    const array = [10, 34, 94, 534, 343435, 554, 14343, 3, 1, 2, 3, 4]

    function random(a: any){
      return a[Math.floor(Math.random() * a.length)]
    }


 

  console.log("ke is:", filteredArray)
  console.log(flightData, "ss")


  return (
    <StyledContainer>
      {
        flightData.map((item) => (
          <Paper elevation={2} sx={{ marginTop: "45px" }}>
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
                      <Typography variant="h4">{item.departureTime} </Typography>
                    </Grid>
                    <Grid>
                      <Typography>{item.code + item.flightCode} </Typography>
                    </Grid>
                    <Grid>
                      <Typography>
                        <b>{
                          item.departureCity
                          }</b>
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
                      <Typography variant="h4">18:30</Typography>
                    </Grid>
                    <Grid>
                      <Typography>LON</Typography>
                    </Grid>
                    <Grid>
                      <Typography>
                        <b>London</b>
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
              >
                Select Flight
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
        ))
      }
    </StyledContainer>
  );
}
