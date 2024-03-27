/**
 * Creates an image element.
 * @param {string} src - The source URL of the image.
 * @param {string} id - The ID of the image.
 * @param {string|string[]} classNames - The class or classes to be added to the image. Can be a single string class name or an array of class names.
 * @param {string} alt - The alternate text for the image.
 * @param {string} ariaLabel - The aria-label attribute for the image.
 * @param {string[]} sizeArray - The array of sizes for the image in format: Width x Height.
 * @returns {Element} The navigation element.
 * @throws {Error} - Invalid input type. Please provide valid input types.
 */

export function createImage(src, id, classNames, alt, ariaLabel, sizeArray) {
  if (
    typeof id !== 'string' ||
    typeof src !== 'string' ||
    typeof alt !== 'string' ||
    !(typeof classNames === 'string' || Array.isArray(classNames)) ||
    typeof ariaLabel !== 'string'
  ) {
    throw new Error('Invalid input type. Please provide valid input types.');
  }

  const img = document.createElement('img');
  img.setAttribute('id', id);
  img.src = src;
  img.alt = alt;

  if (classNames) {
    if (typeof classNames === 'string') {
      img.classList.add(classNames);
    } else if (Array.isArray(classNames)) {
      classNames.forEach((className) => img.classList.add(className));
    }
  }

  img.setAttribute('aria-label', ariaLabel);

  if (sizeArray) {
    const [height, width] = sizeArray;
    img.setAttribute('height', height);
    img.setAttribute('width', width);
  } else throw new Error('Please add a size array for the image.');

  return img;
}
