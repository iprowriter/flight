import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import { Button, Container, Grid } from "@mui/material";

const StyledContainer = styled(Container)`
  margin-top: 10px;
  padding: 2rem;
`;


export default function DestinationList() {
  let country = [
    "Germany",
    "Australia",
    "United Kingdom",
    "Nigeria",
    "France",
    "USA",
    "Poland",
    "Canada",
    "Ghana",
    "Ireland",
    "Netherland",
    "Spain",
    "Austria",
    "Qatar",
    "Saudi Arabia",
    "Brazil",
    "Bahamas",
    "China",
    "North Korea",
  ];

  return (
    <StyledContainer>
      <Paper elevation={2}>
        <Box>
          <List>
            <Grid container direction="row">
              {country.map((item) => (
                <Grid item xs={6} md={4} lg={4}>
                  <ListItem> <Button>{item}</Button> </ListItem>
                </Grid>
              ))}
            </Grid>
          </List>
        </Box>
      </Paper>
    </StyledContainer>
  );
}
