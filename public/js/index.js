/*==================== MOSTRAR MENÚ ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
      });
    }
  };
  showMenu('nav-toggle', 'nav-menu');
  
  /*==================== ELIMINAR MENÚ MÓVIL ====================*/
  const navLink = document.querySelectorAll('.nav__link');
  
  function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
      navMenu.classList.remove('show-menu');
    }
  }
  navLink.forEach(n => n.addEventListener('click', linkAction));
  
  /*==================== ENLACE ACTIVO AL DESPLAZARSE ====================*/
  const sections = document.querySelectorAll('section[id]');
  
  function scrollActive() {
    const scrollY = window.pageYOffset;
  
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');
  
      const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (link) link.classList.add('active-link');
      } else {
        if (link) link.classList.remove('active-link');
      }
    });
  }
  window.addEventListener('scroll', scrollActive);
  
  /*==================== CAMBIAR ENCABEZADO DE FONDO ====================*/
  function scrollHeader() {
    const nav = document.getElementById('header');
    if (nav) {
      if (window.scrollY >= 200) nav.classList.add('scroll-header');
      else nav.classList.remove('scroll-header');
    }
  }
  window.addEventListener('scroll', scrollHeader);
  
  /*==================== MOSTRAR BOTÓN DE IR ARRIBA ====================*/
  function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (scrollTop) {
      if (window.scrollY >= 560) scrollTop.classList.add('show-scroll');
      else scrollTop.classList.remove('show-scroll');
    }
  }
  window.addEventListener('scroll', scrollTop);
  
  /*==================== TEMA OSCURO/CLARO ====================*/
  const themeButton = document.getElementById('theme-button');
  const darkTheme = 'dark-theme';
  const iconTheme = 'bx-sun';
  
  if (themeButton) {
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
  
    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';
  
    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
    }
  
    themeButton.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    });
  }
  
  /*==================== ANIMACIÓN DE REVELACIÓN DE DESPLAZAMIENTO ====================*/
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 1400,
      reset: true
    });
  
    sr.reveal(`.home__data, .home__img,
                .about__data, .about__img,
                .services__content, .menu__content,
                .app__data, .app__img,
                .contact__data, .contact__button,
                .footer__content`, {
      interval: 100
    });
  }
  