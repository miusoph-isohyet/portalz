  const hashTrigger = '#0';

  if (window.location.hash === hashTrigger) {
    fetch('img/0.HTML')
      .then(response => response.text())
      .then(html => {
        document.getElementById('image-container').innerHTML = html;
      });
  }

  if (window.location.href) {
    fetch('img/0.HTML')
      .then(response => response.text())
      .then(html => {
        document.getElementById('image-container').innerHTML = html;
      });
  }