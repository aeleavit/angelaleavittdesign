// Angela Leavitt website for handbags by Angela Leavitt



"use strict"
// dark/light Mode
function hideDarkMode(){
    document.querySelector("body").classList.toggle("darkMode");
}

// Product Switcher
// To store handbag images, alt text, name, description, and arrays used to store details for the product switcher
let handbagsContent = {
    goMod: {
        photo: "images/gomod1.jpeg",
        alt: "Wooden pyramid-shaped handbag with bright colors and a women's face.",
        name: "Go Mod",
        description: "The Go Mod handbag is a one-of-a-kind designed using a repurposed vintage dress.",
        details: [
            "11' Width x 8' Height x 2 1/4' Depth",
            "Wood box construction with lucite handle",
            "Front and back design",
            "Lined inside and includes mirror",
        ]              
    },

    cherylAnne: {
        photo: "images/cherylanne.jpeg",
        alt: "Wooden pyramid-shaped handbag with an image of lady with a light pink background and lucite handle",
        name: "Cheryl Anne",
        description: "The Cheryl Anne handbag is one of our most popular handbags embellished with swarovski crystals.",
        details: [
            "7 3/4' width x 8' Height x 2 3/4' Depth",
            "Wood box construction with lucite handle",
            "Front and back design",
            "Lined inside and includes mirror",
        ]
    },

    amy: {
        photo: "images/amy.jpeg",
        alt: "Wooden pyramid-shaped handbag with an image of lady and beaded flowers with a black background and a lucite handle",
        name: "Amy",
        description: "Eye-stopping Amy handbag is hand-beaded embellished with swarovski crystals.",
        details: [
            "11' Width x 8' Height x 2 1/4' Depth",
            "Wood box construction with lucite handle",
            "Front and back design",
            "Lined inside and includes mirror",
        ]
    },

    sunBathingBeauties: {
        photos: "images/sunbathing.jpg",
        alt: "Wooden pyramid-shaped handbag with an image of pin-up girl's in bathing suites and beaded flowers with a brown background and a bamboo handle",
        name: "Sun Bathing Beauties",
        description: "Ready for the summer? The Sun Bathing Beauties bag is embellished with swarovski crystals.",
        details: [
            "11' Width x 8' Height x 2 1/4' Depth",
            "Wood box construction with a bamboo handle",
            "Front and back design",
            "Lined inside and includes mirror",
        ]  
    },

    betsy: {
        photos: "images/betsy.jpeg",
        name: "Betsy",
        alt: "Wooden pyramid-shaped handbag with an image of pin-up girl's in marching band outfits with a navy blue background and a lucite handle",
        description: "This blue bag is perfect with any outfit and is perfect for your 4th of July accessory. This bag is embellished with swarovski crystals.",
        details: [
            "11' Width x 8' Height x 2 1/4' Depth",
            "Wood box construction with lucite handle",
            "Front and back design",
            "Lined inside and includes mirror",
        ]
    },

    Verycherry: {
        photos: "images/verrycherry.jpeg",
        name: "Very Cherry",
        alt:  "Wooden rectangular-shaped handbag painted black with green stems and rhinestones for the cherries and a black beaded handle.",
        description: "Very Cherry was among the most exclusive designs in the Angela Leavitt collection, distinguished by its hand-painted artwork and limited availability.",
        details: [
            "10 1/2' Width x 6' Height x 2 1/4' Depth",
            "Wood box construction with black beaded handle",
            "Front and back design",
            "Lined inside and includes mirror",

        ]
    }  
};

 

//Guessing Game
let game = {
    winner:{

    }
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
