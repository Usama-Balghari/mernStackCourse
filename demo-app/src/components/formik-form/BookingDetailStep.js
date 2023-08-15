
// BookingDetailStep.js
import React from "react";
import { Field , ErrorMessage } from "formik";
import { TextField,
    // FormControlLabel, RadioGroup, Radio 
    } from "@mui/material";

const BookingDetailStep = ({ formProps }) => {
  return (
    <div>
      <Field
        as={TextField}
        name="to"
        label="To"
        fullWidth
        // Add other props and error handling using formProps
      />
        <ErrorMessage
       name="to"
       component="div"
       className="error"
       style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}
/>

      <Field
        as={TextField}
        name="from"
        label="From"
        fullWidth
        // Add other props and error handling using formProps
      />
       <ErrorMessage
       name="from"
       component="div"
       className="error"
       style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}
/>
      <Field
        as={TextField}
        name="adults"
        label="Adult"
        fullWidth
        // Add other props and error handling using formProps
      />
      <ErrorMessage
       name="adults"
       component="div"
       className="error"
       style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}
/>
      <Field
        as={TextField}
        name="child"
        label="Children"
        fullWidth
        // Add other props and error handling using formProps
      />
      <ErrorMessage
       name="child"
       component="div"
       className="error"
       style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}
/>
      <Field
        as={TextField}
        name="infant"
        label="Infant"
        fullWidth
        // Add other props and error handling using formProps
      />
      <ErrorMessage
       name="infant"
       component="div"
       className="error"
       style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}
/>
    
      {/* Add other fields for To, journey date, trip type, and traveller number */}
    </div>
  );
};

export default BookingDetailStep;
