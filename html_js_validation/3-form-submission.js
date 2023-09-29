document.addEventListener("DOMContentLoaded", function () {
    const submitForm = document.getElementById("submitForm");

    //EventListener for form submision
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        //prevent default form submission
        
        
        //Form validation function
        function validateForm() {
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email")
            const nameValue = nameInput.value.trim();
            const emailValue = document.emailInput.value.trim();

            if (nameValue === "" || emailValue === "") {
                alert("Please fill in all required fields.");
                return false;
            }
            return true;
        }

        if (validateForm()) {
            alert("Form submitted successfully!");
            submitForm.reset();
        }
    });
});