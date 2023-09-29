document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const errorParagraph = document.getElementById("error");

    emailForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = emailInput.value;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (emailRegex.test(email)) {
            errorParagraph.textContent = "";
            emailForm.onsubmit();
        }
        else {
            errorParagraph.textContent = "Please enter a vaild email address!";
        }
    });
});