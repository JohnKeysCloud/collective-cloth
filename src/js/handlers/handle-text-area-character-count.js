import { processDialogElements } from "../cache/dialog-elements-and-utilties";
import { setDisabledState, toggleClass } from "../../utilities/jabascriptz-utilities";

// > --------------------------------------------------------------

export function handleTextAreaCharacterCount(event) {
  const setCharacterCount = () => characterCount.textContent = `${textAreaCharacterCount}/${minCharacterCount}`;

  const textArea = event.target;
  const submitButton = processDialogElements.submitButton();
  const characterCount = processDialogElements.characterCount();

  const textAreaCharacterCount = textArea.value.trim().length;
  const minCharacterCount = 99;
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