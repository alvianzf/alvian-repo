const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');

const button = document.getElementById('tombol-kirim');

button.addEventListener('click', function() {
    let nama = inputName.value;
    let email = inputEmail.value;

    if (!nama) {
        const nameError = document.getElementById('name-error');
        nameError.classList.add('error-message');

        nameError.innerText = "nama harus diisi!"
    }

    if (!email) {
        const emailError = document.getElementById('email-error');
        emailError.classList.add('error-message');

        emailError.innerText = 'email harus diisi!';
    }
});

let currentIndex = 0;

// DECLARE VARIABLES TO CONTROL SLIDES
const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('.slide').clientWidth;
const slideContainer = document.getElementById('slides')

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function updateSlide() {
    slideContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`
}

setInterval(nextSlide, 2000);