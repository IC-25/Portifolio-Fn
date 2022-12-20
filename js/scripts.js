// alert("innocent");
// window.addEventListener('load',()=>{

const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const pass = document.getElementById('pass');


form.addEventListener('submit', e=>{
e.preventDefault();

checckInputs();

});

const showError = (Element,msg) =>{
const input = Element.parentElement;
const show = input.querySelector('.error');

show.innerText = msg;
show.classList.add('error');
input.classList.add('error')
// input.classList.remove('success');
show.classList.remove('success');
}
const showSucc = Element =>{
const input = Element.parentElement;
const show = input.querySelector('.error');

show.innerText = ' ';
show.classList.add('success');
input.classList.add('success');
show.classList.remove('error');
input.classList.remove('error');
}

const checckInputs =()=>{
const fnameV = fname.value.trim();
const lnameV = lname.value.trim();
const emailV = email.value.trim();
const passV = pass.value.trim();


if(fnameV === ''){
    showError(fname, "Please Enter First Name!");
}
else{
    showSucc(fname);
}

if(lnameV === ''){
    showError(lname, "Please Enter Second Name!");
}
else{
    showSucc(lname);
}
if(emailV === ''){
    showError(email, "Please Enter Email!");
}
else{
    showSucc(email);
}
if(passV === ''){
    showError(pass, "Please Enter Message!");
}
else{
    showSucc(pass);
}
}
// });