const popup = document.getElementById('.popup');
const popupImage = document.getElementById('.popup__image');
const closeButton = document.querySelector('.popup__exit-button');
const prevButton = document.querySelector('.popup__arrow_left');
const nextButton = document.querySelector('.popup__arrow_right');
const galleryImages = document.querySelector('.rectangle__image');

let currentIndex = 0;
let imageSrc;

function showPopup(index) {
    imageSrc = galleryImages[index].querySelector('img').src;
    popupImage.src = imageSrc;
    popup.style.display = 'flex';
    currentIndex = index;

    updateNavigationButtons();
}

function updateNavigationButtons() {
    if (currentIndex === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'flex';
    }

    if (currentIndex === galleryItems.length - 1) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'flex';
    }
}

function showPreviousImage() {
    if (currentIndex > 0) {
        currentIndex--;
        imageSrc = galleryImages[currentIndex].querySelector('img').src;
        popupImage.src = imageSrc;
        updateNavigationButtons();
    }
}

function showNextImage() {
    if (currentIndex > 0) {
        currentIndex++;
        imageSrc = galleryImages[currentIndex].querySelector('img').src;
        popupImage.src = imageSrc;
        updateNavigationButtons();
    }
}

for (let i = 0; i < galleryItems.length; i++) {
    galleryImages[i].addEventListener('click', function() {
        showPopup(i);
        console.log(i);
    });
    console.log('ok');
}

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);