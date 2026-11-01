// Log message confirming script load
console.log("Kids Quiz loaded");

// Note: Full quiz questions, scoring, and quiz flow will be added in future tasks.

// DOM elements
const mathsBtn = document.getElementById("maths-btn");
const englishBtn = document.getElementById("english-btn");
const subjectMessage = document.getElementById("subject-message");

// Event listeners for subject buttons
if (mathsBtn && subjectMessage) {
  mathsBtn.addEventListener("click", () => {
    subjectMessage.textContent = "You chose Mathematics!";
  });
}

if (englishBtn && subjectMessage) {
  englishBtn.addEventListener("click", () => {
    subjectMessage.textContent = "You chose English!";
  });
}
