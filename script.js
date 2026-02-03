const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

function validatePassword() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    }
    else {
        confirmPassword.setCustomValidity("");
    }
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    validatePassword();

    if (!form.checkValidity()) {
        e.preventDefault();
    }
});