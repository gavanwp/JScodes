let gmail = document.getElementById("gmail")
let password = document.getElementById("password")
let message = document.getElementById("message")
let login = ()=>{
   if (gmail.value === "") {
    message.style.display = "block"
    message.innerHTML = "Please enter your gmail"
    message.style.color = "red"
    setTimeout(() => {
        message.style.display = "none"
    }, 2000);
    
} else if (password.value === ""){
    message.style.display = "block"
    message.innerHTML = "Please enter your password"
    message.style.color = "red"
    setTimeout(() => {
        message.style.display = "none"
    }, 2000);
} 
   else {
    message.style.display = "block"
    message.innerHTML = "login successfuly"
    message.style.color = "green"
    console.log(gmail.value)
    console.log(password.value)
   }
}