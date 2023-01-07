import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 2rem;
`;

export default function Checkout() {
  return (
    <StyledContainer>
      <Paper elevation={2} sx={{ marginTop: "45px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 1,
            m: 1,
          }}
        >
          <Grid sx={{ width: "62%", backgroundColor: "#e0e0e0" }}>
            <Grid
              container
              marginY={2}
              justifyContent="center"
              alignItems="center"
              sx={{ backgroundColor: "aliceblue" }}
            >
              <Box marginY={2}>
                <Typography variant="h5">
                  <b>Checkout Your Order</b>
                </Typography>
              </Box>
            </Grid>
            <Grid
              container
              marginY={2}
              paddingX={10}
              justifyContent="center"
              alignItems="center"
            >
              <Button variant="contained" color="info" fullWidth>
                PAY Now
              </Button>
            </Grid>
            <Grid
              container
              marginY={1}
              paddingX={3}
              sx={{ backgroundColor: "aliceblue" }}
            >
              <Box marginY={2}>
                <Typography variant="h5">
                  <b>Your Details</b>
                </Typography>
                <Grid>
                  <Divider />
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <Typography>
                              <b>Name:</b>
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>MARTIN OPUTA</Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography>
                              <b>Email:</b>
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>MARTIN@MARTINOPUTA.COM</Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography>
                              <b>Address:</b>
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>
                              SANTASTRASSE 34, BERLIN 04109
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Box>
            </Grid>
            <Grid
              container
              marginY={1}
              paddingX={3}
              sx={{ backgroundColor: "aliceblue" }}
            >
              <Box marginY={2}>
                <Typography variant="h5">
                  <b>Flight Details</b>
                </Typography>
                <Grid>
                  <Divider />
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <Typography>
                              <b>Departure:</b>
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>BERLIN (GERMANY)</Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography>
                              <b>Destination:</b>
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>LONDON (UNITED KINGDOM)</Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography>
                              <b>Departure time:</b>
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>12:30 </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography>
                              <b>Arrival time:</b>
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>18:00</Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography>
                              <b>Flight Code:</b>
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>LH302</Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography>
                              <b>Airline:</b>
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>LUFTHANSA</Typography>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </StyledContainer>
  );
}
