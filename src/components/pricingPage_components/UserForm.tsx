import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 2rem;
`;

//this card is NOT default export. It is used below in the default export

export function SmallCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{ backgroundColor: "aliceblue" }}>
        <Typography variant="h3" color="info.main" gutterBottom align="center">
          Awesome!
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary"  align="center">
          You are almost ready to fly with us in the direction:
        </Typography>
        <Typography variant="h6" color="success" align="center">
            Berlin - London (economy)
        </Typography>
        <Typography variant="body2" align="center">
          Please complete the form below 
        </Typography>
      </CardContent>
    </Card>
  );
}

//this is default export for this page. It accepts card component defined on the top
export default function userForm() {
  return (
    <StyledContainer>
      <Paper elevation={2} sx={{ margin: "40px" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ padding: "40px" }}
        >
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ gap: 5 }}
            >
              <Grid item sx={{ width: "100%" }}>
                <SmallCard />
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <TextField fullWidth label="firstname" id="fullWidth" />
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <TextField fullWidth label="lastname" id="fullWidth" />
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <TextField fullWidth label="email" id="fullWidth" />
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <TextField fullWidth label="address" id="fullWidth" />
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <Button variant="contained" color="info" fullWidth>
                  Continue to Checkout
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Paper>
    </StyledContainer>
  );
}
