document.addEventListener("DOMContentLoaded", function () {
    const passwordForm = document.getElementById("passwordForm");
    const passwordInput = document.getElementById("password");
    const errorParagraph = document.getElementById("error");

    passwordForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const password = passwordInput.value;
        const minLengthRegex = /^.{8,}$/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*]/;

        if (
            minLengthRegex.test(password) &&
            uppercaseRegex.test(password) &&
            lowercaseRegex.test(password) &&
            digitRegex.test(password) &&
            specialCharRegex.test(password)
        ) {
            errorParagraph.textContent = "";
            passwordForm.onsubmit();
        }
        else {
            errorParagraph.textContent = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one numeric digit and one special character.";
        }
    });
});