export function sanitizeTelephoneInput() {
  const telephoneInput = document.querySelector('input[type="tel"]');

  telephoneInput.addEventListener('input', function (e) {
    this.value = this.value.replace(/[^\d+\-() ]/g, '');
  });
}
