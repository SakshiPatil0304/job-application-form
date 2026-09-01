const form = document.getElementById("jobForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const position = document.getElementById("position");
const experience = document.getElementById("experience");

const resume = document.getElementById("resume");
const message = document.getElementById("message");

const skills = document.querySelectorAll(".skill");
const terms = document.getElementById("term")

//Error elements
const phoneError = document.getElementById("phoneError");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const skillsError = document.getElementById("skillsError");
const resumeError = document.getElementById("resumeError");
const messageError = document.getElementById("messageError");
const termsError = document.getElementById("termsError");

form.addEventListener("submit",function(event){

    event.preventDefault();

    // clear previous error

     phoneError.textContent ="";
     nameError.textContent ="";
     emailError.textContent ="";
     skillsError.textContent ="";
     resumeError.textContent ="";
     messageError.textContent ="";
     termsError.textContent ="";

   

    //Name validation
    const namePattern = /^[A-Za-z ]+$/;

    if(!namePattern.test(fullName.value.trim())){

        nameError.textContent = "Name should contains only letters and spaces";
        return;
    }

     //Phone validation
    const phoneNumber = phone.value.trim();

    const phonePattern = /^[0-9]{10}$/;

    if(!phonePattern.test(phoneNumber)){

       phoneError.textContent = "Please enter a valid 10-digit phone number.";
        return;

    }

    // Skill validation
    let skillSelected = false;

    skills.forEach((skill)=>{
        if(skill.checked){
            skillSelected = true;
        }
        
    });

    if(!skillSelected){

        skillsError.textContent ="please select at least one skill";
        return;

    }


    //Resume validation

    const file = resume.files[0];

    const fileName = file.name.toLowerCase();

    if(
        !fileName.endsWith(".pdf") &&
        !fileName.endsWith(".doc")&&
        !fileName.endsWith(".docx")
    ){

        resumeError.textContent ="Please upload a PDF, DOC, or DOCX file.";
        return;

    }


    // Message validation

    if (message.value.trim().length < 20) {

        messageError.textContent =
            "Please write at least 20 characters.";

        return;
    }


    //Terms validation

     if (!terms.checked) {

        termsError.textContent =
            "Please accept the terms and conditions.";

        return;
    }



    //Successful submittion

    alert("Application submitted successfully!");

    window.location.href ="success.html";
})