import successBot from '../../assets/media/gifs/successBot.gif';

// 💭 --------------------------------------------------------------

// ? assumed to be sucessful submission
export function createResponseModal() {
  const responseModal = document.createElement('dialog');
  responseModal.setAttribute('id', 'response-dialog');

  const responseDialogCloseButton = document.createElement('button');
  responseDialogCloseButton.setAttribute('class', 'ds-close-button');
  responseDialogCloseButton.setAttribute('id', 'response-process-dialog-close-button');
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
  responseDialogImage.setAttribute('src', successBot);

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