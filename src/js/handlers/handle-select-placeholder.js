export function handleSelectPlaceholder(e) {
  const select = e.target;
  const selectedOption = select.options[select.selectedIndex];

  if (selectedOption.disabled === true || selectedOption.value === '') return;

  select.classList.add('valid');
}
