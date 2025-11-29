document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    const usernameinput = document.getElementById("username");
    const emailinput = document.getElementById("email");
    const passwordinput = document.getElementById("password");

    form.addEventListener('submit', function  (e) {
        e.preventDefault();
        
        const username = usernameinput.value.trim();
        const  email = emailinput.value.trim();
        const password = passwordinput.value.trim();

        let isvalid = true;
        let messages = [];

        if (username.length < 3) {
            let isvalid = false;
            messages.push("User name's too short");
        }


        if (!email.includes ('@') || !email.includes ('.')) {
            let isvalid = false;
            messages.push("Invalid email address")
        }
  
        
        if (password.length < 8) {
            let isvalid = false;
            messages.push('You need a stronger password of at least 8 characters')
        }

        feedbackDiv.style.display = 'block';


        if (isvalid){
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = '#28a745';
        }
        else {
            feedbackDiv.textContent = messages.join("<br>");
            feedbackDiv.style.color = '"#dc3545"' ;
        }



    });
});
