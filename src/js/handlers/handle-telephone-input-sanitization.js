function replaceAllButNumbersAndPlusSign(e) {
  this.value = this.value.replace(/[^\d+\-() ]/g, '');
}

export function togglePhoneInputSanitizationListener(action) {
  const telephoneInput = document.querySelector('input[type="tel"]');
  
  if (action === 'add') {
    telephoneInput.addEventListener('input', replaceAllButNumbersAndPlusSign);
  } else if (action ==='remove') {
    telephoneInput.removeEventListener('input', replaceAllButNumbersAndPlusSign); 
  } else {
    throw new Error('togglePhoneInputSanitization accepts only "add" and "remove" as arguments.');
  }
}
