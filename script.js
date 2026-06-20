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
    
    // radio button
    let radioButInput = document.getElementById("radioBut"); 

    //span display error message
    let firstNameErrorSpan = firstNameInput.previousElementSibling;
    let lastNameErrorSpan = lastNameInput.previousElementSibling;
    let commentsErrorSpan = commentsInput.previousElementSibling;


    let phoneNumberErrorSpan = phoneNumberInput.previousElementSibling;
    let emailErrorSpan = emailInput.previousElementSibling;
    
   // let radioButErrorSpan = commentsErrorInput.parentElementSibling; //radio button
    

    //paragraph to display error message to user
    let outputP = document.getElementById("defaultOutput");

    //clear out any past error messages and output
    firstNameErrorSpan.innerHTML = "";
    lastNameErrorSpan.innerHTML = "";
    phoneNumberErrorSpan.innerHTML = "";
    emailErrorSpan.innerHTML = "";
    commentsErrorSpan.innerHTML = "";

  //  outputP.innerHTML = "";

    if(firstNameInput.value === ""){
        firstNameErrorSpan.innerHTML = "Please enter your first name";
    }
    
    if(lastNameInput.value === "") {
        lastNameErrorSpan.innerHTML = "Please enter your last name";
    }

    if(commentsInput.value === "") {
        commentsErrorSpan.innerHTML = "Please enter your comment"
    }

    

    if(phoneNumberInput.value === "") {
        phoneNumberErrorSpan.innerHTML = "Please enter your phone number or email";
    }

    if(emailInput.value === "") {
        emailErrorSpan.innerHTML = "Please enter your email or phone number";
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

//radio buttons

let radio = document.querySelectorAll("#radioButtons input[type = 'radio']");

//create an array

let contact = [];

//function
function contactList(e) {

// show picked choice comment TO DO ADD P
let radioP = document.querySelector("#radioButtons p");

//empty string
let output = "";

//which radio button was click
let currentRadio = e.target;

//True or False
if(currentRadio.checked){
    if(contact.indexOf(currentRadio.value) === -1) {
        radio.push()

    }

}





}





 






// Event handlers dark mode
document.getElementById("darkMode").addEventListener("click", hideDarkMode);

//Event Handler to validate form
document.getElementById("submitBut").addEventListener("click", validateForm);

//Event Handlers for radio buttons
for (let radio of radiobuttons){
        radio.addEventListener("change", contactList);
}