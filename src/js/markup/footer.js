export function createFooter(company, link) {
  const footer = document.createElement('footer');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  if (company.name) {
    const currentYear = new Date().getFullYear();
    const footerText = document.createElement('p');
    footerText.setAttribute('id', 'footer-text');
    footerText.textContent = `© ${currentYear} ${company.name}`;

    contentContainer.appendChild(footerText);
  }

  if (company.logo) {
    const footerLogo = document.createElement('img');
    footerLogo.setAttribute('id', 'footer-logo');
    footerLogo.setAttribute('src', company.logo);
    footerLogo.setAttribute('alt', `${company.name} logo`);

    if (company.link) {
      const footerLogoLink = document.createElement('a');
      footerLogoLink.setAttribute('id', 'footer-logo-link');
      footerLogoLink.setAttribute('href', company.link);
      footerLogoLink.setAttribute('target', '_blank');
      footerLogoLink.appendChild(footerLogo);
      
      contentContainer.appendChild(footerLogoLink);
    } else {
      contentContainer.appendChild(footerLogo);
    }
  }

  footer.appendChild(contentContainer);

  return footer;
}
