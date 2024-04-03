export function handleTargetScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const headerHeight = document.querySelector('header').offsetHeight;
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
    // ? getBoundingClientRect() returns the size of an element and its position relative to the viewport
    // ? .top returns the distance from the top of the viewport to the top of the element
    // ? window.scrollY returns the number of pixels that the document has already been scrolled vertically from the top

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  }
}