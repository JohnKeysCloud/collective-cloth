import { addListener, getAllElements, removeListener, setDisabledState, toggleClass } from "../../utilities/jabascriptz-utilities";
import { createFormState } from "../factories";
import { processDialogElements } from "../cache/dialog-elements-and-utilties";
import { handleDialogButtons } from './handle-dialog-buttons';
import { swapFieldSet, toggleTextAreaComponents } from "../cache/dialog-elements-and-utilties";
import { togglePhoneInputSanitizationListener } from './handle-telephone-input-sanitization';

// > --------------------------------------------------------------

// TODO: make this module generic/modular so it can be used for the 

const formState = createFormState();

function resetModal() {
  const resetCharacterCount = () => {
    processDialogElements.characterCount().textContent = '0/99'
  };

  const currentFieldSet = formState.getCurrentFieldSet();

  processDialogElements.form().reset();
  resetCharacterCount();

  if (currentFieldSet !== 1) {
    const resetNavigationButtons = () => {
      setDisabledState(processDialogElements.previousButton(), true);
      setDisabledState(processDialogElements.nextButton(), false);
    }

    resetNavigationButtons();
    swapFieldSet(currentFieldSet, 1);

    if (currentFieldSet === 3) {
      setDisabledState(processDialogElements.submitButton(), true);
    }
  }
  getAllElements('select').forEach(select => toggleClass(select, 'remove', 'valid'));
  toggleDialogTextAnimationClass();
  togglePhoneInputSanitizationListener('remove');
  toggleTextAreaComponents('disable');
  removeListener(processDialogElements.closeButton(), 'click', initiateModalClose);
}

function closeModal() {
  const startTheProcessModal = processDialogElements.modal();

  startTheProcessModal.classList.remove('closing');
  startTheProcessModal.removeEventListener('animationend', closeModal);
  startTheProcessModal.close();

  resetModal();
}

function initiateModalClose() {
  const startTheProcessModal = processDialogElements.modal();

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

function showProcessModal() {
  const startTheProcessModal = processDialogElements.modal();

  startTheProcessModal.showModal();

  processDialogElements.nameField().focus();
  togglePhoneInputSanitizationListener('add');

  toggleDialogTextAnimationClass();

  addListener(processDialogElements.closeButton(), 'click', initiateModalClose);
  addListener(processDialogElements.buttonContainer(), 'click', handleDialogButtons);
}

export {
  formState,
  showProcessModal
}