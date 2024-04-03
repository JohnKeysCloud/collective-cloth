import { addListener, getAllElements, removeListener } from "../../utilities/jabascriptz-utilities";

// > --------------------------------------------------------------

function handleSelectPlaceholder(e) {
  const select = e.target;
  const selectedOption = select.options[select.selectedIndex];

  if (selectedOption.disabled === true || selectedOption.value === '') return;
  select.classList.add('valid');
}

export function toggleSelectPlaceholderChangeListener(action) {
  const selects = getAllElements('select');

  if (action === 'add') {
    selects.forEach(select => {
      addListener(select, 'change', handleSelectPlaceholder);
    });
  } else if (action === 'remove') {
    selects.forEach(select => {
      removeListener(select, 'change', handleSelectPlaceholder);
    });
  }
}