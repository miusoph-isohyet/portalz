(() => {
  const hashTrigger = '#123456789101112131415161718192021222324252627282931';
  const targetHTML = '9+.html';
  const containerId = 'image-container';

  function injectHTML(file) {
    fetch(`img/${file}`)
      .then(response => response.text())
      .then(html => {
        const container = document.getElementById(containerId);
        if (container) container.innerHTML = html;
      })
      .catch(err => {
        console.error(`Error loading ${file}:`, err);
      });
  }

  function evaluateHash() {
    if (window.location.hash === hashTrigger) {
      injectHTML(targetHTML);
    }
  }

  window.addEventListener('hashchange', evaluateHash);
  evaluateHash();
})();