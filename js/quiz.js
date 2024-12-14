
  document.addEventListener('DOMContentLoaded', (event) => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
      radio.addEventListener('change', () => {
        radioButtons.forEach(rb => {
          if (rb !== radio) {
            rb.checked = false;
          }
        });
      });
    });
  });