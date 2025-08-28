(() => {
  const hashTrigger = '#4990652996818775021659381614710470091713312821872186110061116255706876571579338983244386536355583474261823744';
  const targetHTML = '3.html';
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
