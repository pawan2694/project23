// redux/actions.js
export const updateFieldValue = (fieldName, value) => ({
 type: "UPDATE_FIELD_VALUE",
 payload: { fieldName, value },
});

export const toggleFieldVisibility = (fieldName, isVisible) => ({
 type: "TOGGLE_FIELD_VISIBILITY",
 payload: { fieldName, isVisible },
});

export const submitForm = (formData) => ({
 type: "SUBMIT_FORM",
 payload: formData,
});
