export function createResponseModal(resultStatus) {
  const responseModal = document.createElement('dialog');
  responseModal.setAttribute('id', 'response-dialog');

  const responseDialogCloseButton = document.createElement('button');
  responseDialogCloseButton.setAttribute('class', 'ds-close-button');
  responseDialogCloseButton.setAttribute('id', 'response-dialog-close-button');
  responseDialogCloseButton.setAttribute('type', 'button');
  responseDialogCloseButton.setAttribute('aria-label', 'Close Dialog');
  responseDialogCloseButton.textContent = '✕';

  const responseDialogHeader = document.createElement('h3');
  responseDialogHeader.setAttribute('id', 'response-dialog-heading');
  responseDialogHeader.textContent = 'Submission confirmed. Please stand by for imminent contact 💭';

  const responseDialogParagraph = document.createElement('p');
  responseDialogParagraph.setAttribute('id', 'response-dialog-paragraph');
  responseDialogParagraph.textContent = 'Your cooperation with the collective is appreciated.';

  const responseDialogImage = document.createElement('img');
  responseDialogImage.setAttribute('id', 'response-dialog-image');
  responseDialogImage.setAttribute('src', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e7facb0b-5c97-4235-9e4c-b756b8a5fe26/dcmqphz-691e6781-8613-4994-9d68-c033ffa6280b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U3ZmFjYjBiLTVjOTctNDIzNS05ZTRjLWI3NTZiOGE1ZmUyNlwvZGNtcXBoei02OTFlNjc4MS04NjEzLTQ5OTQtOWQ2OC1jMDMzZmZhNjI4MGIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5gTYIE1QslSwFPgKVI5wIuh8Fiy3BHfelkcR1jHkXVU');

  const responseModalContentContainer = document.createElement('div');
  responseModalContentContainer.setAttribute('id', 'response-dialog-content-container');
  responseModalContentContainer.append(
    responseDialogCloseButton,
    responseDialogHeader,
    responseDialogParagraph,
    responseDialogImage,
  );

  responseModal.appendChild(responseModalContentContainer);

  return responseModal;
}