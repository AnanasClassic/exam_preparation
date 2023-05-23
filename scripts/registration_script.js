const regName = document.getElementById('regName');
const regEmail = document.getElementById('regEmail');
const regEmailField = document.getElementById('regEmailField');
const regNameField = document.getElementById('regNameField');
const regEmailLabel = document.getElementById('regEmailLabel');
const regNameLabel = document.getElementById('regNameLabel');
const regForm = document.getElementById('regForm');
const regButton = document.getElementById('regButton');
const regFormButton = document.getElementById('openRegFormButton');

let emailIsCorrect = false;
let nameIsCorrect = false;
let responceCreated = false;

function isValidEmail(email) {
    let russianLettersRegex = /[а-яА-Я]/;
    let forbiddenSymbolsRegex = /[!#$%^&*()+=\[\]{}|\\<>\/?]/;
    if (russianLettersRegex.test(email) || forbiddenSymbolsRegex.test(email)) {
        return 'badsymbol';
    }
    if (email.indexOf('@') !== email.lastIndexOf('@') || email.indexOf('@') <= 0) {
        return 'noat';
    }
    let atIndex = email.indexOf('@');
    let dotIndex = email.indexOf('.', atIndex);
    let lastDotIndex = email.lastIndexOf('.', atIndex);
    if (dotIndex <= atIndex + 1) {
        return 'baddot';
    }
    let afterDot = email.slice(lastDotIndex + 1);
    return afterDot.length >= 2 ? 'ok' : 'shortpostfix';
}

console.log('form ready');

function isValidName(name) {
    if (name.length < 4) {
        return 'short';
    }
    if (name.length > 20) {
        return 'long';
    }
    var russianPattern = /^[а-яА-ЯёЁ]+$/;
    if (!russianPattern.test(name)) {
        return 'badsymbol';
    }
    if (name.indexOf(' ') !== -1) {
        return 'spaces';
    }
    return 'ok';
}

regName.addEventListener('input', () => {
    if (regName.value.length === 0) {
        regNameField.classList.remove('registration-form__field_error');
        return;
    }
    let verdict = isValidName(regName.value);
    if (verdict === 'ok') {
        nameIsCorrect = true;
        regNameField.classList.remove('registration-form__field_error');
        regNameField.classList.add('registration-form__field_accepted');
        regNameLabel.textContent = 'Имя';
    } else {
        nameIsCorrect = false;
        regNameField.classList.add('registration-form__field_error');
        regName.classList.remove('registration-form__field_accepted');
        if (verdict === 'short') {
            regNameLabel.textContent = 'Имя слишком короткое';
        }
        if (verdict === 'long') {
            regNameLabel.textContent = 'Имя слишком длинное';
        }
        if (verdict === 'badsymbol') {
            regNameLabel.textContent = 'Имя должно содержать только кирилицу';
        }
    }
    if (emailIsCorrect && nameIsCorrect) {
        regButton.classList.remove('registration-form__button_waiting');
        regButton.removeAttribute('disabled');
    } else {
        regButton.classList.add('registration-form__button_waiting');
        regButton.setAttribute('disabled', true);
    }
    console.log(verdict);
});

regEmail.addEventListener('input', () => {
    if (regEmail.value.length === 0) {
        regEmailField.classList.remove('registration-form__field_error');
        return;
    }
    let verdict = isValidEmail(regEmail.value);
    if (verdict === 'ok') {
        emailIsCorrect = true;
        regEmailField.classList.remove('registration-form__field_error');
        regEmailField.classList.add('registration-form__field_accepted');
        regEmailLabel.textContent = 'Email';
    } else {
        emailIsCorrect = false;
        regEmailField.classList.add('registration-form__field_error');
        regEmail.classList.remove('registration-form__field_accepted');
        if (verdict === 'badsymbol') {
            regEmailLabel.textContent = 'Email содержит недопустимые символы';
        }
        if (verdict === 'noat') {
            regEmailLabel.textContent = 'Что-то не так с \'@\'';
        }
        if (verdict === 'baddot') {
            regEmailLabel.textContent = 'Что-то не так с \'.\'';
        }
        if (verdict === 'shortpostfix') {
            regEmailLabel.textContent = 'Слишком короткий домен';
        }
    }
    if (emailIsCorrect && nameIsCorrect) {
        regButton.classList.remove('registration-form__button_waiting');
        regButton.removeAttribute('disabled');
    } else {
        regButton.classList.add('registration-form__button_waiting');
        regButton.setAttribute('disabled', true);
    }
    console.log(verdict);
});

regButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('button pressed');
    if (!nameIsCorrect || !emailIsCorrect || responceCreated) {
        return;
    }
    let formData = new FormData();
    formData.append('regName', regName.value);
    formData.append('regEmail', regEmail.value);
    regButton.textContent = 'Отправка...';
    // let responceOk = false;
    regButton.classList.add('registration-form__button_waiting');
    regButton.setAttribute('disabled', true);
    regName.setAttribute('readonly', true);
    regEmail.setAttribute('readonly', true);
    fetch('http://localhost:8080', {
        method: 'POST',
        body: formData
    });
    responceCreated = true;
    setTimeout(function () {
        regButton.classList.remove('registration-form__button_waiting');
        regButton.classList.add('registration-form__button_accepted');
        regButton.textContent = 'Отправлено';
    }, 1000)
});

document.addEventListener('click', (event) => {
    console.log('should close');
    if (!regForm.contains(event.target)) {
        regForm.classList.remove('registration-form_open');
    }
});

regFormButton.addEventListener('click', () => {
    setTimeout(function () {
        regForm.classList.add('registration-form_open');
    }, 10);
    console.log('form opened');
})