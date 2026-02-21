const generateBtn = document.getElementById('generate-btn');
const lottoNumbers = document.querySelectorAll('.number');

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNum);
    }
    return Array.from(numbers);
}

function displayNumbers(numbers) {
    lottoNumbers.forEach((number, index) => {
        number.textContent = numbers[index];
        number.style.backgroundColor = getNumberColor(numbers[index]);
    });
}

function getNumberColor(number) {
    if (number <= 10) {
        return '#fbc400'; // Yellow
    } else if (number <= 20) {
        return '#69c8f2'; // Blue
    } else if (number <= 30) {
        return '#ff7272'; // Red
    } else if (number <= 40) {
        return '#aaa'; // Gray
    } else {
        return '#b0d840'; // Green
    }
}

generateBtn.addEventListener('click', () => {
    const numbers = generateLottoNumbers();
    displayNumbers(numbers);
});
