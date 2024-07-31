const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

// <...............togglePassword...............>

const Password = document.querySelector("#Password");
const togglePassword = document.querySelector("#togglePassword");

const password = document.querySelector("#password");
const togglepassword = document.querySelector("#togglepassword");

// <...............togglePassword...............>

registerLink.addEventListener("click", ()=> {
    wrapper.classList.add("active");
})

loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove("active");
})

btnPopup.addEventListener("click", ()=> {
    wrapper.classList.add("active-popup");
})

iconClose.addEventListener("click", ()=> {
    wrapper.classList.remove("active-popup"); 
})

// <...............togglePassword...............>

togglePassword.addEventListener("click", ()=> {
    const type = Password.getAttribute("type") === "password" ? "text":"password";
    Password.setAttribute("type", type);
    togglePassword.classList.toggle("bi-eye");
})

togglepassword.addEventListener("click", ()=> {
    const type = password.getAttribute("type") === "password" ? "text":"password";
    password.setAttribute("type", type);
    togglepassword.classList.toggle("bi-eye");
})

// <...............togglePassword...............>


