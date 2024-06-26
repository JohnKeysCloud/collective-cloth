function createForm(formJson) {
  const fieldSetOne = document.createElement('fieldset');
  fieldSetOne.setAttribute('id', 'field-set-one');
  fieldSetOne.classList.add('field-set', 'active');
  fieldSetOne.dataset.fieldSet = 1;

  const fieldSetTwo = document.createElement('fieldset');
  fieldSetTwo.setAttribute('id', 'field-set-two');
  fieldSetTwo.classList.add('field-set');
  fieldSetTwo.dataset.fieldSet = 2;

  const fieldSetThree = document.createElement('fieldset');
  fieldSetThree.setAttribute('id', 'field-set-three');
  fieldSetThree.classList.add('field-set');
  fieldSetThree.dataset.fieldSet = 3;

  formJson.forEach((field, index) => {
    const label = document.createElement('label');
    label.setAttribute('for', field.id);
    label.textContent = field.label;

    let input;
    if (field.type === 'select') {
      const placeholderOption = document.createElement('option');
      placeholderOption.setAttribute('value', '');
      placeholderOption.setAttribute('disabled', 'true');
      placeholderOption.setAttribute('selected', 'true');
      placeholderOption.textContent = 'make a selection';

      input = document.createElement('select');
      input.setAttribute('id', field.id);
      input.setAttribute('name', field.id);
      input.appendChild(placeholderOption);

      const options = field.options;
      options.forEach((option) => {
        const selectOption = document.createElement('option');
        selectOption.setAttribute('value', option);
        selectOption.textContent = option;
        input.appendChild(selectOption);
      });
    } else if (field.type === 'textarea') {
      input = document.createElement(field.type);
      input.setAttribute('id', field.id);
      input.setAttribute('name', field.id);
      input.setAttribute('minlength', 99);
      input.setAttribute('maxlength', 999);
    } else if (field.type === 'number') {
      input = document.createElement('input');
      input.setAttribute('id', field.id);
      input.setAttribute('name', field.id);
      input.setAttribute('type', field.type);
      input.setAttribute('min', 1);
    } else {
      input = document.createElement('input');
      input.setAttribute('id', field.id);
      input.setAttribute('name', field.id);
      input.setAttribute('type', field.type);
    }

    if (field.pattern) {
      input.setAttribute('pattern', input.setAttribute('data-pattern', field.pattern));
    }

    if (field.placeholder) {
      input.setAttribute('placeholder', field.placeholder);
    }

    if (field.required) {
      input.setAttribute('required', 'true');

      const requiredAsterisk = document.createElement('span');
      requiredAsterisk.classList.add('required-asterisk');
      requiredAsterisk.textContent = '✽' + ' ';
      requiredAsterisk.setAttribute('aria-label', 'required field asterisk');
      label.prepend(requiredAsterisk);
    }

    const fieldElementContainer = document.createElement('div');
    fieldElementContainer.classList.add('field-element-container');
    fieldElementContainer.append(input);

    // ? Create a field container and set the field set associated data attribute.
    const fieldContainer = document.createElement('div');
    fieldContainer.setAttribute('id', `form-field-container-${++index}`);
    fieldContainer.classList.add('form-field-container');
    if (field.fieldSet === 1) {
      fieldContainer.dataset.fieldSet = 1;
    } else if (field.fieldSet === 2) {
      fieldContainer.dataset.fieldSet = 2;
    } else if (field.fieldSet === 3) {
      fieldContainer.dataset.fieldSet = 3;
    }

    // ? Append labels. If the field is the 'vision' field, append a character requirement span as well.
    if (field.id === 'vision') {
      const visionCharacterRequirement = document.createElement('span');
      visionCharacterRequirement.setAttribute('id', 'vision-character-requirement');
      visionCharacterRequirement.textContent = '〔 99 character min. 〕';
      fieldContainer.append(label, visionCharacterRequirement, fieldElementContainer);
    } else {
      fieldContainer.append(label, fieldElementContainer);
    }

    // ? Append the field container to the appropriate field set.
    if (field.fieldSet === 1) {
      fieldSetOne.appendChild(fieldContainer);
    } else if (field.fieldSet === 2) {
      fieldSetTwo.appendChild(fieldContainer);
    } else if (field.fieldSet === 3) {
      fieldSetThree.appendChild(fieldContainer);
    }
  });

  const formRequirementText = document.createElement('p');
  formRequirementText.setAttribute('id', 'form-requirement-text');
  const asteriskSpan = document.createElement('span');
  asteriskSpan.classList.add('asterisk-span');
  asteriskSpan.textContent = '✽';
  asteriskSpan.setAttribute('aria-label', 'required field asterisk');
  const textNodeOne = document.createTextNode(' ＝ required');
  formRequirementText.append(asteriskSpan, textNodeOne);

  const characterCount = document.createElement('p');
  characterCount.setAttribute('id', 'character-count');
  characterCount.textContent = '0/99';

  const formRequirementsContainer = document.createElement('div');
  formRequirementsContainer.setAttribute('id', 'form-requirements-container');
  formRequirementsContainer.append(formRequirementText, characterCount);

  const formFieldMainContainer = document.createElement('div');
  formFieldMainContainer.setAttribute('id', 'form-field-main-container');
  formFieldMainContainer.append(
    fieldSetOne,
    fieldSetTwo,
    fieldSetThree
  );
  formFieldMainContainer.appendChild(formRequirementsContainer);

  const form = document.createElement('form');
  form.setAttribute('id', 'start-the-process-form');
  form.appendChild(formFieldMainContainer);

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
  dialogCloseButton.setAttribute('id', 'process-dialog-close-button');
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
  submitButton.setAttribute('form', 'start-the-process-form');
  submitButton.setAttribute('type', 'submit');
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