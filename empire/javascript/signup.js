const passWord = document.getElementById("pass");
const confirmPassword = document.getElementById("confirm-pass");
const createAccount = document.getElementById("submit");
const error = document.getElementById("error");
const form = document.getElementById("form");
const togglePass =  document.getElementById("toggle");
const num = document.getElementById("number");
const upperCase = document.getElementById("upper");
const special = document.getElementById("spec");
const len = document.getElementById("length");

/*----- password validation codes start here ----*/
function validatepassword() {
  if(passWord.value.length <= 7) {
    len.style.color = "red"
  }else {
    len.style.color = "green"
  }

  if(passWord.value.match(/[0-9]/)) {
    num.style.color = "green"
  }else {
    num.style.color = "red"
  }

  if(passWord.value.match(/[A-Z]/)) {
    upperCase.style.color = "green"
  }else {
    upperCase.style.color = "red"
  }

  if(passWord.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\.\,\;\:\?\<\>\[\]\{\}\+\~\`\'\"]/)) {
    special.style.color = "green"
  }else {
    special.style.color = "red"
  }
}

function passwordMatch() {
  let messages = []

  if(passWord.value != confirmPassword.value) {
    messages.push('password does not match')
    error.textContent = messages
    error.style.color = 'red'
  }else{
    messages.pop()
    messages.push('password match')
    error.textContent = messages
    error.style.color = 'green'
  }
}
passWord.addEventListener('keyup',validatepassword);
confirmPassword.addEventListener('keyup',passwordMatch);
//The below code is to make sure form doesn't submit without proper validation.
form.addEventListener('submit', (e) => {


  if(upperCase.style.color == "red"){
    e.preventDefault();
  }
   
  if(num.style.color == "red"){
    e.preventDefault();
  }

  if(len.style.color == "red"){
    e.preventDefault();
  }

  if(special.style.color == "red"){
    e.preventDefault();
  }

  if(error.style.color == "red"){
    e.preventDefault();
  }


  
}) //password validation codes end here.

/*------toggle password visibility code starts here-----*/
togglePass.addEventListener("click", passwordVisibility)

function passwordVisibility() {

  if(passWord.type === "password") {
    passWord.type = "text"
    togglePass.className = "fa fa-eye-slash"
  }else {
    passWord.type = "password"
    togglePass.className = "fa fa-eye"
  }
   
  if(confirmPassword.type === "password") {
    confirmPassword.type = "text"
  }else {
    confirmPassword.type = "password"
  }
} //toggle password visibility ends here.
