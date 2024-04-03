import { getElement, toggleClass, addListener, removeListener, setDisabledState } from "../../utilities/jabascriptz-utilities";
import { formState } from "../handlers/handle-process-modal";
import { handleTextAreaCharacterCount } from "../handlers/handle-text-area-character-count";

export const dialogElements = {
  form: () => getElement('#start-the-process-form'),
  stepNumber: () => getElement('#step-number'),
  characterCount: () => getElement('#character-count'),
  submitButton: () => getElement('#submit-button'),
  previousButton: () => getElement('#previous-button'),
  nextButton: () => getElement('#next-button'),
  modal: () => getElement('#start-the-process-dialog'),
  closeButton: () => getElement('#dialog-close-button'),
  buttonContainer: () => getElement('#dialog-button-container'),
  fieldSet: (num) => getElement(`[data-field-set="${num}"]`),
  textArea: () => getElement('textarea'),
  nameField: () => getElement('#name'),
};

export const swapFieldSet = (oldFieldSet, newFieldSet) => {
  const setStepNumber = (number) => dialogElements.stepNumber().textContent = `Step ${number}`;

  toggleClass(
    dialogElements.fieldSet(oldFieldSet),
    'remove',
    'active'
  );

  toggleClass(
    dialogElements.fieldSet(newFieldSet),
    'add',
    'active'
  );

  setStepNumber(newFieldSet);
  formState.setNewFieldSet(newFieldSet);
};

export const toggleTextAreaComponents = (action) => {
  const textArea = dialogElements.textArea();
  const characterCount = dialogElements.characterCount();

  if (action === 'enable') {
    toggleClass(
      characterCount,
      'add',
      'active'
    );

    if (textArea.value.trim().length >= 123) {
      toggleClass(
        characterCount,
        'add',
        'valid'
      );

      setDisabledState(dialogElements.submitButton(), false);
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

    setDisabledState(dialogElements.submitButton(), true);
    removeListener(textArea, 'input', handleTextAreaCharacterCount);
  }
};
