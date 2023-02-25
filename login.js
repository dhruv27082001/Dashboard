let globalIsSubmitted = false;

function validate(isSubmitted = false) {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let checkemail = JSON.parse(localStorage.getItem[1]);
    let checkpass = JSON.parse(localStorage.getItem[2]);

    let error = false

    if (isSubmitted) {

        globalIsSubmitted = true
    }

    if (globalIsSubmitted) {

      



        if (
            email == checkemail
        ) {
            document.getElementById("email-valid").style.display = "block";
            document.getElementById("email-invalid").style.display = "none";
        } else {
            document.getElementById("email-invalid").style.display = "block";
            document.getElementById("email-valid").style.display = "none";
            error = true
        }
        
        
        if (password == checkpass) {
            document.getElementById("password-valid").style.display = "block";
            document.getElementById("password-invalid").style.display = "none";
        } else {
            document.getElementById("password-invalid").style.display = "block";
            document.getElementById("password-valid").style.display = "none";
            error = true
        }
        
        



        //Pop-up msg saved successfully.
        if (!error && isSubmitted) {
            alert('Your details have been saved successfully!')
            window.open("./login.html",'_self')
            const user =[firstName,email,password,conpassword];
            localStorage.setItem("user",JSON.stringify(user));
            document.getElementById('registration-form').reset()

            let validFeedbacks = document.getElementsByClassName('valid-feedback')
            for (let i = 0; i < validFeedbacks.length; i++) {
                validFeedbacks[i].style.display = 'none'
            }
            let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
            for (let i = 0; i < invalidFeedbacks.length; i++) {
                invalidFeedbacks[i].style.display = 'none'
            }
        }
    }
}

