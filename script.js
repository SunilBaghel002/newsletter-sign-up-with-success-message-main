const submitButton = document.querySelector(".submitBtn")
const newsLetter = document.querySelector(".newsletter")
const thanks = document.querySelector(".thanks")
const container = document.querySelector(".container")
const dismissButton = document.querySelector(".dismissBtn")
const body=document.body
const getemail=document.querySelector(".getemail")
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const valid = document.querySelector(".valid")
valid.style.color = "red"

submitButton.addEventListener(("click"), () => {
    if (!emailPattern.test(emailInput.value)) {
        emailInput.classList.add("red")
        valid.style.display="inline"
    }
    else {
        container.style.display = "none"
        thanks.style.display = "block"
        body.classList.add("white")
        getemail.textContent=emailInput.value
    }
})

dismissButton.addEventListener(("click"), () => {
    container.style.display = "flex"
    thanks.style.display = "none"
    body.classList.remove("white")
})
