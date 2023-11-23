// hooks/useFormValidation.js
import { useSelector } from "react-redux";

const useFormValidation = (formData) => {
 const errors = [];

 // Implement your validation logic here
 // Example: Company Name should not be empty if shown
 if (formData.employed === "Yes" && formData.companyName.trim() === "") {
  errors.push("Company Name is required.");
 }

 return {
  isFormValid: errors.length === 0,
  errors,
 };
};

export default useFormValidation;
