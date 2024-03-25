const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const passwordError = document.getElementById("error-message");

function validatePassword() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordInput.style.border = "1px solid red";
        confirmPasswordInput.style.border = "1px solid red";
        passwordError.textContent = "* Passwords do not match";
    }
    else {
        passwordInput.style.border = "1px solid #000";
        confirmPasswordInput.style.border = "1px solid #000";
        passwordError.textContent = "";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    passwordInput.addEventListener("input", validatePassword);
    confirmPasswordInput.addEventListener("input", validatePassword);
});