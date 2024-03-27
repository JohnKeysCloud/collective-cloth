/**
 * Creates the navigation element.
 * @param {array} jsonArray An array of anonymous objects with structure: 
 * {textContent: TEXT_CONTENT ,href: HREF}
 * @returns {Element} The navigation element.
 */
export function createNav(jsonArray) {
  const nav = document.createElement('nav');
  
  const ul = document.createElement('ul');
  ul.classList.add('nav-ul');

  jsonArray.forEach(link => {
    const li = document.createElement('li');
    li.classList.add('nav-item');

    const a = document.createElement('a');
    a.classList.add('nav-link');

    a.textContent = link.textContent;
    a.href = link.href;

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  return nav;
}
