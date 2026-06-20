// Angela Leavitt website for handbags by Angela Leavitt



"use strict"
// dark/light Mode
function hideDarkMode(){
    document.querySelector("body").classList.toggle("darkMode");
}

//contact forms prevent default form submission
function validateForm (e) {
// prevent default form submission
    e.preventDefault(); 
    //add input and store as variable
    let firstNameInput = document.getElementById("firstName"); 
    let lastNameInput = document.getElementById("lastName");
    let commentsInput = document.getElementById("comments");
    let phoneNumberInput = document.getElementById("phoneNumber");
    let emailInput = document.getElementById("email");

    //radio buttons
    let emailRadio = document.getElementById("pref-email");
    let phoneNumberRadio = document.getElementById("pref-phone");

    //span display error message
    let firstNameErrorSpan = firstNameInput.previousElementSibling;
    let lastNameErrorSpan = lastNameInput.previousElementSibling;
    let commentsErrorSpan = commentsInput.previousElementSibling;
    let phoneNumberErrorSpan = phoneNumberInput.previousElementSibling;
    let emailErrorSpan = emailInput.previousElementSibling;
    //radio button
    let radioButError = document.getElementById("radioBut");

    
    //paragraph to display error message to user
    let outputP = document.getElementById("defaultOutput");

    //clear out any past error messages and output
    firstNameErrorSpan.innerHTML = "";
    lastNameErrorSpan.innerHTML = "";
    commentsErrorSpan.innerHTML = "";
    phoneNumberErrorSpan.innerHTML = "";
    emailErrorSpan.innerHTML = "";
    
    //radio buttons
    radioButError.innerHTML = "";
    // paragraph
    outputP.innerHTML = "";

  //  Start as true/valid
    let isValid = true;

    if(firstNameInput.value === ""){
        firstNameErrorSpan.innerHTML = "Please enter your first name";
        isValid = false;

    }
    
    if(lastNameInput.value === "") {
        lastNameErrorSpan.innerHTML = "Please enter your last name";
        isValid = false;
    }

    if(commentsInput.value === "") {
        commentsErrorSpan.innerHTML = "Please enter your comment"
        isValid = false;
    }// if first input is not blank display message
    
    //radio buttons
    if(!emailRadio.checked && !phoneNumberRadio.checked) {
        radioButError.innerHTML = "Please enter your email or phone number";
        isValid = false;
    }

    // if user selects email
    if(emailRadio.checked && emailInput.value === "") {
        emailErrorSpan.innerHTML = "Please enter your email";
        isValid = false;
    }

    // if user select phone
    if(phoneNumberRadio.checked && phoneNumberInput.value ===""){
        phoneNumberErrorSpan.innerHTML = "Please enter your phone number";
        isValid = false;
    }

    if (isValid){
        let contactInfo = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            comments: commentsInput.value, 
            email: emailInput.value,
            phoneNumber: phoneNumberInput.value
        };
   
        outputP.innerHTML = "Hello, " + firstNameInput.value + "! Thank you for your interest in Angela Leavitt's handbags!";

    
    
        // Clear out input
        firstNameInput.value = "";
        lastNameInput.value = "";
        phoneNumberInput.value = "";  
        emailInput.value = "";
        commentsInput.value = "";
 }
}














 






// Event handlers dark mode
document.getElementById("darkMode").addEventListener("click", hideDarkMode);

//Event Handler to validate form
document.getElementById("submitBut").addEventListener("click", validateForm);
