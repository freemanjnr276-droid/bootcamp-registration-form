document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('proficiency');
  const valueDisplay = document.getElementById('proficiency-value');

  slider.addEventListener('input', () => {
    valueDisplay.textContent = slider.value + '%';
  });

  // Optional: prevent form submit for now (shows alert)
  document.getElementById('registration-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted! (This is demo – add real backend later)');
  });
});