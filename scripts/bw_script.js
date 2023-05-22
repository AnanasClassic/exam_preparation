const makeBWButton = document.getElementById('makeBWButton');
const body = document.querySelector('.background');
let bw = false;
makeBWButton.addEventListener('click', () => {
    if (!bw) {
        body.classList.add('black-and-white');
        makeBWButton.textContent = "вернуть цвета";

    } else {
        body.classList.remove('black-and-white');
        makeBWButton.textContent = "убрать цвета";
    }
    bw = !bw;
    console.log(bw);
    // const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    // // headers.forEach(header => {
    // //     header.style.fontSize = parseInt(getComputedStyle(header).fontSize) + 10 + 'px';
    // // });
});
