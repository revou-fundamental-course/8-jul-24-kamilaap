function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert('Tolong masukkan berat dan tinggi badan yang valid.');
        return;
    }

    const bmi = weight / (height * height);
    document.getElementById('bmiScore').textContent = bmi.toFixed(1);

    let category = '';
    let resultText = '';

    if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
        resultText = 'Anda memiliki berat badan kurang';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal (ideal)';
        resultText = 'Anda memiliki berat badan ideal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Kelebihan berat badan';
        resultText = 'Anda memiliki berat badan berlebih';
    } else {
        category = 'Kegemukan (Obesitas)';
        resultText = 'Anda memiliki berat badan sangat berlebih (obesitas)';
    }

    document.getElementById('bmiValue').textContent = category;
    document.getElementById('bmiCategory').textContent = resultText;
    document.getElementById('resultContainer').style.display = 'block';
}

function resetForm() {
    document.getElementById('resultContainer').style.display = 'none';
}

function downloadResult() {
    const bmiValue = document.getElementById('bmiScore').textContent;
    const bmiCategory = document.getElementById('bmiCategory').textContent;
    const resultText = `Hasil BMI:\n\nNilai BMI: ${bmiValue}\nKategori: ${bmiCategory}`;

    const blob = new Blob([resultText], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = 'Hasil_BMI.txt';
    anchor.click();
}
