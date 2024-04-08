import { formState } from "./handle-process-modal";
import { getAllElements } from "../../utilities/jabascriptz-utilities";

// > --------------------------------------------------------------

function updateUI(error) {
  if (!error) {
    // Update the UI to show the success

  } else {
    // Update the UI to show error
  }
}

export async function makeFetchRequest(formDataJson) {
  let result; // Define result outside so it's accessible throughout the function
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataJson,
    });

    result = await response.json(); // Attempt to parse the result early to use in both success and error handling

    if (response.ok) {
      updateUI(); // Consider passing success message or result data if needed
      return { success: true, data: result };
    } else {
      console.error('Server-side error - form submission failed');
      updateUI(result.message || response.statusText); // Now result is defined and can be used here
      return { success: false, error: result.message || response.statusText }; // Fallback to response.statusText if result.message is undefined
    }
  } catch (error) {
    console.error('Client-side error - form submission:', error);
    updateUI(error.message);
    return { success: false, error: error.message };
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
    .filter(field => field.name) // Filter out fields without names
    .map(field => {
      // Trim the value for inputs and textareas; leave others as is
      const valueToUse = (field.tagName === 'INPUT' || field.tagName === 'TEXTAREA') ? field.value.trim() : field.value;
      return [field.name, valueToUse];
    });

  return formDataForCurrentFieldset;
}