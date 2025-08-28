(() => {
  const hashTrigger = '#10886770844769021016895464665263598074551802353905990305656939293855231262052004905913517450046047603030295293602082389553152';
  const targetHTML = '2.html';
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
