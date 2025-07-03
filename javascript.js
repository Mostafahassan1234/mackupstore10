let menu = document.querySelector('#menu');
let navLinks = document.querySelector('.nav-links');
let search = document.querySelector('#search');
let searchInput = document.querySelector('#search-input');
let user = document.querySelector('#user');
let user1 = document.querySelector('.user1');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menu.classList.toggle('fa-times');
    searchInput.classList.remove('active');

});

search.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    search.classList.toggle('fa-times');
});

user.addEventListener('click', () => {
    user1.classList.toggle('active');
    user.classList.toggle('fa-times');
});
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        loop: true,
    });