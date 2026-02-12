const userNameInput = document.getElementById('userName');
const userGreeting = document.getElementById('userGreeting');
const welcomePage = document.getElementById('welcomePage');
const mainPage = document.getElementById('mainPage');

nextButton.addEventListener('click', () => {
    const userName = userNameInput.value;
    if (userName) {
        userGreeting.textContent = userName;
        welcomePage.style.display = 'none';
        mainPage.style.display = 'block';
    } else {
        alert('Пожалуйста, введите ваше имя.');
    }
});