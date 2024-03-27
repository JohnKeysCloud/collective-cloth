export function createHowDoesItWorkSection(instructionsJson) {
  const createHowDoesItWorkSection = document.createElement('section');
  createHowDoesItWorkSection.setAttribute('id', 'how-does-it-work');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  const howDoesItWorkTextContent = document.createElement('article');
  howDoesItWorkTextContent.classList.add('how-does-it-work-text-content');

  const howDoesItWorkHeading = document.createElement('h3');
  howDoesItWorkHeading.setAttribute('id', 'how-does-it-work-heading');
  howDoesItWorkHeading.textContent = 'How Does It Work?';

  contentContainer.append(howDoesItWorkHeading);

  const instructionsContainer = document.createElement('div');
  instructionsContainer.setAttribute('id', 'instructions-container');

  instructionsJson.forEach((instruction, index) => {
    const instructionArticle = document.createElement('article');
    instructionArticle.classList.add('instruction-article');

    const stepNumber = document.createElement('div');
    stepNumber.classList.add('step-number');
    stepNumber.textContent = `0${index + 1} `;

    const instructionTitle = document.createElement('h4');
    instructionTitle.classList.add('instruction-number');
    instructionTitle.textContent = instruction.title;

    const instructionTitleContainer = document.createElement('div');
    instructionTitleContainer.classList.add('instruction-title-container');
    instructionTitleContainer.append(stepNumber, instructionTitle);

    const textContent = document.createElement('div');
    textContent.classList.add('instruction-text-content');
    instruction.textContent.forEach((paragaph) => {
      const paragraph = document.createElement('p');
      paragraph.classList.add('article-text-content');
      paragraph.textContent = paragaph;
      textContent.appendChild(paragraph);
    });

    instructionArticle.append(instructionTitleContainer, textContent);

    instructionsContainer.appendChild(instructionArticle);

  });
  
  howDoesItWorkTextContent.appendChild(instructionsContainer);
  contentContainer.appendChild(howDoesItWorkTextContent);

  createHowDoesItWorkSection.append(contentContainer);

  return createHowDoesItWorkSection;
}
