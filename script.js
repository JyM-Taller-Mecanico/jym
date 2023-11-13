let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

document.getElementById('next').addEventListener('click', function () {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const imageContainer = document.getElementById('image-container');
    const newTransformValue = -currentIndex * 100 / totalImages + '%';
    imageContainer.style.transform = 'translateX(' + newTransformValue + ')';
}

