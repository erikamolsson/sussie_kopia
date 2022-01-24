// BURGER-MENU
const navSlide = () => {
    const burger = document.querySelector('.burger_menu');
    const nav = document.querySelector('#meny nav ul');

    burger.addEventListener('click', () => {
        nav.classList.toggle('.nav-active');
    });
}


// FOTOGALLERI
var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n == undefined) { n = ++slideIndex }
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
    timer = setTimeout(showSlides, 4000);
}

// HÄMTA DATUM OCH TID
/* const d = new Date();
document.getElementById("time_date").innerHTML = d; */

const d = new Date().toISOString().slice(0, 10);
document.getElementById("time_date").innerHTML = d;