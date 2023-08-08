let search = document.querySelector('.search-box');
let cart = document.querySelector(".cart");
let user = document.querySelector(".user");
let navbar = document.querySelector(".navbar");


document.querySelector("#search-icon").addEventListener("click", ()=>{
    search.classList.toggle("active");
    cart.classList.remove("active");
    user.classList.remove("active");
    navbar.classList.remove("active");
});


document.querySelector("#cart-icon").addEventListener("click", ()=>{
    cart.classList.toggle("active");
    search.classList.remove("active");
    user.classList.remove("active");
    navbar.classList.remove("active");
});


document.querySelector("#user-icon").addEventListener("click", ()=>{
    user.classList.toggle("active");
    search.classList.remove("active");
    cart.classList.remove("active");
    navbar.classList.remove("active");
});

document.querySelector("#menu-icon").addEventListener("click", ()=>{
    navbar.classList.toggle("active");
    search.classList.remove("active");
    cart.classList.remove("active");
    user.classList.remove("active");
});

window.onscroll= ()=>{
    navbar.classList.remove("active");
    search.classList.remove("active");
    cart.classList.remove("active");
    user.classList.remove("active");
};


// navbar on scroll

let header = document.querySelector('header');
window.addEventListener('scroll', ()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Swipper JS

var swiper = new Swiper(".new-arrival", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var appendNumber = 4;
  var prependNumber = 1;
  document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      ]);
    });
  document
    .querySelector(".prepend-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
      );
    });
  document
    .querySelector(".append-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
      );
    });
  document
    .querySelector(".append-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      ]);
    });