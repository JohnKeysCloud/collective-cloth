function removeNavLinkHighlightClass(e) {
  this.classList.remove('highlight');
  this.removeEventListener('animationend', removeNavLinkHighlightClass);
}

export function addNavLinkHighlightClass() {
  const startTheProcessButton = document.getElementById('start-the-process-button');

  startTheProcessButton.classList.add('highlight');
  startTheProcessButton.addEventListener('animationend', removeNavLinkHighlightClass);
}