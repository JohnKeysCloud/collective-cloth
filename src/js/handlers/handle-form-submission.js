import { formState } from "./handle-process-modal";
import { getAllElements } from "../../utilities/jabascriptz-utilities";

// > --------------------------------------------------------------

export async function makeFetchRequest(formDataJson) {
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataJson,
    });

    if (response.ok) {
      const result = await response.json();
      console.log(1, result.status);
      console.log(2, result.body);
    } else {
      console.error('Server-side error - form submission failed');
    }
  } catch (error) {
    console.error('Client-side error - form submission:', error);
  }
}

export function getFormattedFormData(textAreaFieldset, accumulatedFormData) {
  const formData = {}

  const textAreaData = collectFormData(textAreaFieldset);
  accumulatedFormData.updateFieldSetFormData(textAreaData, formState.getCurrentFieldSet());

  const allFieldDataObject = accumulatedFormData.get();
  console.log(allFieldDataObject);

  for (const fieldDataArray of Object.entries(allFieldDataObject)) {
    const fieldData = fieldDataArray[1];

    fieldData.forEach(([name, value]) => {
      formData.append(name, value);
      console.log(name, value);
    });
  }

  return formData;
}

export function collectFormData(currentFieldSetElement) {
  const fields = getAllElements('input, select, textarea', currentFieldSetElement);

  const formDataForCurrentFieldset = Array.from(fields)
    .filter(field => field.name) // ? Filter out fields without names
    .map(field => [field.name, field.value]);

  return formDataForCurrentFieldset;
}