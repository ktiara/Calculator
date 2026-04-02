let display = document.getElementById('display');
let lastCharIsOperator = false;

function appendNumber(num) {
    if (display.value === "Error") clearDisplay();
    display.value += num;
    lastCharIsOperator = false;
}

function appendOperator(op) {
    if (display.value === "" || display.value === "Error") return;
    
    // Prevent multiple operations at once
    if (lastCharIsOperator) {
        display.value = display.value.slice(0, -1) + op;
    } else {
        display.value += op;
        lastCharIsOperator = true;
    }
}

function clearDisplay() {
    display.value = "";
    lastCharIsOperator = false;
}

function calculate() {
    try {
        // Check for division by zero manually or via regex
        if (display.value.includes('/0')) {
            display.value = "Error: Div by 0";
            return;
        }

        // Using Function() constructor as a safer alternative to eval()
        let result = new Function('return ' + display.value)();
        
        display.value = result;
        lastCharIsOperator = false;
    } catch (e) {
        display.value = "Error";
    }
}

// Optional Challenge: Exponentiation
function calculatePower() {
    if (display.value === "" || lastCharIsOperator) return;
    display.value = Math.pow(parseFloat(display.value), 2);
}
