import { addListener, getAllElements, removeListener, setDisabledState, toggleClass } from "../../utilities/jabascriptz-utilities";
import { createFormState } from "../factories";
import { dialogElements } from "../cache/dialog-elements-and-utilties";
import { handleDialogButtons } from './handle-dialog-buttons';
import { swapFieldSet, toggleTextAreaComponents } from "../cache/dialog-elements-and-utilties";
import { togglePhoneInputSanitizationListener } from './handle-telephone-input-sanitization';

// > --------------------------------------------------------------

const formState = createFormState();

function resetModal() {
  const resetCharacterCount = () => {
    dialogElements.characterCount().textContent = '0/123'
  };

  const currentFieldSet = formState.getCurrentFieldSet();

  dialogElements.form().reset();
  resetCharacterCount();

  if (currentFieldSet !== 1) {
    const resetNavigationButtons = () => {
      setDisabledState(dialogElements.previousButton(), true);
      setDisabledState(dialogElements.nextButton(), false);
    }

    resetNavigationButtons();
    swapFieldSet(currentFieldSet, 1);

    if (currentFieldSet === 3) {
      setDisabledState(dialogElements.submitButton(), true);
    }
  }
  getAllElements('select').forEach(select => toggleClass(select, 'remove', 'valid'));
  toggleDialogTextAnimationClass();
  togglePhoneInputSanitizationListener('remove');
  toggleTextAreaComponents('disable');
  removeListener(dialogElements.closeButton(), 'click', initiateModalClose);
}

function closeModal() {
  const startTheProcessModal = dialogElements.modal();

  startTheProcessModal.classList.remove('closing');
  startTheProcessModal.removeEventListener('animationend', closeModal);
  startTheProcessModal.close();

  resetModal();
}

function initiateModalClose() {
  const startTheProcessModal = dialogElements.modal();

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
  const startTheProcessModal = dialogElements.modal();

  startTheProcessModal.showModal();

  dialogElements.nameField().focus();
  togglePhoneInputSanitizationListener('add');

  toggleDialogTextAnimationClass();

  addListener(dialogElements.closeButton(), 'click', initiateModalClose);
  addListener(dialogElements.buttonContainer(), 'click', handleDialogButtons);
}

export {
  formState,
  showProcessModal
}