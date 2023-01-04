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
import Chip from "@mui/material/Chip";
import CommitIcon from "@mui/icons-material/Commit";
import React from "react";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import PriceModal from "./PriceModal";



const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 2rem;
`;



export default function Price() {
  const [price2, setPrice2] = React.useState(0);
  console.log(price2);

  let userSelected = [
    useSelector((state: RootState) => state.userSelectedFlight.flightDetail),
  ];
  console.log(userSelected);

  //the state management for modal in the 3 paragraphs below:
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledContainer>
        <PriceModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <Paper elevation={2} sx={{ marginTop: "45px" }}>
        <Grid padding={2}>
          {userSelected.map((item) => (
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ gap: 5 }}
              key={item.id}
            >
              <Grid
                item
                xs={12}
                md={3}
                lg={3}
                sx={{ backgroundColor: "aliceblue", margin: "2" }}
              >
                <Box>
                  <Grid
                    container
                    marginY={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h5">
                      <b>ECONOMY</b>
                    </Typography>
                  </Grid>
                  <Grid>
                    <Divider color="primary" />
                  </Grid>
                  <Grid
                    container
                    marginY={2}
                    justifyContent="center"
                    alignItems="center"
                    direction={"column"}
                  >
                    <Box marginY={1}>
                      <Typography>
                        <Chip
                          label={
                            item.departureCity + " - " + item.destinationCity
                          }
                          color="success"
                          variant="outlined"
                        />
                      </Typography>
                    </Box>
                    <Box>
                      <Typography>
                        {item.departureTime} - {item.arrivalTime}
                      </Typography>
                    </Box>
                    <Typography>2hrs</Typography>
                    <Typography>
                      {item.code + item.flightCode} ({item.aircraft})
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    marginY={1}
                    paddingX={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h3">€{item.price.economy}</Typography>
                  </Grid>
                  <Grid marginY={1} paddingX={1}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => {setPrice2(item.price.economy); handleOpen()}}
                    >
                      Select
                    </Button>
                  </Grid>
                  <Grid
                    container
                    marginY={4}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography>
                      <i>Cheaper prices - same high quality</i>
                    </Typography>
                  </Grid>
                  <Grid>
                    <Divider variant="middle" />
                  </Grid>
                  <Grid>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="warning" />
                        </ListItemIcon>
                        <ListItemText>Normal check-in</ListItemText>
                      </ListItem>
                      <Divider light />
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText>1 checked bag (15kg)</ListItemText>
                      </ListItem>
                      <Divider light />
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="action" />
                        </ListItemIcon>
                        <ListItemText>Meal & beverages</ListItemText>
                      </ListItem>
                      <Divider light />
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="info" />
                        </ListItemIcon>
                        <ListItemText>No seat reservation</ListItemText>
                      </ListItem>
                      <Divider light />
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="success" />
                        </ListItemIcon>
                        <ListItemText>No rebooking or refund</ListItemText>
                      </ListItem>
                    </List>
                  </Grid>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                lg={3}
                sx={{ backgroundColor: "aliceblue", margin: "2" }}
              >
                <Box>
                  <Grid
                    container
                    marginY={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h5">
                      <b>PREMIUM</b>
                    </Typography>
                  </Grid>
                  <Grid>
                    <Divider color="primary" />
                  </Grid>
                  <Grid
                    container
                    marginY={2}
                    justifyContent="center"
                    alignItems="center"
                    direction={"column"}
                  >
                    <Box marginY={1}>
                      <Typography>
                        <Chip
                          label={
                            item.departureCity + " - " + item.destinationCity
                          }
                          color="info"
                          variant="outlined"
                        />
                      </Typography>
                    </Box>
                    <Box>
                      <Typography>
                        {item.departureTime} - {item.arrivalTime}
                      </Typography>
                    </Box>
                    <Typography>2hrs</Typography>
                    <Typography>
                      {item.code + item.flightCode} ({item.aircraft})
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    marginY={1}
                    paddingX={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h3">€{item.price.premium}</Typography>
                  </Grid>
                  <Grid marginY={1} paddingX={1}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => {setPrice2(item.price.premium); handleOpen()}}
                    >
                      Select
                    </Button>
                  </Grid>
                  <Grid
                    container
                    marginY={4}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography>
                      <i>Great Choice - More for You</i>
                    </Typography>
                  </Grid>
                  <Grid>
                    <Divider variant="middle" />
                  </Grid>
                  <Grid>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="warning" />
                        </ListItemIcon>
                        <ListItemText>Faster check-in</ListItemText>
                      </ListItem>
                      <Divider light />
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText>2 checked bags (23kg)</ListItemText>
                      </ListItem>
                      <Divider light />
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="action" />
                        </ListItemIcon>
                        <ListItemText>Meals & beverages</ListItemText>
                      </ListItem>
                      <Divider light />
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="info" />
                        </ListItemIcon>
                        <ListItemText>Paid seat reservation</ListItemText>
                      </ListItem>
                      <Divider light />
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="success" />
                        </ListItemIcon>
                        <ListItemText>Rebooking available</ListItemText>
                      </ListItem>
                    </List>
                  </Grid>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                lg={3}
                sx={{ backgroundColor: "aliceblue", margin: "2" }}
              >
                <Box>
                  <Grid
                    container
                    marginY={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h5">
                      <b>BUSINESS</b>
                    </Typography>
                  </Grid>
                  <Grid>
                    <Divider color="primary" />
                  </Grid>
                  <Grid
                    container
                    marginY={2}
                    justifyContent="center"
                    alignItems="center"
                    direction={"column"}
                  >
                    <Box marginY={1}>
                      <Typography>
                        <Chip
                          label={
                            item.departureCity + " - " + item.destinationCity
                          }
                          color="warning"
                          variant="outlined"
                        />
                      </Typography>
                    </Box>
                    <Box>
                      <Typography>
                        {item.departureTime} - {item.arrivalTime}
                      </Typography>
                    </Box>
                    <Typography>2hrs</Typography>
                    <Typography>
                      {item.code + item.flightCode} ({item.aircraft})
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    marginY={1}
                    paddingX={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h3">€{item.price.business}</Typography>
                  </Grid>
                  <Grid marginY={1} paddingX={1}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => {setPrice2(item.price.business); handleOpen()}}
                    >
                      Select
                    </Button>
                  </Grid>
                  <Grid
                    container
                    marginY={4}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography>
                      <i>Travel with Class - All Inclusive</i>
                    </Typography>
                  </Grid>
                  <Grid>
                    <Divider variant="middle" />
                  </Grid>
                  <Grid>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="warning" />
                        </ListItemIcon>
                        <ListItemText>Priority check-in</ListItemText>
                      </ListItem>
                      <Divider light />
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText>4 checked bags (32kg)</ListItemText>
                      </ListItem>
                      <Divider light />
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="action" />
                        </ListItemIcon>
                        <ListItemText>Meals & beverages</ListItemText>
                      </ListItem>
                      <Divider light />
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="info" />
                        </ListItemIcon>
                        <ListItemText>Free seat reservation</ListItemText>
                      </ListItem>
                      <Divider light />
                      <ListItem>
                        <ListItemIcon>
                          <CommitIcon color="success" />
                        </ListItemIcon>
                        <ListItemText>Rebooking & refund</ListItemText>
                      </ListItem>
                    </List>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </StyledContainer>
  );
}
