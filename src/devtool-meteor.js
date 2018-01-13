import 'devtools-detect';

export default (() => {
  const clearBody = () => {
    document.body.innerHTML = '';
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';
  };

  const createMeteorElement = () => {
    const e = document.createElement('iframe');
    e.src = 'https://www.youtube.com/embed/YpYaWSj_21g?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0';
    e.frameborder = '0';
    e.style.width = '100vw';
    e.style.height = '100vh';
    e.style.borderWidth = '0';

    return e;
  };

  window.addEventListener('devtoolschange', (e) => {
    if (!e.detail.open) {
      return; // when close
    }

    clearBody();
    document.body.appendChild(createMeteorElement());
  });
})();

