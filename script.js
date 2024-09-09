function calculateSum() {
    const input = document.getElementById('numberInput').value;
    const messageElement = document.getElementById('message');
    const number = parseInt(input);

    //validation
    if (isNaN(number) || number < 0 || number > 1000000) {
        messageElement.innerHTML = "Invalid number. Please enter a number between 0 and 1 million.";
        messageElement.classList.add('error');
    }
     else {
        const sum = (number * (number + 1)) / 2;
        messageElement.innerHTML = `Sum of numbers up to ${number} is ${sum}.`;
        messageElement.classList.remove('error');
    }
}
