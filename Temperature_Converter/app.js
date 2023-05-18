function convertTemp() {
    let input = document.getElementById('inputText');
    let output = document.getElementById('outputText');
    let inpSelect = document.getElementById('inpUnit').value;
    let outSelect = document.getElementById('outUnit').value;

    if (inpSelect === "Calsius") {
        if (outSelect === "Farenheit") {
            output.innerText = (input.value * 9 / 5) + 32 + '° F';
        } else if (outSelect === "Kelvin") {
            output.innerText = input.value + 273.15 + ' K'
        } else {
            output.innerText = input.value + '° C';
        }
    }
    else if (inpSelect === "Farenheit") {
        if (outSelect === "Calsius") {
            output.innerText = (input.value - 32) * 5 / 9 + '° C';
        } else if (outSelect === "Kelvin") {
            output.innerText = ((input.value - 32) * 5 / 9) + 273.15 + ' K'
        } else {
            output.innerText = input.value + '° F';
        }
    } else {
        if (outSelect === "Kelvin") {
            output.innerText = input.value - 273.15 + '° C';
        } else if (outSelect === "Kelvin") {
            output.innerText = input.value + ' K'
        } else {
            output.innerText = ((input.value - 273.15) * 9 / 5) + 32 + '° F';
        }
    }
}