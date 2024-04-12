// * HANDLERS
import { handleInitialDOMInteractivity } from './js/meta/handle-initial-dom-interactivity.js';

// * MARKUP
import { createDOM } from './js/meta/create-dom.js';

// * MODIFIERS
import { modifyDOM } from './js/meta/modify-dom.js';

// > --------------------------------------------------------------

function appInit() {
  createDOM();
  modifyDOM();
  handleInitialDOMInteractivity();
}

appInit();

// > --------------------------------------------------------------

// 💭 playGround

function createResponseModal(resultStatus) {
  const responseModal = document.createElement('dialog');
  responseModal.setAttribute('id', 'response-modal');

  const responseDialogCloseButton = document.createElement('button');
  responseDialogCloseButton.setAttribute('id', 'response-dialog-close-button');
  responseDialogCloseButton.setAttribute('type', 'button');
  responseDialogCloseButton.setAttribute('aria-label', 'Close Dialog');
  responseDialogCloseButton.textContent = '✕';

  const responseDialogText = document.createElement('p');
  responseDialogText.setAttribute('id', 'response-modal-text');
  responseDialogText.textContent = 'Submission confirmed. Stand by for imminent contact. Your cooperation with the collective is appreciated. 🤖';

  const responseDialogImage = document.createElement('img');
  responseDialogImage.setAttribute('id', 'response-modal-image');
  responseDialogImage.setAttribute('src', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e7facb0b-5c97-4235-9e4c-b756b8a5fe26/dcmqphz-691e6781-8613-4994-9d68-c033ffa6280b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U3ZmFjYjBiLTVjOTctNDIzNS05ZTRjLWI3NTZiOGE1ZmUyNlwvZGNtcXBoei02OTFlNjc4MS04NjEzLTQ5OTQtOWQ2OC1jMDMzZmZhNjI4MGIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5gTYIE1QslSwFPgKVI5wIuh8Fiy3BHfelkcR1jHkXVU');

  const responseModalContentContainer = document.createElement('div');
  responseModalContentContainer.setAttribute('id', 'response-modal-content-container');
  responseModalContentContainer.append(
    responseDialogCloseButton,
    responseDialogText,
    responseDialogImage,
  );

  responseModal.appendChild(responseModalContentContainer);

  return responseModal;
}

const fuckMe = createResponseModal();
document.body.appendChild(fuckMe);

fuckMe.showModal();