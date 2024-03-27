/**
 * Element Identifiers:
 * @section <section> -> #connections
 * @heading <h3> -> #connections-heading
 * @logoContainer <div> -> .logo-container
 * @logo <img> -> .connections-logo
 * @link <a> -> .connections-link
 */

export function createConnectionsSection(connectionsJson) {
  const connectionsSection = document.createElement('section');
  connectionsSection.setAttribute('id', 'connections');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  // const heading = document.createElement('h3');
  // heading.setAttribute('id', 'connections-heading');
  // heading.textContent = 'Connections';

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');

  connectionsJson.forEach((connection) => {
    const logo = document.createElement('img');
    logo.classList.add('connection-logo');
    logo.src = connection.logo;
    logo.alt = connection.name;

    const link = document.createElement('a');
    link.classList.add('connections-link');
    link.href = connection.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.append(logo);

    logoContainer.append(link);
  });

  contentContainer.append(logoContainer);
  // add heading?

  connectionsSection.append(contentContainer);

  return connectionsSection;
}
