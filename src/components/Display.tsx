import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Button, Container, Grid } from "@mui/material";
import data from "../data.json";

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

export default function Display() {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();

  console.log(data[1].prices[0]);
  console.log(time);

  return (
    <StyledContainer>
      <Paper elevation={2}>
        <Grid container spacing={2}>
          <Grid item xs={2} bgcolor="red">
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
                  <Grid item xs={12}>
                    Lufthansa
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={7} bgcolor="blue">
            {" "}
            <Box></Box> item 2
          </Grid>
          <Grid item xs={3} bgcolor="green" justifyContent="center">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding={2}
            >
                <Button variant="contained" fullWidth >Select Flight</Button>
            </Box>
            
          </Grid>
        </Grid>
      </Paper>
    </StyledContainer>
  );
}
