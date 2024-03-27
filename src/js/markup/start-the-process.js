function createForm(formJson) {
  const form = document.createElement('form');
  form.setAttribute('id', 'start-the-process-form');

  const formFieldMainContainer = document.createElement('div');
  formFieldMainContainer.setAttribute('id', 'form-field-main-container');

  formJson.forEach((field, index) => {
    const fieldContainer = document.createElement('div');
    fieldContainer.setAttribute('id', `form-field-container-${++index}`);
    fieldContainer.classList.add('form-field-container');

    if (field.group === 1) {
      fieldContainer.dataset.fieldGroup = 1;
      fieldContainer.classList.add('active');
    } else if (field.group === 2) {
      fieldContainer.dataset.fieldGroup = 2;
    } else if (field.group === 3) {
      fieldContainer.dataset.fieldGroup = 3;
    }

    const label = document.createElement('label');
    label.setAttribute('for', field.id);
    label.textContent = field.label;

    let input;
    if (field.type === 'select') {
      input = document.createElement('select');
      input.setAttribute('id', field.id);

      const placeholderOption = document.createElement('option');
      placeholderOption.setAttribute('value', '');
      placeholderOption.setAttribute('disabled', 'true');
      placeholderOption.setAttribute('selected', 'true');
      placeholderOption.textContent = 'make a selection';
      input.appendChild(placeholderOption);
      
      const options = field.options;
      options.forEach(option => {
        const selectOption = document.createElement('option');
        selectOption.setAttribute('value', option);
        selectOption.textContent = option;
        input.appendChild(selectOption);
      });
    } else if (field.type === 'textarea') {
      input = document.createElement(field.type);
      input.setAttribute('id', field.id);
    } else if (field.type === 'number') {
      input = document.createElement('input');
      input.setAttribute('id', field.id);
      input.setAttribute('type', field.type);
      input.setAttribute('min', 1);
    } else {
      input = document.createElement('input');
      input.setAttribute('id', field.id);
      input.setAttribute('type', field.type);
    }

    if (field.placeholder) {
      input.setAttribute('placeholder', field.placeholder);
    }

    fieldContainer.append(label, input);
    formFieldMainContainer.appendChild(fieldContainer);
    form.appendChild(formFieldMainContainer); 
  });

  return form;
}

function createFormDialog(formJson) {
  const dialogHeading = document.createElement('h2');
  dialogHeading.setAttribute('id', 'dialog-heading');
  dialogHeading.textContent = 'The Process';

  const stepNumber = document.createElement('h3');
  stepNumber.setAttribute('id', 'step-number');
  stepNumber.textContent = 'Step 1';

  const dialogCloseButton = document.createElement('button');
  dialogCloseButton.setAttribute('id', 'dialog-close-button');
  dialogCloseButton.setAttribute('type', 'button');
  dialogCloseButton.setAttribute('aria-label', 'Close Dialog');
  dialogCloseButton.textContent = '✕';

  const dialogTopContainer = document.createElement('div');
  dialogTopContainer.setAttribute('id', 'dialog-top-container');
  dialogTopContainer.append(stepNumber, dialogCloseButton);

  const previousButton = document.createElement('button');
  previousButton.setAttribute('id', 'previous-button');
  previousButton.setAttribute('disabled', 'true');
  previousButton.type = 'button';
  previousButton.dataset.element = 'button';
  previousButton.textContent = 'previous';
  
  const nextButton = document.createElement('button');
  nextButton.setAttribute('id', 'next-button');
  nextButton.type = 'button';
  nextButton.dataset.element = 'button';
  nextButton.textContent = 'next';
  
  const submitButton = document.createElement('button');
  submitButton.setAttribute('id', 'submit-button');
  submitButton.setAttribute('form', '#start-the-process-form');
  submitButton.setAttribute('disabled', 'true');
  submitButton.dataset.element = 'button';
  submitButton.textContent = 'submit';

  const dialogButtonContainer = document.createElement('div');
  dialogButtonContainer.setAttribute('id', 'dialog-button-container');
  dialogButtonContainer.append(previousButton, nextButton, submitButton);

  const form = createForm(formJson);
  form.appendChild(dialogButtonContainer);

  const dialog = document.createElement('dialog');
  dialog.setAttribute('id', 'start-the-process-dialog');
  dialog.append(dialogHeading, dialogTopContainer, form);

  return dialog;
}

export function createStartTheProcessSection(formJson) {
  const startTheProcessSection = document.createElement('section');
  startTheProcessSection.setAttribute('id', 'start-the-process');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  const startTheProcessButton = document.createElement('button');
  startTheProcessButton.setAttribute('id', 'start-the-process-button');
  startTheProcessButton.textContent = 'start the process';

  const formDialog = createFormDialog(formJson);

  contentContainer.append(startTheProcessButton, formDialog);

  startTheProcessSection.append(contentContainer);

  return startTheProcessSection;
}
