import emailjs from 'emailjs-com'
import apikeys from "./apikeys";

let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

let themeToggler = document.querySelector('#theme-toggler');
themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}

// var to = document.getElementById("formTo").value;
// var name = document.getElementById("formName").value;
// var subject = document.getElementById("formSubject").value;
// var message = document.getElementById("formMessage").value;
//
//
// emailjs.send("service_x93c6l9","template_jgk3836",{
//     subject: subject,
//     to: to,
//     name: name,
//     message: message,
// });

const sendEmail = e =>{
    e.preventDefault()

    emailjs
        .sendForm('gmail',apikeys.TEMPLATE_ID,e.target,apikeys.USER_ID)
        .then(
            result =>{
                console.log(result.text)
            },
            error =>{
                console.log(error.text)
            }
        )
}

const form = document.querySelector('.form')
form.addEventListener('submit',sendEmail)