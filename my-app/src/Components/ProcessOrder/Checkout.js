import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import { useState } from "react";
import useStyles from "./styles";
import AddressForm from "../../Pagescheck/AddressForm";
import PaymentForm from "../../Pagescheck/PaymentForm";
import Confirmation from "../../Pagescheck/Confirmation";
import { useStateValue } from "../../StateProvider";

const steps = ["Shipping address", "Payment details"];
const Checkout = () => {
  const classes = useStyles();
  
  const [activeStep, setActivestep] = useState(0);
  const [{ paymentMessage }, dispatch] = useStateValue();

  const nextStep = () => setActivestep((prevActivestep) => prevActivestep + 1);
  const backStep = () => setActivestep((prevActivestep) => prevActivestep - 1);

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm nextStep={nextStep} />
    ) : (
      <PaymentForm backStep={backStep} nextStep={nextStep} />
    );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component='h1' variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation message={paymentMessage} />
          ) : (
            <Form step={activeStep} />
          )}
        </Paper>
      </main>
    </div>
  );
};

export default Checkout;
