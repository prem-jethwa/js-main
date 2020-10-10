let email1 = document.getElementById("email1st")
let email2 = document.getElementById("email_repeat")

function check(){
    if (email1.value != email2.value){
        alert("Both email should be Same")
        email1.value = "";
        email2.value = "";
        return false;
    }
}

// password validation code
const valid = document.querySelector(".password")
const btnSee =document.getElementById('btn-see')

let seePassword = false;

const passwordView = () => {

    if(seePassword == false){
        valid.type="text";
        seePassword = true;
        btnSee.innerText ="HIDE";

    }
    else if(seePassword == true){
        valid.type="password";
        seePassword = false;
        btnSee.innerText ="SEE";
    }   
};

btnSee.addEventListener('click', passwordView);

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");



const vaildPassword = () =>{

    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(valid.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(valid.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(valid.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    // Validate length
    if(valid.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }

  }


 valid.addEventListener('input', vaildPassword);


