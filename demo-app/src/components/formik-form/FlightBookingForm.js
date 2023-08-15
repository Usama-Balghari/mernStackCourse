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

// const FormValidationSchema = Yup.object().shape({

//   to: Yup.string().required("Required"),
//   from: Yup.string().required("Required"),
//   adults: Yup.string().required("Required"),
//   child: Yup.string().required("Required"),
//   infant: Yup.string().required("Required"),

// });


const FormValidationSchema = Yup.object().shape({
  to: Yup.string().required("Destination is required"),
  from: Yup.string().required("Departure location is required"),
  journeyDate: Yup.string().required("Journey date is required"),
  returnDate: Yup.string().required("Return date is required"),
  adults: Yup.number()
    .required("Number of adults is required")
    .typeError("Please enter a valid number")
    .integer("Number of adults must be an integer")
    .min(1, "Number of adults must be at least 1")
    .test(
      'is-greater-than-child',
      'Number of adults must be greater than number of children',
      function (value) {
        const { child } = this.parent;
        return value > child;
      }
    ),

  child: Yup.number()
    .required("Number of children is required")
    .typeError("Please enter a valid number")
    .integer("Number of children must be an integer")
    .min(0, "Number of children must be at least 0"),
  infant: Yup.number()
    .required("Number of infants is required")
    .typeError("Please enter a valid number")
    .integer("Number of infants must be an integer")
    .min(0, "Number of infants must be at least 0"),
  airline: Yup.string().required("Airline is required"),
  cabin: Yup.string().required("Cabin is required"),
  basicFare: Yup.number()
    .required("Basic fare is required")
    .typeError("Please enter a valid number")
    .min(0, "Basic fare must be at least 0"),
  taxes: Yup.number()
    .required("Taxes are required")
    .typeError("Please enter a valid number")
    .min(0, "Taxes must be at least 0"),
  sc: Yup.number()
    .required("Service charge is required")
    .typeError("Please enter a valid number")
    .min(0, "Service charge must be at least 0"),
  discount: Yup.number()
    .required("Discount is required")
    .typeError("Please enter a valid number")
    .min(0, "Discount must be at least 0"),
  totalAmount: Yup.number()
    .required("Total amount is required")
    .typeError("Please enter a valid number")
    .min(0, "Total amount must be at least 0"),
  gender: Yup.string().required("Gender is required"),
  firstName: Yup.string().required("First name is required"),
  surName: Yup.string().required("Last name is required"),
  dob: Yup.string().required("Date of birth is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  phone: Yup.string().required("Phone number is required"),
  pnr: Yup.string().required("PNR is required"),
  ticket: Yup.string().required("Ticket number is required"),
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
