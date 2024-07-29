// Select the signup form
const signupForm = document.querySelector(".signup-form");

// Add a submit event listener to the form
signupForm.addEventListener("submit", (event) => {
  // Prevent the default form submission
  event.preventDefault();
  // Reset the form state (clear previous errors)
  resetFormState();

  // Function to reset the form state
  function resetFormState() {
    // Clear all error messages
    document
      .querySelectorAll(".error-message")
      .forEach((span) => (span.textContent = ""));
    // Hide all error icons
    document
      .querySelectorAll(".error-icon")
      .forEach((icon) => (icon.style.display = "none"));
    // Reset input border colors
    document
      .querySelectorAll("input")
      .forEach((input) => (input.style.borderColor = ""));
  }

  // Flag to track overall form validity
  let isValid = true;

  // Array of input fields with their respective error messages
  const inputs = [
    { id: "first-name", errorMessage: "First name is required." },
    { id: "last-name", errorMessage: "Last name is required." },
    { id: "email", errorMessage: "Email address is required." },
    { id: "password", errorMessage: "Password is required." },
  ];

  // Iterate through each input field
  inputs.forEach((input, index) => {
    // Get the input element, error element, and error icon
    const inputElement = document.getElementById(input.id);
    const errorElement = document.getElementById(`${input.id}-error`);
    const errorIcon = document.querySelectorAll(".error-icon");
    // Get the trimmed value of the input
    const value = inputElement.value.trim();

    // Check if the input is empty
    if (value === "") {
      // Display error message
      errorElement.textContent = input.errorMessage;
      // Change input border color to red
      inputElement.style.borderColor = "var(--clr-red)";
      // Show error icon
      errorIcon[index].style.display = "block";
      // Set form validity to false
      isValid = false;
    }

    // Special case for email input
    if (input.id === "email") {
      inputElement.placeholder = "email@example/com";
    }
  });

  // If the form is valid, submit it
  if (isValid) {
    signupForm.submit();
  }
});