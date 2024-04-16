import { getControlledElement } from "../meta/controllers";
import { processDialogElements } from "../cache/dialog-elements-and-utilties";
import responseBots from '../../json/response-bots.json' with { type: 'json' };

// 💭 --------------------------------------------------------------

export function updateUIPostSubmission(result) {
  const responseDialogControlledObject = getControlledElement('responseModal');
  const responseDialogElement = responseDialogControlledObject.element;
  const responseDialogController = responseDialogControlledObject.controller;

  const responseDialogHeading = responseDialogElement.querySelector('#response-dialog-heading');
  const responseDialogParagraph = responseDialogElement.querySelector('#response-dialog-paragraph');
  const responseDialogImage = responseDialogElement.querySelector('#response-dialog-image');

  if (result.status === 'success') {
    responseDialogHeading.textContent = 'Submission confirmed. Please stand by for imminent contact. 💭';
    responseDialogParagraph.textContent = 'Your cooperation with the collective is appreciated.';

    const successBot = responseBots.find(bot => bot.id === 'success');
    responseDialogImage.src = successBot.src;
    responseDialogImage.alt = successBot.alt;

    // ? closes dialog to reset the form
    if (processDialogElements && processDialogElements.closeButton) {
      processDialogElements.closeButton().click();
    };
  } else {
    responseDialogHeading.textContent = 'Submission Failed. Please try again. 💭';
    responseDialogParagraph.textContent = result.message;

    const errorBot = responseBots.find(bot => bot.id === 'error');
    responseDialogImage.src = errorBot.src;
    responseDialogImage.alt = errorBot.alt;
  }

  responseDialogController.openDialog();
}