// FlightDetailStep.js
import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";

const FlightDetailStep = ({ formProps }) => {
  return (
    <div>
      <Field
        as={TextField}
        name="airline"
        label="Airline Name"
        fullWidth
        // Add other props and error handling using formProps
      />
       <ErrorMessage
       name="airline"
       component="div"
       className="error"
       style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}
/>
      {/* Add other fields for flight fare, etc. */}
    </div>
  );
};

export default FlightDetailStep;
