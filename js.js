let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header div a nav')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    });

let header = document.querySelector('.menu')

header. classList.toggle('sticky', window.scrollY > 100)

}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  
ScrollReveal({ 
  reset: true,
  duration: 1200, 
  distance: '80px',
  delay: 300
});

  
ScrollReveal().reveal('.img-box', { origin: 'top' });
ScrollReveal().reveal('.right', { origin: 'top' });
ScrollReveal().reveal('.sobre-text', { origin: 'top' });
ScrollReveal().reveal('.sobre-img', { origin: 'top' });
ScrollReveal().reveal('.galery', { origin: 'top' });
ScrollReveal().reveal('.swiper', { origin: 'left' });
