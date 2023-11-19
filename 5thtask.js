let input1 = document.getElementById("first-number");
let input2 = document.getElementById("second-input");
let operationSelect = document.getElementById("operation");
let resultInput = document.getElementById("result");
let verifyButton = document.getElementById("verify");
let tryAgainMessage = document.getElementById("try-again-message");
let congratsMessage = document.getElementById("congrats-message");

input1.addEventListener("input", updateResultPlaceholder);
input2.addEventListener("input", updateResultPlaceholder);
operationSelect.addEventListener("input", updateResultPlaceholder);

resultInput.addEventListener("input", () => {
    verifyButton.disabled = resultInput.value === "";
});

function updateResultPlaceholder() {
    let input1Value = input1.value;
    let operationValue = operationSelect.value;
    let input2Value = input2.value;

    let placeholderText = `${input1Value} ${operationValue} ${input2Value}`;
    resultInput.setAttribute("placeholder", placeholderText);
}

function verify() {
    let operation = operationSelect.value;
    let a = input1.value;
    let b = input2.value;

    let correctAnswer = undefined;
    switch (operation) {
        case "add":
            correctAnswer = Number(a) + Number(b);
            break;
        case "subtract":
            correctAnswer = Number(a) - Number(b);
            break;
        case "multiply":
            correctAnswer = Number(a) * Number(b);
            break;
        case "divide":
            correctAnswer = Number(a) / Number(b);
            break;
        default:
            correctAnswer = "CHOOSE OPERATION";
    }

    let userAnswer = Number(resultInput.value);

    if (userAnswer === correctAnswer) {
        congratsMessage.style.display = "block";
        tryAgainMessage.style.display = "none";
        console.log("Correct! 🥳");
    } else {
        congratsMessage.style.display = "none";
        tryAgainMessage.style.display = "block";
        console.log("Try Again! 😕");
    }
}
