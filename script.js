// script.js – update the last updated date in the header
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('lastUpdated');
  if (el) {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    el.textContent = `Last updated: ${now.toLocaleDateString(undefined, options)}`;
  }
});