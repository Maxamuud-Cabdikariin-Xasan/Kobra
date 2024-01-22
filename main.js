
let coursesElement = document.querySelectorAll('.course');
for(i = 0; i <coursesElement.length; i++) {
    coursesElement[i].addEventListener('mouseover',()=>{
      setTimeout(discNotify,1000)
    })
}
function discNotify() {
  const discount = document.getElementById('discNotification');
  discount.innerHTML = 'Waa bilaash.💯';
  discount.style.marginLeft = '0'
}

function notifice() {
  const noticeElement = document.getElementById('notification');
  noticeElement.style.marginLeft = '0';
  noticeElement.textContent = 'Mahadsanid..🤚';

}

// hide or show menu bars
function hideMenu() {
  let navLinks = document.getElementById("navlinks");
  navLinks.style.right = "-200px";
}

function showMenu() {
let navLinks = document.getElementById("navlinks");
navLinks.style.right = '0px'
}



// Form validation code

const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("checkEmail");
const pass = document.getElementById("checkPass");
const cfirmPass = document.getElementById("confirmPass");

// errors 
let nameError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');
let passError = document.getElementById('passError');
let confirmPassError = document.getElementById('confirmPassError');
// form ELement
const formElement = document.getElementById("form");


formElement.addEventListener("submit",validateForm);

function validateForm(e){
    let isValid = true;

    if (firstname.value.trim() == "") {
      nameError.innerHTML = '*Name required'
      firstname.focus()
      isValid = false;
    }
    else {
      email.focus()
      nameError.innerHTML = '';
    }

    if(email.value == ''){
      emailError.innerHTML = '*Email required!'
      isValid = false;

    }
    else {
      pass.focus()
      emailError.innerHTML = ''; // Reset error message
    }
    if(pass.value == ''){
      passError.innerHTML = '*Password required'
      isValid = false;
    }
    else if (pass.value.trim().length < 6) {
      passError.innerHTML = '*Password must be at least 6 characters'
      isValid = false;
    }
    else {
      cfirmPass.focus();
      passError.innerHTML = ''; // Reset error message
    }

    // checking confirm password
    if(cfirmPass.value == ''){
      confirmPassError.innerHTML = '*Re-type your password'
      isValid = false;
    }
    else if(cfirmPass.value != pass.value){
      confirmPassError.innerHTML = '*Password do not match'
      isValid = false;
    }
    else{
      confirmPassError.innerHTML = ''; // Reset error message
    }

    if (isValid == false) {
      e.preventDefault();
      
      
    }
    else{

      formElement.remove();
      let createElement = document.createElement('h4');
      createElement.innerHTML = 'Form submitted successfuly';
      createElement.style.color = 'green';
      createElement.style.textAlign = 'center';
      createElement.style.marginTop = '200px'
      document.body.append(createElement);
      setInterval(notifice,1000);
      

    };
}



