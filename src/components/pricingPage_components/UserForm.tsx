import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";


const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 2rem;
`;



export default function userForm() {
  return (
    <StyledContainer>
        <Paper elevation={2} sx={{margin: "40px"}} >

            <Grid container
            justifyContent="center"
            alignItems="center"
            sx={{padding: "40px"}}
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
        <Grid item sx={{width: "100%" }}>
        <TextField fullWidth label="firstname" id="fullWidth" />
        </Grid>
        <Grid item sx={{width: "100%" }}>
        <TextField fullWidth label="lastname" id="fullWidth" />
        </Grid>
        <Grid item sx={{width: "100%" }}>
        <TextField fullWidth label="email" id="fullWidth" />
        </Grid>
        <Grid item sx={{width: "100%" }}>
        <TextField fullWidth label="address" id="fullWidth" />
        </Grid>
        <Grid item sx={{width: "100%" }}>
        <Button variant="contained" color="info" fullWidth>Continue to Checkout</Button>
        </Grid>
      </Grid>
    </Box>

            </Grid>
        </Paper>
    </StyledContainer>
  );
}
