document.addEventListener("DOMContentLoaded", function () {
    // Event listeners for input1, action dropdown, and input2
    let input1 = document.getElementById("input1");
    input1.addEventListener("input", updateFields);

    let action = document.getElementById("action");
    action.addEventListener("change", updateFields);

    let input2 = document.getElementById("second-input");
    input2.addEventListener("input", updateFields);

    // Function to update the "Verify" button and fields based on input values
    function updateFields() {
        let input1Value = input1.value.trim();
        let actionValue = action.value.trim();
        let input2Value = input2.value.trim();

        // Enable the "Verify" button only if all fields are filled
        let verifyButton = document.getElementById("check");
        verifyButton.disabled = !(input1Value && actionValue && input2Value);

        // Update the result field placeholder with chosen characters
        updateResultPlaceholder();
    }

    // Function to update the result field and show chosen characters in the placeholder
    function updateResultPlaceholder() {
        let actionValue = action.value.trim();
        let a = input1.value.trim();
        let b = input2.value.trim();

        let resultField = document.getElementById("result");

        // Set the placeholder to show chosen characters
        resultField.placeholder = `${a} ${actionValue} ${b}`;
    }

    // Function to handle the "Verify" button click
    function check() {
        let actionValue = action.value.trim();
        let a = input1.value.trim();
        let b = input2.value.trim();

        let rightAnswer = calculateRightAnswer(actionValue, a, b);

        let userAnswer = document.getElementById("result").value.trim();

        // Display appropriate message based on user's answer
        if (userAnswer == rightAnswer) {
            alert("Congrats/Felicitări! 🥳");
        } else {
            alert("You're wrong, try again/Greșești, încearcă din nou! 🥲");
            document.getElementById("try-again-message").style.display = "block";
            document.getElementById("congrats-message").style.display = "none";
        }
    }

    // Assign the check function to the "Verify" button click
    document.getElementById("check").addEventListener("click", check);

    // Function to calculate the correct answer based on the selected action
    function calculateRightAnswer(action, a, b) {
        switch (action) {
            case "add":
                return Number(a) + Number(b);
            case "subtract":
                return Number(a) - Number(b);
            case "multiply":
                return Number(a) * Number(b);
            case "divide":
                return Number(a) / Number(b);
            default:
                return "CHOOSE ACTION";
        }
    }
});
