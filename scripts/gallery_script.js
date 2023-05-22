const popup = document.getElementById('gallery');
const popupImage = document.getElementById('gallery__image');
const closeButton = document.querySelector('.gallery__exit-button');
const prevButton = document.querySelector('.gallery__arrow_left');
const nextButton = document.querySelector('.gallery__arrow_right');
const galleryImages = document.querySelectorAll('.rectangle__image, .header__image');

let currentIndex = 0;

function showPopup(index) {
    setTimeout(function () {
        popup.classList.add('gallery_open');
    }, 10);
    popupImage.src = galleryImages[index].src;
    console.log('some animation');
    currentIndex = index;
    console.log("showPopup");
    updateNavigationButtons();
}

function updateNavigationButtons() {
    if (currentIndex === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'flex';
    }

    if (currentIndex === galleryImages.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'flex';
    }
}

function showPreviousImage() {
    if (currentIndex > 0) {
        currentIndex--;
        popupImage.src = galleryImages[currentIndex].src;
        updateNavigationButtons();
    }
}

function showNextImage() {
    if (currentIndex < galleryImages.length - 1) {
        currentIndex++;
        popupImage.src = galleryImages[currentIndex].src;
        updateNavigationButtons();
    }
}

for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', function () {
        showPopup(i);
    });
}
console.log("" + galleryImages.length);

closeButton.addEventListener('click', function () {
    popup.classList.remove('gallery_open');
    console.log('close gallery');
});

prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);

console.log("ok");