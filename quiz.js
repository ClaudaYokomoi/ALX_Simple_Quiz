function checkAnswer() {
    const correctAnswer = "4"; // Define the correct answer
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked'); // Retrieve user's selected answer element
    const feedbackElement = document.getElementById("feedback"); // Get the feedback element

    if (userAnswerElement) {
        const userAnswer = userAnswerElement.value; // Get the value of the selected answer

        // Compare user's answer with correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done."; // Provide feedback for correct answer
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!"; // Provide feedback for incorrect answer
        }
    } else {
        feedbackElement.textContent = "Please select an answer."; // Provide feedback for no answer selected
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
