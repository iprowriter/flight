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
import Chip from '@mui/material/Chip';
import CommitIcon from '@mui/icons-material/Commit';

const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 2rem;
`;

export default function Price() {
    return(
        <StyledContainer>
            <Paper elevation={2} sx={{ marginTop: "45px" }} >
               <Grid  padding={2}>
               <Grid  container direction="row" justifyContent="center"
                    alignItems="center" sx={{gap: 5}}>
                    <Grid item  xs={12} md={3} lg={3} sx={{backgroundColor: "aliceblue", margin: "2" }}>
                        <Box>
                            <Grid container marginY={2} justifyContent="center" alignItems="center">
                                <Typography variant="h5">
                                    <b>
                                        ECONOMY
                                    </b>
                                </Typography>
                            </Grid>
                            <Grid>
                            <Divider color="primary" />
                            </Grid>
                            <Grid container marginY={2} justifyContent="center" alignItems="center"  direction={"column"}>
                                <Box marginY={1}>
                                <Typography>
                                <Chip label="Berlin  -  London" color="success" variant="outlined" />
                                </Typography>
                                </Box>
                               <Box>
                               <Typography>
                                    12:30 - 15:30
                                </Typography>
                               </Box>
                                <Typography>
                                    2hrs
                                </Typography>
                                <Typography>
                                    LH2355 (Lufthansa)
                                </Typography>
                            </Grid>
                            <Grid container marginY={1} paddingX={1} justifyContent="center" alignItems="center">
                                <Typography variant="h3">
                                €110
                                </Typography>
                            </Grid>
                            <Grid marginY={1} paddingX={1}>
                                <Button variant="contained" fullWidth>Select</Button>
                            </Grid>
                            <Grid container marginY={4} justifyContent="center" alignItems="center">
                                <Typography>
                                    <i>
                                    Cheaper prices - same high quality
                                    </i>
                                </Typography>
                            </Grid>
                            <Grid>
                            <Divider variant="middle"/>
                            </Grid>
                            <Grid>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="warning" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="primary" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="action" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="info" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="success" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    
                                </List>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item  xs={12} md={3} lg={3}  sx={{backgroundColor: "aliceblue", margin: "2" }}>
                    <Box>
                            <Grid container marginY={2} justifyContent="center" alignItems="center">
                                <Typography variant="h5">
                                    <b>
                                        PREMIUM
                                    </b>
                                </Typography>
                            </Grid>
                            <Grid>
                            <Divider color="primary" />
                            </Grid>
                            <Grid container marginY={2} justifyContent="center" alignItems="center"  direction={"column"}>
                                <Box marginY={1}>
                                <Typography>
                                <Chip label="Berlin  -  London" color="info" variant="outlined" />
                                </Typography>
                                </Box>
                               <Box>
                               <Typography>
                                    12:30 - 15:30
                                </Typography>
                               </Box>
                                <Typography>
                                    2hrs
                                </Typography>
                                <Typography>
                                    LH2355 (Lufthansa)
                                </Typography>
                            </Grid>
                            <Grid container marginY={1} paddingX={1} justifyContent="center" alignItems="center">
                                <Typography variant="h3">
                                €210
                                </Typography>
                            </Grid>
                            <Grid marginY={1} paddingX={1}>
                                <Button variant="contained" fullWidth>Select</Button>
                            </Grid>
                            <Grid container marginY={4} justifyContent="center" alignItems="center">
                                <Typography>
                                    <i>
                                    Great Choice - More for You
                                    </i>
                                </Typography>
                            </Grid>
                            <Grid>
                            <Divider variant="middle"/>
                            </Grid>
                            <Grid>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="warning" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="primary" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="action" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="info" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="success" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    
                                </List>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item  xs={12} md={3} lg={3} sx={{backgroundColor: "aliceblue", margin: "2" }} > 
                    <Box>
                            <Grid container marginY={2} justifyContent="center" alignItems="center">
                                <Typography variant="h5">
                                    <b>
                                        BUSINESS
                                    </b>
                                </Typography>
                            </Grid>
                            <Grid>
                            <Divider color="primary" />
                            </Grid>
                            <Grid container marginY={2} justifyContent="center" alignItems="center"  direction={"column"}>
                                <Box marginY={1}>
                                <Typography>
                                <Chip label="Berlin  -  London" color="warning" variant="outlined" />
                                </Typography>
                                </Box>
                               <Box>
                               <Typography>
                                    12:30 - 15:30
                                </Typography>
                               </Box>
                                <Typography>
                                    2hrs
                                </Typography>
                                <Typography>
                                    LH2355 (Lufthansa)
                                </Typography>
                            </Grid>
                            <Grid container marginY={1} paddingX={1} justifyContent="center" alignItems="center">
                                <Typography variant="h3">
                                €510
                                </Typography>
                            </Grid>
                            <Grid marginY={1} paddingX={1}>
                                <Button variant="contained" fullWidth>Select</Button>
                            </Grid>
                            <Grid container marginY={4} justifyContent="center" alignItems="center">
                                <Typography>
                                    <i>
                                    Travel with Class - All Inclusive
                                    </i>
                                </Typography>
                            </Grid>
                            <Grid>
                            <Divider variant="middle"/>
                            </Grid>
                            <Grid>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="warning" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="primary" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="action" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="info" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem>
                                        <ListItemIcon>
                                            <CommitIcon color="success" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Normal check-in
                                        </ListItemText>
                                    </ListItem>
                                    
                                </List>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>

               </Grid>
            </Paper>
        </StyledContainer>
    )
}