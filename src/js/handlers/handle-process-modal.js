import { createFormState } from "./factories";

// > --------------------------------------------------------------

// * HELPER UTILITIES
const getElement = (selector, scope = document) => scope.querySelector(selector);
const getAllElements = (selector, scope = document) => scope.querySelectorAll(selector);
const addListener = (element, event, handler) => element.addEventListener(event, handler);
const removeListener = (element, event, handler) => element.removeEventListener(event, handler);
const toggleClass = (element, action, className) => element.classList[action](className);
const setDisabledState = (element, state) => element.disabled = state;

// * MODULE DEPENDENT UTILITIES
const swapFieldSet = (oldFieldSet, newFieldSet) => {
  const setStepNumber = (number) => elements.stepNumber().textContent = `Step ${number}`;

  toggleClass(
    elements.fieldSet(oldFieldSet),
    'remove',
    'active'
  );

  toggleClass(
    elements.fieldSet(newFieldSet),
    'add',
    'active'
  );

  setStepNumber(newFieldSet);
  formState.setNewFieldSet(newFieldSet);
}
const toggleTextAreaComponents = (action) => {
  const textArea = elements.textArea();
  const characterCount = elements.characterCount();

  if (action === 'enable') {
    toggleClass(
      characterCount,
      'add',
      'active'
    );

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

    setDisabledState(elements.submitButton(), true);
    removeListener(textArea, 'input', handleTextAreaCharacterCount);
  }
}

// > --------------------------------------------------------------

const formState = createFormState();

const elements = {
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

// > --------------------------------------------------------------

function resetModal() {
  const resetCharacterCount = () => {
    elements.characterCount().textContent = '0/222'
  };

  const currentFieldSet = formState.getCurrentFieldSet();

  elements.form().reset();
  resetCharacterCount();

  if (currentFieldSet !== 1) {
    const resetNavigationButtons = () => {
      setDisabledState(elements.previousButton(), true);
      setDisabledState(elements.nextButton(), false);
    }

    resetNavigationButtons();
    swapFieldSet(currentFieldSet, 1);

    if (currentFieldSet === 3) {
      setDisabledState(elements.submitButton(), true);
    }
  }

  toggleTextAreaComponents('disable');
}

function checkFieldSetValidity(currentFieldSet) {
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
}

function handleTextAreaCharacterCount(event) {
  const setCharacterCount = () => characterCount.textContent = `${textAreaCharacterCount}/${minCharacterCount}`;

  const textArea = event.target;
  const submitButton = elements.submitButton();
  const characterCount = elements.characterCount();

  const textAreaCharacterCount = textArea.value.trim().length;
  const minCharacterCount = 222;
  const isTextAreaValid = textAreaCharacterCount >= minCharacterCount;

  setCharacterCount();

  if (isTextAreaValid) {
    setDisabledState(submitButton, false);
    toggleClass(
      characterCount,
      'add',
      'valid'
    );
  } else {
    setDisabledState(submitButton, true);
    toggleClass(
      characterCount,
      'remove',
      'valid'
    );
  }
}

// TODO: DRY Principle: There's some repetitive code for enabling/disabling buttons in both handlePreviousButtonClick and handleNextButtonClick. Consider creating a separate function to manage button states based on the current field set.

function handlePreviousButtonClick(previousFieldSet, toggleTextAreaComponents) {
  const previousButton = elements.previousButton();
  const nextButton = elements.nextButton();

  swapFieldSet(previousFieldSet, formState.decrementFieldSet());

  if (formState.getCurrentFieldSet() === 1) {
    setDisabledState(previousButton, true);
  }
  
  if (formState.getCurrentFieldSet() !== 3) setDisabledState(nextButton, false);
  if (previousFieldSet === 3) toggleTextAreaComponents('disable');
}

function handleNextButtonClick(previousFieldSet, toggleTextAreaComponents, currentFieldSetElement) {
  const previousButton = elements.previousButton();
  const nextButton = elements.nextButton();

  if (!checkFieldSetValidity(currentFieldSetElement)) return; // TODO: add error message here

  swapFieldSet(previousFieldSet, formState.incrementFieldSet());
  
  if (formState.getCurrentFieldSet() === 3) {
    setDisabledState(nextButton, true);
  } 
  
  if (formState.getCurrentFieldSet() !== 1) setDisabledState(previousButton, false);
  if (formState.getCurrentFieldSet() === 3) {
    toggleTextAreaComponents('enable');
  }
}

function handleDialogButtons(e) {
  const button = e.target.tagName === 'BUTTON';

  if (!button) return;
  const currentFieldSet = formState.getCurrentFieldSet();
  const currentFieldSetElement = elements.fieldSet(currentFieldSet);

  const clickedButton = e.target;
  const previousButton = elements.previousButton();
  const nextButton = elements.nextButton();

  if (clickedButton === nextButton) {
    handleNextButtonClick(currentFieldSet, toggleTextAreaComponents, currentFieldSetElement); 
  } else if (clickedButton === previousButton) {
    handlePreviousButtonClick(currentFieldSet, toggleTextAreaComponents);
  }
}

function closeModal() {
  const startTheProcessModal = elements.modal();

  startTheProcessModal.classList.remove('closing');
  startTheProcessModal.removeEventListener('animationend', closeModal);
  startTheProcessModal.close();

  toggleDialogTextAnimationClass();
  removeListener(elements.closeButton(), 'click', initiateModalClose);
  resetModal();
}

function initiateModalClose() {
  const startTheProcessModal = elements.modal();

  toggleClass(
    startTheProcessModal,
    'add',
    'closing'
  );

  addListener(startTheProcessModal, 'animationend', closeModal);
}

function toggleDialogTextAnimationClass() {
  const dialogSplitText = getAllElements('#dialog-heading .letter');

  if (dialogSplitText[0].classList.contains('animate-letter')) {
    dialogSplitText.forEach(letter => {
      letter.classList.remove('animate-letter');
    });
  } else {
    dialogSplitText.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add('animate-letter');
      }, 123 * (index + 1));
    });
  }
}

export function showProcessModal() {
  const startTheProcessModal = elements.modal();

  startTheProcessModal.showModal();
  elements.nameField().focus();

  toggleDialogTextAnimationClass();

  addListener(elements.closeButton(), 'click', initiateModalClose);
  addListener(elements.buttonContainer(), 'click', handleDialogButtons);
}