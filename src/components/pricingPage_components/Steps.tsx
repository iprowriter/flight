import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Button, Container } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Price from "./Price";
import UserForm from './UserForm';
import Checkout from "./Checkout";
import React from "react";

const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 2rem;
`;


export default function Steps() {
    //shows which step the user is on
    const steps = [
        "Select a Suitable Flight Package",
        "Provide Your Details",
        "Make Your Payment",
      ];
  
   
      //shows the components to be rendered   
   const stepsComponent = [<Price/>, <UserForm/>, <Checkout/>]

   //controls the steps to be rendered
   const [activeStep, setActiveStep] = React.useState<number>(2)

  return (
    <StyledContainer>
      <Paper elevation={0}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>
            {stepsComponent[activeStep]}
        </Box>
      </Paper>
    </StyledContainer>
  );
}
