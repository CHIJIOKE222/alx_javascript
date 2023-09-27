// Retrieve references to important elements: the form, the email input field, and the error message container.
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorElement = document.getElementById("error");

// Prevent the form from submitting automatically upon user interaction.
emailForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Halt the default form submission behavior
  const email = emailInput.value; // Capture the user's input as the email address.

  if (validateEmail(email)) {
    // If the email address adheres to a valid format, proceed with form submission.
    errorElement.textContent = ""; // Clear any previously displayed error messages.
    emailForm.submit(); // Trigger the form submission process.
  } else {
    // In case of an invalid email format, display a user-friendly error message.
    errorElement.textContent = "Please enter a valid email address.";
  }
});

// Define a function responsible for validating the email format.
function validateEmail(email) {
  // Create a regular expression pattern that defines a valid email format.
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Check whether the provided email matches the defined pattern, indicating its validity.
  return emailRegex.test(email);
}
