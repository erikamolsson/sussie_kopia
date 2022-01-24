// BURGER-MENU
const navSlide = () => {
    const burger = document.querySelector('.burger_menu');
    const nav = document.querySelector('#meny nav ul');

    burger.addEventListener('click', () => {
        nav.classList.toggle('.nav-active');
    });
}

// FOTOGALLERI
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous - knappar
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow_bild");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// HÄMTA DATUM OCH TID
const d = new Date();
document.getElementById("time_date").innerHTML = d;