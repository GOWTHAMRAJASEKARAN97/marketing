import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Container,
} from "@mui/material";
import { styled } from "@mui/material";

// Styled components
const StyledContainer = styled(Container)({
  marginTop: 40,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledStepContent = styled("div")({
  width: "100%",
  marginTop: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledButtonGroup = styled("div")({
  marginTop: 20,
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: 300,
});

const StyledButton = styled(Button)(({ theme, primary }) => ({
  margin: theme.spacing(1),
  backgroundColor: primary
    ? theme.palette.primary.main
    : theme.palette.common.white,
  color: primary ? theme.palette.common.white : theme.palette.primary.main,
  "&:hover": {
    backgroundColor: primary
      ? theme.palette.primary.dark
      : theme.palette.primary.light,
  },
}));

// Example steps
const Step1 = () => {
  const form1 = useForm();
  const { handleSubmit } = form1;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6">Step 1</Typography>
      {/* Your form fields */}
      <StyledButton type="submit">Next</StyledButton>
    </form>
  );
};

const Step2 = () => {
  const form2 = useForm();
  const { handleSubmit } = form2;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6">Step 2</Typography>
      {/* Your form fields */}
      <StyledButton type="submit">Next</StyledButton>
    </form>
  );
};

const Step3 = () => {
  const form3 = useForm();
  const { handleSubmit } = form3;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6">Step 3</Typography>
      {/* Your form fields */}
      <StyledButton primary type="submit">
        Submit
      </StyledButton>
    </form>
  );
};

const steps = [
  { label: "Register", component: <>Form 1</> },
  { label: "Step 2", component: <>Form 2</> },
  { label: "Step 3", component: <>Form 3</> },
];

const Registration = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const isLastStep = activeStep === steps.length - 1;

  return (
    <StyledContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Registration
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <StyledStepContent>
        <FormProvider {...steps[activeStep].component.props}>
          {steps[activeStep].component}
        </FormProvider>
        <StyledButtonGroup>
          <StyledButton disabled={activeStep === 0} onClick={handleBack}>
            Back
          </StyledButton>
          <StyledButton
            primary
            variant="contained"
            onClick={isLastStep ? () => {} : handleNext}
          >
            {isLastStep ? "Submit" : "Next"}
          </StyledButton>
        </StyledButtonGroup>
      </StyledStepContent>
    </StyledContainer>
  );
};

export default Registration;
