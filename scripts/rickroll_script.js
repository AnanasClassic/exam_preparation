const rickrollPopup = document.getElementById('rickroll-popup');
const rickrollCloseButton = document.querySelector('.rickroll-popup__exit-button');

if (localStorage.getItem('rickrollPopupClosed') !== 'true') {
    setTimeout(() => {
        showRickrollPopup();
        console.log("popup.open");
    }, 3000);
}

rickrollCloseButton.addEventListener('click', () => {
    closeRickrollPopup();
});

document.addEventListener('click', (event) => {
    if (!rickrollPopup.contains(event.target)) {
        rickrollPopup.classList.remove('rickroll-popup_open');
        localStorage.setItem('rickrollPopupClosed', 'true');
    }
});

function showRickrollPopup() {
    rickrollPopup.classList.add('rickroll-popup_open');
}

function closeRickrollPopup() {
    rickrollPopup.classList.remove('rickroll-popup_open');
    localStorage.setItem('rickrollPopupClosed', 'true');
}
