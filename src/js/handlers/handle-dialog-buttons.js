
import { addListener, getAllElements, removeListener, setDisabledState, toggleClass } from "../../utilities/jabascriptz-utilities";
import { accumulatedFormDataFactory } from "../factories";
import { collectFormData, getFormattedFormData, makeFetchRequest } from "./handle-form-submission";
import { dialogElements, swapFieldSet, toggleTextAreaComponents } from "../cache/dialog-elements-and-utilties";
import { formState } from "./handle-process-modal";
import { togglePhoneInputSanitizationListener } from "./handle-telephone-input-sanitization";
import { toggleSelectPlaceholderChangeListener } from "./handle-select-place-holders";

// > --------------------------------------------------------------

let accumulatedFormData = accumulatedFormDataFactory();

function handlePreviousButtonClick(previousFieldSet, toggleTextAreaComponents) {
  const previousButton = dialogElements.previousButton();
  const nextButton = dialogElements.nextButton();

  swapFieldSet(previousFieldSet, formState.decrementFieldSet());

  if (formState.getCurrentFieldSet() === 1) {
    setDisabledState(previousButton, true);
  }

  if (formState.getCurrentFieldSet() !== 3) setDisabledState(nextButton, false);
  if (previousFieldSet === 3) toggleTextAreaComponents('disable');
}

function handleNextButtonClick(previousFieldSet, toggleTextAreaComponents, currentFieldSetElement) {
  const checkFieldSetValidity = (currentFieldSet) => {
    let allFieldsetsValid = true; // ? assume

    const fields = getAllElements('input, select, textarea', currentFieldSet);

    fields.forEach(field => {
      const highlightInvalidField = () => {
        const animationEndCallback = () => {
          toggleClass(
            field,
            'remove',
            'is-invalid'
          );
          removeListener(
            field.closest('.field-element-container'),
            'animationend',
            animationEndCallback
          );
        }

        field.classList.add('is-invalid');

        addListener(
          field.closest('.field-element-container'),
          'animationend',
          animationEndCallback
        );

        allFieldsetsValid = false;
      }

      const isInput = field.tagName === 'INPUT';
      const isSelect = field.tagName === 'SELECT';

      if (isInput) {
        const pattern = field.getAttribute('data-pattern') ? new RegExp(field.getAttribute('data-pattern')) : null;
        const inputValue = field.value.trim();

        const hasPatternAndIsRequired = pattern && field.required;
        const hasPatternAndHasValue = pattern && inputValue !== '';

        const isNumberInput = field.getAttribute('type') === 'number';

        if (hasPatternAndIsRequired || hasPatternAndHasValue) {
          const inputIsValid = pattern.test(field.value.trim());

          if (!inputIsValid) {
            highlightInvalidField();
          }
        } else if (isNumberInput) {
          if (!field.checkValidity()) {
            highlightInvalidField();
          }
        }
      } else if (isSelect) {
        if (!field.value) {
          highlightInvalidField();
        }
      }
    });

    return allFieldsetsValid;
  };

  const previousButton = dialogElements.previousButton();
  const nextButton = dialogElements.nextButton();

  if (!checkFieldSetValidity(currentFieldSetElement)) return; // TODO: add error message here

  const dataFromCurrentFieldSet = collectFormData(currentFieldSetElement);
  accumulatedFormData.updateFieldSetFormData(dataFromCurrentFieldSet, formState.getCurrentFieldSet());

  swapFieldSet(previousFieldSet, formState.incrementFieldSet());

  if (formState.getCurrentFieldSet() !== 1) setDisabledState(previousButton, false);
  if (formState.getCurrentFieldSet() === 3) {
    setDisabledState(nextButton, true);
    toggleTextAreaComponents('enable');
  }
}

export function handleDialogButtons(event) {
  const button = event.target.tagName === 'BUTTON';

  if (!button) return;

  const toggleFormListeners = (currentFieldSet) => {
    (currentFieldSet === 1)
      ? togglePhoneInputSanitizationListener('add')
      : togglePhoneInputSanitizationListener('remove');

    (currentFieldSet === 2)
      ? toggleSelectPlaceholderChangeListener('add')
      : toggleSelectPlaceholderChangeListener('remove');
  };

  const formatDataForSubmission = (event, currentFieldSetElement) => {
    event.preventDefault();

    const fullFormData = getFormattedFormData(currentFieldSetElement, accumulatedFormData);

    return JSON.stringify(fullFormData);
  }

  const currentFieldSet = formState.getCurrentFieldSet();
  const currentFieldSetElement = dialogElements.fieldSet(currentFieldSet);

  const clickedButton = event.target;
  const previousButton = dialogElements.previousButton();
  const nextButton = dialogElements.nextButton();
  const submitButton = dialogElements.submitButton();

  if (clickedButton === nextButton) {
    handleNextButtonClick(currentFieldSet, toggleTextAreaComponents, currentFieldSetElement);
    toggleFormListeners(currentFieldSet + 1);
  } else if (clickedButton === previousButton) {
    handlePreviousButtonClick(currentFieldSet, toggleTextAreaComponents);
    toggleFormListeners(currentFieldSet - 1);
  } else if (clickedButton === submitButton) {
    const dataJSON = formatDataForSubmission(event, currentFieldSetElement);
    makeFetchRequest(dataJSON);
  }
  (currentFieldSet === 1)
    ? togglePhoneInputSanitizationListener('add')
    : togglePhoneInputSanitizationListener('remove');
}