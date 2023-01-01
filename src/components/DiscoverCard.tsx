import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Container, Grid, Typography, Divider } from "@mui/material";
import { iCities } from "../common/interfaces";


const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 2rem;
`;

const cities = [{
  city: "Munich",
  imageUrl: "https://tinyurl.com/5d9jyu8t",
  price: 125
},
{
  city: "New York",
  imageUrl: "https://tinyurl.com/ytuy79b3",
 price: 112
},
{
  city: "Berlin",
  imageUrl: "https://tinyurl.com/47srs8na",
 price: 105
},
{
  city: "Lagos",
  imageUrl: "https://tinyurl.com/5n8tsw3w",
 price: 213
},
{
  city: "London",
  imageUrl: "https://tinyurl.com/5ybt45k5",
 price: 119
},
{
  city: "Paris",
  imageUrl: "https://tinyurl.com/yaf6ybn4",
 price: 399
},

]




export function CityCard({city, imageURL,  price}: iCities) {
  return (
    <Card sx={{ maxWidth: 400, m:2 }}>
      <CardHeader title={city} />
      <CardMedia
        component="img"
        height="245"
        image={imageURL}
        alt="city image"
      />
      <CardContent>
        <Grid container justifyContent="right" alignItems="right">
        <Typography variant="h4" color="primary">
          €{price} 
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default function DiscoverCard() {
  return (
    <Box>
      <StyledContainer>
        <Typography variant="h5">
          Discover Magical Cities Around the World with Us!
        </Typography>
      </StyledContainer>
      <Divider variant="middle"/>
      <StyledContainer>
        <Grid container direction="row">
        {cities.map((item, index) => (
            <Grid item xs={12} md={4} lg={4} key={index}>
            <CityCard city={item.city} imageURL={item.imageUrl} price={item.price} />
            </Grid>
        ))}
        </Grid>
      </StyledContainer>
    </Box>
  );
}
