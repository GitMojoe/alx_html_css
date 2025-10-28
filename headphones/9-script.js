const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu')

hamburger.addEventListener('click', function(){
  this.classList.toggle('active')
  mobileMenu.classList.toggle('show');
})

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link=>{
  link.addEventListener('click', function(){
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('show');
  })
})

 // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInsideNav = event.target.closest('nav');
                
                if (!isClickInsideNav && mobileMenu.classList.contains('show')) {
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('show');
                }
            });