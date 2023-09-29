document.addEventListener("DOMContentLoaded", function () {
    const dynamicForm = document.getElementById("dynamicForm");
    const numFieldsSelect = document.getElementById("numFields");
    const inputContainer = document.getElementById("inputContainer");

    //EventListener for submission of form

    dynamicForm.addEventListener("submit", function(event) {
        event.preventDefault();

        //Prevent the form from submitting

        
        //Formvalidation function
        function validateForm() {
            const numFields = parseInt(numFieldsSelect.value);

            for (let i = 1; i <= numFields; i++) {
                const inputField = document.getElementById(`field${i}`);
                const filedValue = inputField.value.trim();

                if (filedValue === "") {
                    alert("Please fill in all fields.");
                    return false;
            
            //Prevent form submission
                }
            }
            return true;
        //Allow form submission
        }
        if (validateForm()) {

        //Validation succesfull, allow form submission
            dynamicForm.submit();
        }
    });

    //EventListener for dropdown changes
    numFieldsSelect.addEventListener("change", function () {
        const numFields = parseInt(numFieldsSelect.value);

        //Remove the previous input fields
        inputContainer.innerHTML = "";

        //Generate and append new input fields
        for (let i = 1; i <= numFields; i++) {
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.id = `field${i}`;
            inputField.name = `field${i}`;
            inputField.placeholder = `Field ${i}`;
            inputContainer.appendChild(inputField);

        }
    });
});