document.getElementById("registrationForm").addEventListener("submit", function(event){
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").vlaue.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const address = document.getElementById("address").value.trim();

    let isValid = true;
    let errorMessage = "";

    if(!/^[a-zA-Z]{6,}$/.test(firstName)){
        isValid = false;
        errorMessage += "First Name must contain only alphabets and be at least 6 characters long. \n";
    }

    if(password.length <6){
        isValid = false;
        errorMessage += "Password must be at least 6 characters long.\n";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        isValid = false;
        errorMessage += "E-mail must follow the standard format(name@domain.com).\n";
    }

    if(!/^\d{10}$/.test(mobile)){
        isValid = false;
        errorMessage += "Mobile number must contain exactly 10 digits.\n";
    }

    if(lastName === ""){
        isValid = false;
        errorMessage += "Last name must not be empty.\n";
    }

    if(address === ""){
        isValid = false;
        errorMessage += "Address must not be empty.\n";
    }

    if (isValid){
        alert("Registration sucessfull!!");
    }
    else {
        alert("Validation Error:\n" + errorMessage);
    }
});