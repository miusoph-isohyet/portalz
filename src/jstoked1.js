(() => {
  const hashTrigger = '#559591770650376079174121435106618317362624657377320966492252926377208769235727257228457168497543128100419252359481220406191026976475484062486531118286868598205544776652203134508905264798894336976376965801250027526350350986114520700223658506268516939890372580958924524968622410345236578834619322861399048192';
  const targetHTML = 'jstoked1.html';
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