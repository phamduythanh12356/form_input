let formElement = document.getElementById("form-1");
let fullName = formElement.querySelector("#fullname");
let email = formElement.querySelector("#email");
let password = formElement.querySelector("#password");
let passwordAgain = formElement.querySelector("#password-again");

formElement.addEventListener("submit", function(e){
       e.preventDefault();
       Validator();
})
function Validator(){
let valueFullName = fullName.value.trim();
let valueEmail = email.value.trim();
let valuePassword = password.value.trim();
let valuePasswordAgain= passwordAgain.value.trim();
let min = 6;
// check full name
successMessage = function(input, message){
    let inputParent = input.closest(".form-group");
    let errorElement = inputParent.querySelector(".form-message");
    errorElement.innerText = message;
    inputParent.classList.remove("active")
}
errorMessage = function(input, message) { 
    let inputParent = input.closest(".form-group");
    let errorElement = inputParent.querySelector(".form-message");
    errorElement.innerText = message;
    inputParent.classList.add("active")
}
if(valueFullName === ""){
 errorMessage(fullName, "Vui lòng không để trống tên")
}
else{
    successMessage(fullName, '')
}

// check email
if(valueEmail === ""){
    errorMessage(email, "Vui lòng không để trống email");
}else if(!(regex(valueEmail))){
   
    errorMessage(email, "Vui lòng nhập đúng định dạng Email ")
}else{
    successMessage(email, '')
}

// check password
if(valuePassword === ""){
    errorMessage(password, "Vui lòng không để trống mật khẩu")
   }else if(valuePassword && valuePassword.length < min){
    errorMessage(password, "Vui lòng nhập ít nhất 6 kí tự ")
   }else{
    successMessage(password, '')
   }
  
// check password again
if(valuePasswordAgain === ""){
    errorMessage(passwordAgain, "Vui lòng nhập mật khẩu ở trên")
}
else if(valuePasswordAgain  === valuePassword ){
    successMessage(passwordAgain, '')
}else{
    errorMessage(passwordAgain, "sai, vui lòng nhập lại")
   
   }


function regex (value) {
    let regexValue = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexValue.test(value)
}

}