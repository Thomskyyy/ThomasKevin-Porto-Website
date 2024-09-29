let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
    index = (i + slides.length) % slides.length;
    slider.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(() => {
    showSlide(index + 1);
}, 4000)