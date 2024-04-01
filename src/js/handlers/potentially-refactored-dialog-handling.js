// Utility for memoizing element queries to avoid repeated DOM lookups
const getElement = (() => {
  const cache = {};
  return (id) => {
    if (!cache[id]) {
      cache[id] = document.getElementById(id);
    }
    return cache[id];
  };
})();

// Function to toggle button disabled state
const toggleButtonState = (buttonId, state) => {
  const button = getElement(buttonId);
  button.disabled = state;
};

// Function to toggle class for an element
const toggleClass = (elementId, className, action = 'add') => {
  const element = getElement(elementId);
  element.classList[action](className);
};

// Modular function for resetting specific UI elements
const resetUIElements = () => {
  toggleClass('character-count', 'active', 'remove');
  toggleClass('character-count', 'valid', 'remove');
  getElement('character-count').textContent = '0/222';
  toggleButtonState('submit-button', true);
  toggleButtonState('previous-button', true);
  toggleButtonState('next-button', false);
};

// Simplified resetModal function
function resetModal() {
  getElement('start-the-process-form').reset();
  if (formState.currentFieldSet !== 1) {
    toggleClass(`[data-field-set="${formState.currentFieldSet}"]`, 'active', 'remove');
    toggleClass('field-set-one', 'active');
    resetUIElements();
    formState.currentFieldSet = 1;
    getElement('step-number').textContent = `Step ${formState.currentFieldSet}`;
  }
}

// Refactored validity checker
function checkFieldSetValidity(currentFieldSet) {
  const fields = currentFieldSet.querySelectorAll('input, select, textarea');
  return Array.from(fields).every(validateField);
}

// Field validation (extracted for clarity)
function validateField(field) {
  const fieldElementContainer = field.closest('.field-element-container');
  // Validation logic...
}

// Simplified text area character count handler
function handleTextAreaCharacterCount() {
  const submitButton = document.getElementById('submit-button');
  const characterCount = document.getElementById('character-count');

  const textAreaCharacterCount = this.value.trim().length;
  const maxCharacterCount = 222;

  characterCount.textContent = `${textAreaCharacterCount}/${maxCharacterCount}`;

  if (textAreaCharacterCount >= 222) {
    submitButton.disabled = false;

    characterCount.classList.add('valid');
  } else {
    submitButton.disabled = true;

    if (characterCount.classList.contains('valid')) {
      characterCount.classList.remove('valid');
    }
  }
}

// Centralized handler for dialog buttons to manage state transitions
function handleDialogButtons(e) {
  if (e.target.dataset.element !== 'button') return;

  const button = e.target;
  const previousButtonClicked = button.textContent === 'previous';
  const nextButtonClicked = button.textContent === 'next';

  if (nextButtonClicked) {
    const currentFieldSet = document.querySelector(`[data-field-set="${formState.currentFieldSet}"]`);

    if (!checkFieldSetValidity(currentFieldSet)) return; // TODO: add error message here

    currentFieldSet.classList.remove('active');
    formState.currentFieldSet += 1;

    if (formState.currentFieldSet === 3) {
      const textArea = document.querySelector('textarea');

      const characterCount = document.getElementById('character-count');
      characterCount.classList.add('active');

      if (textArea.value.trim().length >= 222) {
        const submitButton = document.getElementById('submit-button');
        submitButton.disabled = false;
      }

      textArea.addEventListener('input', handleTextAreaCharacterCount);
    }

  } else if (previousButtonClicked) {
    const currentFieldSet = document.querySelector(`[data-field-set="${formState.currentFieldSet}"]`)

    if (formState.currentFieldSet === 3) {
      const characterCount = document.getElementById('character-count');
      characterCount.classList.remove('active');

      console.log(characterCount.textContent);

      if (document.querySelector('#submit-button').disabled !== true) {
        document.querySelector('#submit-button').disabled = true;
      }
    }
    currentFieldSet.classList.remove('active');
    formState.currentFieldSet -= 1;

  }

  const previousButton = document.getElementById('previous-button');
  if (formState.currentFieldSet === 1) {
    previousButton.disabled = true;
  } else {
    previousButton.disabled = false;
  }

  const nextButton = document.getElementById('next-button');
  if (formState.currentFieldSet === 3) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }

  const stepNumber = document.getElementById('step-number');
  stepNumber.textContent = `Step ${formState.currentFieldSet}`;

  const newCurrentFieldSet = document.querySelector(`[data-field-set="${formState.currentFieldSet}"]`);
  newCurrentFieldSet.classList.add('active');
}

// Function for closing the modal with cleanup
function closeModal() {
  const startTheProcessModal = document.getElementById('start-the-process-dialog');
  const closeModalButton = document.getElementById('dialog-close-button');

  startTheProcessModal.classList.remove('closing');
  startTheProcessModal.removeEventListener('animationend', closeModal);
  startTheProcessModal.close();

  toggleDialogTextAnimationClass();

  closeModalButton.removeEventListener('click', initiateModalClose);
  resetModal();
}

function initiateModalClose() {
  const startTheProcessModal = document.getElementById('start-the-process-dialog');

  startTheProcessModal.classList.add('closing');
  startTheProcessModal.addEventListener('animationend', closeModal);
}

function toggleDialogTextAnimationClass() {
  const dialogSplitText = document.querySelectorAll('#dialog-heading .letter');

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

function focusOnNameField() {
  getElement('name')?.focus();
}

export function showProcessModal() {
  const startTheProcessModal = getElement('start-the-process-dialog');
  startTheProcessModal.showModal();
  focusOnNameField();
  toggleDialogTextAnimationClass();

  const closeModalButton = getElement('dialog-close-button');
  closeModalButton.addEventListener('click', initiateModalClose);

  const modalButtonContainer = getElement('dialog-button-container');
  modalButtonContainer.addEventListener('click', handleDialogButtons);
}