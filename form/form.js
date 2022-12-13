function Submit() {
  var Name = document.getElementById("Name");
  var Father = document.getElementById("Father");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var cnic = document.getElementById("cnic");
  var number = document.getElementById("number");
  var Courses = document.getElementById("Courses");
  var Qualification = document.getElementById("Qualification");
  var Gender = document.getElementById("Gender");
  var massage = document.getElementById("massage");
  var file = document.getElementById("file");
  var checkbox = document.getElementById("checkbox");

  if (Name.value === "") {
    massage.style.display = "block";
    massage.innerHTML = "Please Enter your name !";
    massage.style.color = "red";
    Name.focus();
    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (Father.value === "") {
    massage.style.display = "block";
    massage.innerHTML = "Please enter your father's name";
    massage.style.color = "red";
    Father.focus();
    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (email.value === "") {
    massage.style.display = "block";
    massage.innerHTML = "Please enter your email";
    massage.style.color = "red";
    email.focus();
    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (password.value === "") {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please enter your password";
    password.focus();

    setTimeout(() => {
      massage.style.display = "none";
    }, 2000);
  } else if (password.value.length < 9) {
    massage.style.display = "block";
    massage.innerHTML = "Plese Enter more then 12 word password";
    massage.style.color = "red";
    setTimeout(() => {
      massage.style.display = "none";
    }, 2000);
  } else if (cnic.value.length == "") {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please Enter Your cnic";
    cnic.focus();
    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (cnic.value.length !== 14) {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please 14 character  in nic number";
    cnic.focus();
    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (number.value.length == "") {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please Enter your Mobile Number";
  } else if (number.value.length !== 11) {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please 11 character in mobile number";

    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (Courses.selectedIndex === 0) {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please select any one course";

    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (Qualification.selectedIndex === 0) {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please select your qualification";

    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (Gender.selectedIndex === 0) {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please select your Gender";

    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (file.value === "") {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please Upload your Picture";

    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (checkbox.checked === false) {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "You must have to select checkbox";

    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else {
    massage.style.display = "block";
    massage.style.color = "green";
    massage.innerHTML = "Login Successfully";
    console.log("Name :", Name.value);
    console.log("Father Name : ", Father.value);
    console.log("Email: ", email.value);
    console.log("Password : ", password.value);
    console.log("CNIC Number : ", cnic.value);
    console.log("Mobile Number : ", number.value);
    console.log("Course :", Courses.value);
    console.log("Qualification :", Qualification.value);
    console.log("Gender :", Gender.value);
    console.log("checkbox :", checkbox.value);
    console.log(file.value);

    
  }

  return false;
}

// function cnic_limit(element) {
//   var max_chars = 14;

//   if (element.value.length > max_chars) {
//     element.value = element.value.substr(0, max_chars);
//   }
// }

// function mobile_limit(element) {
//   var max_chars = 11;

//   if (element.value.length > max_chars) {
//     element.value = element.value.substr(0, max_chars);
//   }
