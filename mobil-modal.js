(() => {
    const refs = {
      openMenuBtn: document.querySelector('.menu-toggle'),
      closeMenuBtn: document.querySelector('.menu-close'),
      menu: document.querySelector('.mobil-modal'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();