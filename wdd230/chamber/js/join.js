// JOIN PAGE
const then = new Date();
const when = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
document.getElementById('formdate').value = when;

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const number = document.getElementById('number');
const businessName = document.getElementById('businessname');


firstName.addEventListener('blur', () => {
    firstName.classList.add('error');
})
lastName.addEventListener('blur', () => {
    lastName.classList.add('error');
})
email.addEventListener('blur', () => {
    email.classList.add('error');
})
number.addEventListener('blur', () => {
    number.classList.add('error');
})
businessName.addEventListener('blur', () => {
    businessName.classList.add('error');
})
