




// Wait until the entire HTML document is loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

  // Select the form and feedback division by their IDs
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Add an event listener for form submission
  form.addEventListener("submit", function(event) {
    // Prevent the form from submitting to the server
    event.preventDefault();

    // Retrieve user input values and trim whitespace
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Initialize validation status and messages array
    let isValid = true;
    const messages = [];

    // ===== Username Validation =====
    // Check that the username has at least 3 characters
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // ===== Email Validation =====
    // Check if email contains both '@' and '.' characters
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address (must contain '@' and '.').");
    }

    // ===== Password Validation =====
    // Check that the password is at least 8 characters long
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // ===== Feedback Display =====
    // Make the feedback div visible
    feedbackDiv.style.display = "block";

    if (isValid) {
      // If all validations pass, show success message in green
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // green color
      feedbackDiv.style.backgroundColor = "#d4edda"; // light green background
    } else {
      // If there are validation errors, display them joined by <br>
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // red color
      feedbackDiv.style.backgroundColor = "#f8d7da"; // light red background
    }
  });
});
