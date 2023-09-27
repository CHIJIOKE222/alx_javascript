// Obtain references to important elements: the dynamic form, the select dropdown for the number of input fields,
// the container for input fields, and the element for displaying errors.
const dynamicForm = document.getElementById("dynamicForm");
const selectNumber = document.getElementById("selectNumber");
const inputContainer = document.getElementById("inputContainer");
const errorElement = document.getElementById("error");

// Function to dynamically generate input fields based on the selected value.
function generateInputFields(selectedValue) {
  inputContainer.innerHTML = ""; // Clear any previously generated input fields

  for (let i = 1; i <= selectedValue; i++) {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = "field" + i;
    inputContainer.appendChild(inputField);
  }
}

// Event listener to detect changes in the dropdown menu and trigger input field generation.
selectNumber.addEventListener("change", function () {
  const selectedValue = parseInt(selectNumber.value);
  generateInputFields(selectedValue);
});

// Function to perform form validation before submission.
function validateForm() {
  const inputFields = inputContainer.querySelectorAll("input");

  for (const inputField of inputFields) {
    if (inputField.value.trim() === "") {
      errorElement.textContent = "Please fill in all fields.";
      return false; // Prevent form submission if any field is empty
    }
  }

  errorElement.textContent = ""; // Clear any previously displayed error messages
  return true; // Allow form submission if all fields are filled
}

// Event listener to handle form submission and prevent the default behavior.
dynamicForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting by default
  if (validateForm()) {
    // If the form is valid, submit it
    dynamicForm.submit();
  }
});
