function loginUser(event){

event.preventDefault();

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;


sessionStorage.setItem("userEmail", email);
sessionStorage.setItem("userPassword", password);


window.location.href = "index.html";

}