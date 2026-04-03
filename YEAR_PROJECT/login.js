var validEmail = "luyash@gmail.com";
var validPassword = "1234";

// Login validation
function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var errorMsg = document.getElementById("error-msg");
  var successMsg = document.getElementById("success-msg");

  // Hide both messages first
  errorMsg.style.display = "none";
  successMsg.style.display = "none";

  // Check if fields are empty
  if (email === "" || password === "") {
    errorMsg.textContent = "Please fill in both fields.";
    errorMsg.style.display = "block";
    return;
  }

  // Check email format (basic)
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    errorMsg.textContent = "Please enter a valid email address.";
    errorMsg.style.display = "block";
    return;
  }

  // Check credentials
  if (email === validEmail && password === validPassword) {
    window.location.href = "dashboard.html";
  } else {
    errorMsg.textContent = "Invalid email or password. Try again.";
    errorMsg.style.display = "block";
  }
}

