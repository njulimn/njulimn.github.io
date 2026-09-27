/* Small, progressive enhancements; all content is readable without JavaScript. */
(() => {
  const button = document.querySelector('.openbtn');
  const menu = document.querySelector('#layout-menu');
  if (!button || !menu) return;
  document.documentElement.classList.add('js');
  const setOpen = open => {
    button.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  };
  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!menu.contains(event.target) && !button.contains(event.target)) setOpen(false);
  });
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) setOpen(false);
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', () => setOpen(false));
})();
