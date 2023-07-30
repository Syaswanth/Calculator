document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("result");
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const buttonText = button.textContent;
            if (buttonText === "=") {
                evaluate();
            } else if (buttonText === "C") {
                clearDisplay();
            } else if (buttonText === "⌫") {
                backspace();
            } else {
                appendToDisplay(buttonText);
            }
        });
    });

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = "";
    }

    function evaluate() {
        const expression = display.value;
        try {
            const result = eval(expression);
            display.value = result;
        } catch (error) {
            display.value = "Error";
        }
    }

    function backspace() {
        const currentValue = display.value;
        display.value = currentValue.slice(0, -1);
    }

    // Event listener for keyboard input
    document.addEventListener("keydown", function (event) {
        const key = event.key;
        if (key === "Enter") {
            evaluate();
        } else if (key === "Backspace") {
            backspace();
        } else if (key === "Escape") {
            clearDisplay();
        } else if (/[\d+\-*/.%]/.test(key)) {
            
            appendToDisplay(key);
        }
    });
});
