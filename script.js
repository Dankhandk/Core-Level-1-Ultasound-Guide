// Set the "Last updated" field to the current date
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('lastUpdated');
  if (!el) return;
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  el.textContent = `Last updated: ${now.toLocaleDateString(undefined, options)}`;
});