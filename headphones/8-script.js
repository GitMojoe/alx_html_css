const toggle = document.getElementById('menu-toggle');
  const navLink = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    navLink.classList.toggle('active');
  });