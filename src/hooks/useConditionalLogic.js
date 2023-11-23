// hooks/useConditionalLogic.js
import { useSelector } from "react-redux";

const useConditionalLogic = (formData, fieldName) => {
 const fieldValue = useSelector((state) => state.formData[fieldName]);

 // Implement your logic for conditional visibility here
 // Example: Display if employed is 'Yes'
 return fieldValue === "Yes";
};

export default useConditionalLogic;
