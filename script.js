let outputdisplay = document.getElementById("result");

function isValidInput(key) {
    // Regular expression to match valid characters (numbers and operators)
    const validInputRegex = /[0-9+\-*/.]/;
    return validInputRegex.test(key);
}

function Display(num) {
    if (!isValidInput(num)) {
        alert("Invalid input! Please enter a number or an operator (+, -, *, /)");
    } else {
        outputdisplay.value += num;
    }
}

function display(operator) {
    if (!isValidInput(operator)) {
        alert("Invalid input! Please enter an operator (+, -, *, /)");
    } else {
        outputdisplay.value += operator;
    }
}

function Clear() {
    outputdisplay.value = '';
}

function Delete() {
    outputdisplay.value = outputdisplay.value.slice(0, -1);
}

function calculate() {
    if (outputdisplay.value.length >= 1) {
        try {
            outputdisplay.value = eval(outputdisplay.value);
        } catch (error) {
            alert("Invalid value");
        }
    } else {
        alert("Enter value");
    }
}

// Add the onkeypress event to the input field
outputdisplay.addEventListener("keypress", function (event) {
    const key = event.key;
    if (!isValidInput(key)) {
        event.preventDefault(); // Prevent the invalid character from being typed
        alert("Invalid input! Please enter a number or an operator (+, -, *, /)");
    }
});
                
