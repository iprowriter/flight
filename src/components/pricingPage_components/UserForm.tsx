import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export default function userForm() {
  return (
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
      </Grid>
    </Box>
  );
}
