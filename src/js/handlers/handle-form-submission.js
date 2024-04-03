import { formState } from "./handle-process-modal";
import { getAllElements } from "../../utilities/jabascriptz-utilities";
import submitForm from "../../../api/submit-form";

// > --------------------------------------------------------------

export function makeFetchRequest(formDataObject) {
  console.log(formDataObject);
}

export function getFormattedFormData(currentFieldSetElement, accumulatedFormData) {
  const formData = new FormData;

  const dataFromCurrentFieldSet = collectFormData(currentFieldSetElement);
  accumulatedFormData.updateFieldSetFormData(dataFromCurrentFieldSet, formState.getCurrentFieldSet());

  const allFieldDataObject = accumulatedFormData.get();
  console.log(allFieldDataObject);

  for (const fieldDataArray of Object.entries(allFieldDataObject)) {
    const fieldData = fieldDataArray[1];

    fieldData.forEach(([name, value]) => {
      formData.append(name, value);
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