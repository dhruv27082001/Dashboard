let globalIsSubmitted = false;

function validate(isSubmitted = false) {
    let firstName = document.getElementById('first-name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let conpassword = document.getElementById('conpassword').value

    let error = false

    if (isSubmitted) {

        globalIsSubmitted = true
    }

    if (globalIsSubmitted) {

        if (firstName.length >= 3 && firstName.match(/^[A-Za-z]*$/)) {
            document.getElementById('first-name-valid').style.display = 'block'
            document.getElementById('first-name-invalid').style.display = 'none'
        } else {
            document.getElementById('first-name-invalid').style.display = 'block'
            document.getElementById('first-name-valid').style.display = 'none'
            error = true
        }



        if (
            email.includes("@") &&
            email.includes(".") &&
            email.indexOf("@") != 0 &&
            email.length - email.lastIndexOf(".") >= 3
        ) {
            document.getElementById("email-valid").style.display = "block";
            document.getElementById("email-invalid").style.display = "none";
        } else {
            document.getElementById("email-invalid").style.display = "block";
            document.getElementById("email-valid").style.display = "none";
            error = true
        }
        
        
        if (password !== "") {
            document.getElementById("password-valid").style.display = "block";
            document.getElementById("password-invalid").style.display = "none";
        } else {
            document.getElementById("password-invalid").style.display = "block";
            document.getElementById("password-valid").style.display = "none";
            error = true
        }
        
        
        if (password == conpassword && conpassword !== '') {
            document.getElementById("conpassword-valid").style.display = "block";
            document.getElementById("conpassword-invalid").style.display = "none";
        } else {
            document.getElementById("conpassword-invalid").style.display = "block";
            document.getElementById("conpassword-valid").style.display = "none";
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

