const footerButton = document.getElementById('startRainButton');
let RainyWeather = window.innerWidth > 800;
let isButtonActive = false;
let currentDrops = 0;
toggleRain();

footerButton.addEventListener('click', () => {
    if (RainyWeather) {
        isButtonActive = !isButtonActive;
    } else {
        isButtonActive = false;
    }
    toggleRain();
});

window.addEventListener("resize", () => {
    toggleRain();
});
function toggleRain() {
    RainyWeather = window.innerWidth > 800
    const rainContainer = document.getElementById('rain');
    if (!RainyWeather) {
        footerButton.textContent = "хорошая погода☀";
        removeRaindrops(rainContainer);
    } else {
        if (isButtonActive) {
            footerButton.textContent = "остановить дождь";
            createRaindrops(rainContainer);
        } else {
            footerButton.textContent = "начать дождь";
            removeRaindrops(rainContainer);
        }
    }
}

function createRaindrops(container) {
    const numDrops = 100;
    const dropSize = 50;

    for (let i = 0; i < numDrops && currentDrops <= numDrops; i++) {
        currentDrops++;
        const raindrop = document.createElement('div');
        raindrop.classList.add('rain__particle');
        raindrop.style.left = `${getRandomNumber(0, 100)}vw`;
        raindrop.style.animationDelay = `${getRandomNumber(0, 5000)}ms`;
        raindrop.style.width = `${dropSize}px`;
        raindrop.style.height = `${dropSize}px`;
        container.appendChild(raindrop);
        console.log(currentDrops);
    }
}

function removeRaindrops(container) {
    while (container.firstChild) {
        currentDrops--;
        container.removeChild(container.firstChild);
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
