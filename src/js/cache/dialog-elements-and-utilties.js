import { getElement, toggleClass, addListener, removeListener, setDisabledState } from "../../utilities/jabascriptz-utilities";
import { formState } from "../handlers/handle-process-modal";
import { handleTextAreaCharacterCount } from "../handlers/handle-text-area-character-count";

export const processDialogElements = {
  form: () => getElement('#start-the-process-form'),
  stepNumber: () => getElement('#step-number'),
  characterCount: () => getElement('#character-count'),
  submitButton: () => getElement('#submit-button'),
  previousButton: () => getElement('#previous-button'),
  nextButton: () => getElement('#next-button'),
  modal: () => getElement('#start-the-process-dialog'),
  closeButton: () => getElement('#process-dialog-close-button'),
  buttonContainer: () => getElement('#dialog-button-container'),
  fieldSet: (num) => getElement(`[data-field-set="${num}"]`),
  textArea: () => getElement('textarea'),
  nameField: () => getElement('#name'),
};

export const swapFieldSet = (oldFieldSet, newFieldSet) => {
  const setStepNumber = (number) => processDialogElements.stepNumber().textContent = `Step ${number}`;

  toggleClass(
    processDialogElements.fieldSet(oldFieldSet),
    'remove',
    'active'
  );

  toggleClass(
    processDialogElements.fieldSet(newFieldSet),
    'add',
    'active'
  );

  setStepNumber(newFieldSet);
  formState.setNewFieldSet(newFieldSet);
};

export const toggleTextAreaComponents = (action) => {
  const textArea = processDialogElements.textArea();
  const characterCount = processDialogElements.characterCount();

  if (action === 'enable') {
    toggleClass(
      characterCount,
      'add',
      'active'
    );

    if (textArea.value.trim().length >= 99) {
      toggleClass(
        characterCount,
        'add',
        'valid'
      );

      setDisabledState(processDialogElements.submitButton(), false);
    }

    addListener(textArea, 'input', handleTextAreaCharacterCount);
  } else if (action === 'disable') {
    toggleClass(
      characterCount,
      'remove',
      'active'
    )
    toggleClass(
      characterCount,
      'remove',
      'valid'
    )

    setDisabledState(processDialogElements.submitButton(), true);
    removeListener(textArea, 'input', handleTextAreaCharacterCount);
  }
};
