const generateBtn = document.getElementById('generate-btn');
const themeBtn = document.getElementById('theme-btn');
const numbersContainer = document.getElementById('numbers-container');
const body = document.body;

let isDarkMode = false;

// Theme Logic
themeBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeBtn.querySelector('.icon').textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeBtn.querySelector('.icon').textContent = '🌙';
    }
});

// Lotto Generation Logic
function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNum);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function getBallClass(number) {
    if (number <= 10) return 'yell';
    if (number <= 20) return 'blue';
    if (number <= 30) return 'red';
    if (number <= 40) return 'gray';
    return 'green';
}

function displayNumbers(numbers) {
    numbersContainer.innerHTML = '';
    
    numbers.forEach((num, index) => {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.classList.add(getBallClass(num));
        ball.textContent = num;
        ball.style.animationDelay = `${index * 0.1}s`;
        numbersContainer.appendChild(ball);
    });
}

generateBtn.addEventListener('click', () => {
    const numbers = generateLottoNumbers();
    displayNumbers(numbers);
});
