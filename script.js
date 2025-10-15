// script.js
const signupFormNode = document.querySelector("#registration-form");

const validateSignupForm = (formNode) => {
    let isValid = true;

    // first: clear any error messages
    const errorMessageNodes = document.querySelectorAll(".warning");
    errorMessageNodes.forEach(n => {
        n.remove();
    });

    // VALIDATE USERNAME: at least 3 characters
    const usernameNode = formNode.querySelector("#input-name");

    // get the input of the form
    const usernameInput = usernameNode.value;
    usernameValid = usernameInput.length > 2;

    if(!usernameValid) {
        const usernameErrorNode = document.createElement("p");
        usernameErrorNode.textContent = "Usernames must be at least 3 characters in length.";
        usernameErrorNode.classList.add("warning");

        usernameNode.insertAdjacentElement("afterend", usernameErrorNode);
        isValid = false;
    }

    // VALIDATE EMAIL : matches email pattern
    // validate using REGULAR EXPRESSIONS ("regex")
    const emailInputNode = formNode.querySelector("#input-email");
    const emailInputValue = emailInputNode.value;

    // regular expression pattern for testing [string]@[string].[string]
    // '.+' : one or more of any character, EXCEPT for line breaks
    // '@' : literal "@" symbol 
    // '\.' : literal "." symbol
    // this regex provided by Darian Elwood
    const basicEmailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    emailValid = basicEmailPattern.test(emailInputValue);

    if(!emailValid) {
        const emailErrorNode = document.createElement("p");
        emailErrorNode.textContent = "Must be a valid email address.";
        emailErrorNode.classList.add("warning");

        emailInputNode.insertAdjacentElement("afterend", emailErrorNode);
        isValid = false;
    }
 // VALIDATE NUMBER OF TICKETS (1–5)
    const ticketsNode = formNode.querySelector("#input-tickets");
    const ticketsValue = parseInt(ticketsNode.value);
    if(isNaN(ticketsValue) || ticketsValue < 1 || ticketsValue > 5) {
        const ticketsErrorNode = document.createElement("p");
        ticketsErrorNode.textContent = "Enter a number of tickets between 1 and 5.";
        ticketsErrorNode.classList.add("warning");
        ticketsNode.insertAdjacentElement("afterend", ticketsErrorNode);
        isValid = false;
    }


    
    return isValid;
}

signupFormNode.addEventListener("submit", e => {
    // stop the submit from automatically requesting the page again
    e.preventDefault();
    
    // are all the inputs on this form valid?
    const isValid = validateSignupForm(e.target);

    // if all fields are valid, submit the form 
    // if not, prevent the submission
    if(isValid) {
        e.target.innerHTML = "Form submitted!  exicted to meet you";
    }
});