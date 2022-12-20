import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Button, Container, Grid } from "@mui/material";
import data from "../data.json";

const StyledContainer = styled(Container)`
  margin-top: 12px;
`;

export default function Display2() {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();

  console.log(data[1].prices[0]);
  console.log(time);

  return (
    <StyledContainer>
      <Paper elevation={2}>
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
                    <img height={50} width={50} src={data[2].imageUrl} alt="" />
                  </Grid>
                  <Grid item xs={12} paddingTop={3}>
                    Lufthansa
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
                      <p>
                        <b>12:30</b>
                      </p>
                    </Grid>
                    <Grid>
                      <p>FRA</p>
                    </Grid>
                    <Grid>
                      <p>Frankfurt1</p>
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
                      <p>
                        <b>12:30</b>
                      </p>
                    </Grid>
                    <Grid>
                      <p>FRA</p>
                    </Grid>
                    <Grid>
                      <p>Frankfurt1</p>
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
            <Box sx={{ width: '100%' }}> 
              <Button variant="contained" fullWidth>
                Select Flight
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </StyledContainer>
  );
}
