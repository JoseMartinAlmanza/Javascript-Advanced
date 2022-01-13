let title = document.getElementById('title');


console.log(title);
title.textContent = 'Este texto esta escrito desde JavaScript';

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

/* Parrafos[1].textContent = 'Parrafos Escritos desde Javascript*/
let email = document.getElementById('email');
let password = document.getElementById('password');

function getInformation(){
    console.log(email.value);
    console.log(password.value);
}
