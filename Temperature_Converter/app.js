function convertTemp() {
    let input = parseFloat(document.getElementById('inputText').value);
    let output = document.getElementById('outputText');
    let inpSelect = document.getElementById('inpUnit').value;
    let outSelect = document.getElementById('outUnit').value;

    if (inpSelect === "Celsius") {
        if (outSelect === "Farenheit") {
            output.innerText = (input * 9 / 5) + 32 + ' ° F';
        } else if (outSelect === "Kelvin") {
            result = input + 273.15
            console.log(result);
            output.innerText = 273.15 +input +' K';
        } else {
            output.innerText = input + ' ° C';
        }
    } else if (inpSelect === "Farenheit") {
        if (outSelect === "Celsius") {
            output.innerText = (input - 32) * 5 / 9 + ' ° C';
        } else if (outSelect === "Kelvin") {
            output.innerText = ((input - 32) * 5 / 9) + 273.15 + ' K'
        } else {
            output.innerText = input + ' ° F';
        }
    } else {
        if (outSelect === "Celsius") {
            output.innerText = input - 273.15 + ' ° C';
        } else if (outSelect === "Kelvin") {
            output.innerText = input + ' K'
        } else {
            output.innerText = ((input - 273.15) * 9 / 5) + 32 + ' ° F';
        }
    }
}