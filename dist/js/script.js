const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // convert cm to m

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        resultDiv.innerHTML = '<p id="error-message">Please enter valid weight and height ⚠</p>';
        return;
    }

    const bmi = weight / (height * height);
    const bmiCategory = getBMICategory(bmi);

    resultDiv.innerHTML = `<p>Your BMI is ${bmi.toFixed(1)} which mean You are ${bmiCategory}</p>`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (18.5 <= bmi && bmi <= 24.9) {
        return 'Normal weight';
    } else if (25 <= bmi && bmi <= 29.9) {
        return 'Overweight';
    } else if (30 <= bmi && bmi <= 34.9) {
        return 'Obesity';
    } else if (35 <= bmi) {
        return 'Over Obesity'
    }
}

calculateButton.addEventListener('click', calculateBMI);