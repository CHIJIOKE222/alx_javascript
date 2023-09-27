// Obtain references to the form, password input field, and error message element

const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const errorElement = document.getElementById("error");

// Attach an event listener to the form to handle password validation
passwordForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Halt the default form submission behavior

  // Retrieve the user-provided password
  const password = passwordInput.value;

  // Determine whether the password is valid
  if (validatePassword(password)) {
    // If the password meets the criteria, allow the form submission
    errorElement.textContent = ""; // Erase any prior error messages
    passwordForm.submit(); // Trigger the form submission
  } else {
    // If the password doesn't meet the criteria, show an error message
    errorElement.textContent =
      "Password should contain at least 8 characters, including uppercase, lowercase, digit, and special character.";
  }
});

// Function for validating the password based on specific requirements
function validatePassword(password) {
  // Define regular expressions for each validation rule
  const lengthRegex = /.{8,}/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const specialCharacterRegex = /[!@#$%^&*]/;

  // Check each validation rule
  const isLengthValid = lengthRegex.test(password);
  const hasUppercase = uppercaseRegex.test(password);
  const hasLowercase = lowercaseRegex.test(password);
  const hasDigit = digitRegex.test(password);
  const hasSpecialCharacter = specialCharacterRegex.test(password);

  // Verify if all criteria are met
  return (
    isLengthValid &&
    hasUppercase &&
    hasLowercase &&
    hasDigit &&
    hasSpecialCharacter
  );
}
