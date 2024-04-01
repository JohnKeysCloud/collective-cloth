import { createSplitTextFragment } from "../special-effects/split-text";

// > --------------------------------------------------------------

export function splitTheProcessHeadingText() {
  const dialogHeading = document.getElementById('dialog-heading');

  // PARAM: createSplitTextFragment(elementToAppendFragmentTo, idForEachLetterPlusPositionIndex)
  const dialogSplitText = createSplitTextFragment(dialogHeading, 'split-text');

  dialogHeading.textContent = '';

  dialogHeading.appendChild(dialogSplitText);
}