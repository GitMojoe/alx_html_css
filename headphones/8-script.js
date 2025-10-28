const hamburger = document.getElementById('hamburger');
  const navLink = document.getElementById('navLinks');

  hamburger.addEventListener('click', function(){
    this.classList.toggle('active');
    mobileMenu.classList.toggle('show');
  });