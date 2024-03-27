export function createSplitTextFragment(element, id) {
  const splitTextFragment = document.createDocumentFragment();
  const text = element.textContent;

  text.split('').forEach((letter, index) => {
    const letterSpan = document.createElement('span');
    letterSpan.setAttribute('id', `${id}-${index + 1}`);
    letterSpan.classList.add('letter');

    // Use a non-breaking space for spaces to ensure they are preserved
    letterSpan.textContent = letter === ' ' ? '\u00A0' : letter;

    splitTextFragment.appendChild(letterSpan);
  });

  return splitTextFragment;
}
