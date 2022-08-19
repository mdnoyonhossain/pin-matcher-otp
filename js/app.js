function genratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

function getPin() {
    const pin = genratePin();
    const pinString = pin + "";
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin()
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayPinString = document.getElementById('display-filed');
    displayPinString.value = pin;
});

document.getElementById('calculator').addEventListener('click', function (event) {
    const numberBtn = event.target.innerText;
    const inputNumberField = document.getElementById('input-number-field');
    const previousTypeNumber = inputNumberField.value;
    if (isNaN(numberBtn)) {
        if (numberBtn === "C") {
            inputNumberField.value = "";
        }
        else if (numberBtn === "<") {
            const digits = previousTypeNumber.split('');
            digits.pop();
            const reminingDigits = digits.join('');
            inputNumberField.value = reminingDigits;
        }
    }
    else {
        const newTypeNumber = previousTypeNumber + numberBtn;
        inputNumberField.value = newTypeNumber;
    }
});

document.getElementById('veryfy-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-filed');
    const currentPin = displayPinField.value;
    
    const inputNumberField = document.getElementById('input-number-field');
    const inputNumberCalclute = inputNumberField.value;
    const pinSucessMessage = document.getElementById('pin-sucess');
    const pinFail = document.getElementById('pin-fail');

    if(inputNumberCalclute === currentPin){
        pinSucessMessage.style.display = 'block';
        pinFail.style.display = 'none';
    }
    else{
        pinFail.style.display = 'block';
        pinSucessMessage.style.display = 'none';
    }
})
