let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let mobileNumber = document.getElementById("mobileNumber");
let gmail = document.getElementById("gmail");
let password = document.getElementById("password");
let ReenterPassWord = document.getElementById("ReenterPass");
let message = document.getElementById("message");
let login = () => {
  if (firstName.value === "") {
    message.style.display = "block";
    message.innerHTML = "First Name Required!";
    message.style.color = "red";
    firstName.focus()
    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
  } else if (lastName.value === "") {
    message.style.display = "block";
    message.innerHTML = "Last Name Required!";
    message.style.color = "red";
    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
    lastName.focus()
  } else if (mobileNumber.value === "") {
    message.style.display = "block";
    message.innerHTML = "Mobile Number Required!";
    message.style.color = "red";
    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
    mobileNumber.focus()
  } else if (mobileNumber.value < 11) {
    message.style.display = "block";
    message.innerHTML = "please, enter 11 digit Mobile Number";
    message.style.color = "red";
    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
    mobileNumber.focus()
  } else if (gmail.value === "") {
    message.style.display = "block";
    message.innerHTML = "Email Address Required!";
    message.style.color = "red";
    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
    gmail.focus()
  } else if (password.value === "") {
    message.style.display = "block";
    message.innerHTML = "Password Required!";
    message.style.color = "red";
    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
    password.focus()
  } else if (ReenterPassWord.value !== password.value) {
    message.style.display = "block";
    message.innerHTML = "Password do not match";
    message.style.color = "red";
    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
    ReenterPassWord.focus()
  } else {
    message.style.display = "block";
    message.innerHTML = "login successfuly";
    message.style.color = "green";
    console.log("First Name :", firstName.value)
    console.log("Last Name :" , lastName.value)
    console.log( "Mobile Numer :", mobileNumber.value)
    console.log("Email Address :", gmail.value);
    console.log( "Password :", password.value);
    console.log( "Re-enter Password :", ReenterPassWord.value)
  }
};
