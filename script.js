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
    let phoneNumberInput = document.getElementById("phoneNumber");
    let emailInput = document.getElementById("email");
    let commentsInput = document.getElementById("comments");

    //span display error message
    let firstNameErrorSpan = firstNameInput.previousElementSibling;
    let lastNameErrorSpan = lastNameInput.previousElementSibling;
    let phoneNumberErrorSpan = phoneNumberInput.previousElementSibling;
    let emailErrorSpan = emailInput.previousElementSibling;
    let commentsErrorSpan = commentsInput.previousElementSibling;
    

    //paragraph to display error message to user
    let outputP = document.getElementById("defaultOutput");

    //clear out any past error messages and output
    firstNameErrorSpan.innerHTML = "";
    lastNameErrorSpan.innerHTML = "";
    phoneNumberErrorSpan.innerHTML = "";
    emailErrorSpan.innerHTML = "";
    commentsErrorSpan.innerHTML = "";

    outputP.innerHTML = "";

    if(firstNameInput.value === ""){
        firstNameErrorSpan.innerHTML = "Please enter your first name";
    }
    
    if(lastNameInput.value === "") {
        lastNameErrorSpan.innerHTML = "Please enter your last name";
    }

    if(phoneNumberInput.value === "") {
        phoneNumberErrorSpan.innerHTML = "Please enter your phone number or email";
    }

    if(emailInput.value === "") {
        emailErrorSpan.innerHTML = "Please enter your email or phone number"
    }
    
    if(commentsInput.value === "") {
        commentsErrorSpan = "Please enter your comment"
    }
    
    
    else{
        // if first input is not blank display messager
        outputP.innerHTML = "Hello, " + firstNameInput.value + "! Thank you for your interest in Angela Leavitt's handbags!";

    }
        // Clear out input
        firstNameInput.value = "";
        lastNameInput.value = "";
        phoneNumberInput.value = "";  
        emailInput.value = "";
        commentsInput.value = "";

}








 







// Event handlers dark mode
document.getElementById("darkMode").addEventListener("click", hideDarkMode);

//Event Handler to validate form
document.getElementById("submitBut").addEventListener("click", validateForm);