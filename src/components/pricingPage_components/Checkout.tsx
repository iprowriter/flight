import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 2rem;
`;

export default function Checkout() {

    return(
        <StyledContainer>
            <Paper elevation={2} sx={{ marginTop: "45px" }}>
                <Grid container
                 justifyContent="center"
                 alignItems="center"
                >
                    <Grid
                    container
                    marginY={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h5">
                      <b>Checkout Your Order</b>
                    </Typography>
                    <Divider/>
                  </Grid>
                  <Grid
                    container
                    marginY={2}
                    justifyContent="center"
                    alignItems="center"
                    sx={{backgroundColor: "#e0e0e0"}}
                  >
                    <Box marginY={2}>
                    <Typography variant="h5">
                      <b>Checkout Your Order</b>
                    </Typography>
                    </Box>
                   
                  </Grid>
                  <Grid
                    container
                    marginY={1}
                    justifyContent="center"
                    alignItems="center"
                    sx={{backgroundColor: "#e0e0e0"}}
                  >
                    <Box marginY={2}>
                    <Typography variant="h5">
                      <b>Your Details</b>
                    </Typography>
                    <Grid>
                        <Typography>
                            <b>Name:</b> MARTIN OPUTA
                        </Typography>
                        <Typography>
                            <b>Email:</b> MARTIN@MARTINOPUTA.COM
                        </Typography>
                        <Typography>
                            <b>Address:</b> MorrisStrasse 34, Berlin, Germany.
                        </Typography>
                    </Grid>
                    </Box>
                   
                  </Grid>
                </Grid>
            </Paper>
        </StyledContainer>
    )
}