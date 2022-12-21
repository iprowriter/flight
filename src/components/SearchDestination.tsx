import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import DestinationList from './DestinationList';

const StyledBox = styled(Box)`
  background-color: aliceblue;
  color: darkslategray;
  padding: 2rem;
  text-align: center;
`;



export default function SearchDestination() {
  const [focus, setFocus] = React.useState(false)

  
  return (
    <StyledBox>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Depart From" variant="filled" onFocus={() => setFocus(true)} />
      <TextField id="filled-basic" label="Arrive At" variant="filled" onFocus={() => setFocus(true)}/>
      <Button variant="contained" sx={{height: '7ch'}} onClick={() => setFocus(false)} >Search Flights</Button>
    </Box>
    {focus &&  <DestinationList/>
}
    </StyledBox>
  );
}