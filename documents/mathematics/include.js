function includeHTML() {
  const includeElements = document.querySelectorAll('[data-include]');
  includeElements.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load ${file}`);
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
      })
      .catch(err => {
        el.innerHTML = `<p style="color:red;">${err.message}</p>`;
      });
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);
