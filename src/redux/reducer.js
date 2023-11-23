// redux/reducers.js
const initialState = {
 formData: {
  employed: "No",
  companyName: "",
 },
};

const rootReducer = (state = initialState, action) => {
 switch (action.type) {
  case "UPDATE_FIELD_VALUE":
   return {
    ...state,
    formData: {
     ...state.formData,
     [action.payload.fieldName]: action.payload.value,
    },
   };
  case "TOGGLE_FIELD_VISIBILITY":
   return {
    ...state,
    formData: {
     ...state.formData,
     [action.payload.fieldName]: action.payload.isVisible ? "Yes" : "No",
    },
   };
  case "SUBMIT_FORM":
   // Handle form submission logic here
   console.log("Form submitted:", action.payload);
   return state;
  default:
   return state;
 }
};

export default rootReducer;
