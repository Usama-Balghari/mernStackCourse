// FlightBookingForm.js
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Stepper, Step, StepLabel, Button, Alert } from "@mui/material";
import BookingDetailStep from "./BookingDetailStep.js";
import FlightDetailStep from "./FlightDetailStep .js";
import TravellerInfoStep from "./TravellerInfoStep .js";
import ConfirmBookingStep from "./ConfirmBookingStep .js";



const steps = [
  "Booking Details",
  "Flight Details",
  "Personnel Information",
  "Confirm Booking",
];

const FormInitialValues = {
  to: "",
  from: "",
  journeyDate: "",
  returnDate: "",
  adults: "",
  child: "",
  infant: "",

  airline: "",
  cabin: "",
  basicFare: "",
  taxes: "",
  sc: "",
  discount: "",
  totalAmount: "",


  gender: "",
  firstName: "",
  surName: "",
  dob: "",
  email: "",
  phone: "",
  pnr: "",
  ticket: "",

};

const FormValidationSchema = Yup.object().shape({

  to: Yup.string().required("Required"),
  from: Yup.string().required("Required"),
  adults: Yup.string().required("Required"),
  child: Yup.string().required("Required"),
  infant: Yup.string().required("Required"),

});


  const handleSubmitForm = () => {
   console.log("Form Is Submitted")
   alert("Form Is Submitted")
  };

const FlightBookingForm = () => {
  
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex, formProps) => {
    switch (stepIndex) {
      case 0:
        return <BookingDetailStep formProps={formProps} />;
      case 1:
        return <FlightDetailStep formProps={formProps} />;
      case 2:
        return <TravellerInfoStep formProps={formProps} />;
      case 3:
        return <ConfirmBookingStep formProps={formProps} />;
    }
  };

  return (
    <Formik
      initialValues= {FormInitialValues}
      validationSchema={FormValidationSchema}
      onSubmit={handleSubmitForm}
    >
      {(formProps) => (
        <Form>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {getStepContent(activeStep, formProps)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mt: 3, mr: 1 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                sx={{ mt: 3 }}
              >
                {activeStep === steps.length ? "Confirm" : "Next"}
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FlightBookingForm;
