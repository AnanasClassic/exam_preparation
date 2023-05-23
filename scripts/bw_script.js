const makeBWButton = document.getElementById('makeBWButton');
const background = document.querySelector('.background');
let bw = false;
makeBWButton.addEventListener('click', () => {
    if (!bw) {
        background.classList.add('black-and-white');
        document.body.classList.add('black-and-white');
        makeBWButton.textContent = "вернуть цвета";

    } else {
        document.body.classList.remove('black-and-white');
        background.classList.remove('black-and-white');
        makeBWButton.textContent = "убрать цвета";
    }
    bw = !bw;
    console.log(bw);
    // const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    // // headers.forEach(header => {
    // //     header.style.fontSize = parseInt(getComputedStyle(header).fontSize) + 10 + 'px';
    // // });
});