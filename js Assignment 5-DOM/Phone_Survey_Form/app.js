
        function ageChange(event) {
            const ageInput = event.target;
            const age = parseInt(ageInput.value);

            const errorsHolder = document.getElementById("errors-holder");
            const submitButton = document.querySelector("button[type='submit']");

            if (age < 5) {
                errorsHolder.textContent = "You need to be atleast 5 years old to participate";
                submitButton.disabled = true;
            } else if(age>110) {
				errorsHolder.textContent = "You are too old! You should remeber God!";
                submitButton.disabled = true;
			}
			else
			{
                errorsHolder.textContent = "";
                submitButton.disabled = false;
            }
        }

        function handleSubmit(event) {
            event.preventDefault();

            const age = parseInt(document.getElementById("q_age").value);
            const ownsPhone = document.getElementById("q_owns_phone").checked;
            const resultHolder = document.getElementById("result-holder");

            if (age < 13) {
                if (ownsPhone) {
                    resultHolder.textContent = "You are too young to have a phone";
                } else {
                    resultHolder.textContent = "You will get a phone soon";
                }
            } else {
                resultHolder.textContent = "You should get a phone";
            }
        }
    