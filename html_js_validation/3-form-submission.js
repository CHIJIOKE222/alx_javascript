
// When the DOM content is fully loaded, execute this function.
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the form, name input, and email input elements.
  const submitForm = document.getElementById("submitForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  // Add an event listener to the form for handling form submissions.
  submitForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior.
    event.preventDefault();

    // Retrieve the values entered in the form fields and trim any extra spaces.
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Validate the form data.
    if (validateForm(name, email)) {
      // Display a success message if the form is submitted successfully.
      const successMessage = document.createElement("p");
      successMessage.textContent = "Form submitted successfully!";
      successMessage.style.color = "green";
      submitForm.appendChild(successMessage);
    } else {
      // Display an error message if any required fields are not filled.
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Please fill in all required fields.";
      errorMessage.style.color = "red";
      submitForm.appendChild(errorMessage);
    }
  });

  // Function for validating the form fields.
  function validateForm(name, email) {
    if (name === "" || email === "") {
      return false; // Return false if either name or email is empty.
    }

    // Additional validation logic can be added here if needed.

    return true; // Return true if all required fields are filled.
  }
});
