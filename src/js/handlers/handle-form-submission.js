import { formState } from "./handle-process-modal";
import { getAllElements } from "../../utilities/jabascriptz-utilities"; 
import { updateUIPostSubmission } from "../modifiers/modify-ui";

// 💭 --------------------------------------------------------------

export async function makeFetchRequest(formDataJson) {
  let result; 
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataJson,
    });

    try {
      result = await response.json(); 
    } catch (jsonError) {
      console.error('Failed to parse JSON response:', jsonError);
      result = { status: 'error', message: 'Failed to parse JSON response' };
      updateUIPostSubmission(result); 
      return { success: false, error: jsonError.message };
    }
    
    if (response.status === 200) {
      updateUIPostSubmission(result); 
      return { success: true, data: result };
    } else if (response.status === 400) {
      console.error('Request error:', result.error);
      updateUIPostSubmission({ status: 'error', message: 'Invalid request sent' });
      return { success: false, error: 'Invalid request' };
    } else {
      console.error('Unexpected response status:', response.status);
      updateUIPostSubmission({ status: 'error', message: 'An unexpected error occurred' });
      return { success: false, error: response.statusText };
    }
  } catch (error) {
    console.error('Client-side error - form submission:', error);
    let errorMessage = error.message;
    if (error.message.includes('NetworkError')) {
      errorMessage = 'Please check your internet connection and try again.';
    }
    updateUIPostSubmission(error.message);
    return { success: false, error: errorMessage };
  }
}

export function getFormattedFormData(textAreaFieldset, accumulatedFormData) {
  const formData = {}

  const textAreaData = collectFormData(textAreaFieldset);
  accumulatedFormData.updateFieldSetFormData(textAreaData, formState.getCurrentFieldSet());

  const allFieldDataObject = accumulatedFormData.get();

  for (const fieldDataArray of Object.entries(allFieldDataObject)) {
    const fieldData = fieldDataArray[1];

    fieldData.forEach(([name, value]) => {
      formData[name] = value;
    });
  }

  return formData;
}

export function collectFormData(currentFieldSetElement) {
  const fields = getAllElements('input, select, textarea', currentFieldSetElement);

  const formDataForCurrentFieldset = Array.from(fields)
    .filter(field => field.name) // ? Filter out fields without names
    .map(field => {
      // ? Trim the value for inputs and textareas; leave others as is
      const valueToUse = (field.tagName === 'INPUT' || field.tagName === 'TEXTAREA') ? field.value.trim() : field.value;
      return [field.name, valueToUse];
    });

  return formDataForCurrentFieldset;
}