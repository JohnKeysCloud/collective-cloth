export function createFormState() {
  let currentFieldSet = 1;

  return {
    getCurrentFieldSet: () => currentFieldSet,
    setNewFieldSet: (index) => currentFieldSet = index,
    incrementFieldSet: () =>  ++currentFieldSet,
    decrementFieldSet: () => --currentFieldSet
  }
}

export function accumulatedFormDataFactory() {
  let accumulatedFormData = {};

  return {
    updateFieldSetFormData: (formDataArray, fieldSet) => {
      console.log(`Updating fieldSet: ${fieldSet}`);
      accumulatedFormData[fieldSet] = formDataArray;
    },
    get: () => accumulatedFormData,
    clear: () => accumulatedFormData = {},
    print: () => {
      Object.entries(accumulatedFormData).forEach(([key, formDataArray]) => {
        console.log(`Fieldset: ${key}`);
        formDataArray.forEach(([fieldKey, fieldValue]) => {
          console.log(`${fieldKey}: ${fieldValue}`);
        });
      });
    }
  };
}