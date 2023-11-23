// components/Form.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFieldValue, toggleFieldVisibility, submitForm } from "../redux/action";
// import { useConditionalLogic, useFormValidation } from "../hooks";
import useConditionalLogic from "../hooks/useConditionalLogic";
import useFormValidation from "../hooks/useFormValidation";

function Form() {
 const dispatch = useDispatch();
 const formData = useSelector((state) => state.formData);

 const isEmployedVisible = useConditionalLogic(formData, "employed");

 const { isFormValid, errors } = useFormValidation(formData);

 const handleFieldChange = (fieldName, value) => {
  dispatch(updateFieldValue(fieldName, value));
 };

 const handleEmploymentToggle = (value) => {
  dispatch(toggleFieldVisibility("employed", value === "Yes"));
 };

 const handleSubmit = () => {
  if (isFormValid) {
   dispatch(submitForm(formData));
  } else {
   console.error("Form validation failed. Please check the fields.");
  }
 };

 return (
  <div>
   <label>Are you employed?</label>
   <select onChange={(e) => handleEmploymentToggle(e.target.value)}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
   </select>

   {isEmployedVisible && (
    <div>
     <label>Company Name</label>
     <input type="text" value={formData.companyName} onChange={(e) => handleFieldChange("companyName", e.target.value)} />
    </div>
   )}

   <button onClick={handleSubmit}>Submit</button>

   {errors.length > 0 && (
    <div>
     <p>Validation Errors:</p>
     <ul>
      {errors.map((error, index) => (
       <li key={index}>{error}</li>
      ))}
     </ul>
    </div>
   )}
  </div>
 );
}

export default Form;
