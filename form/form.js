function Submit() {
  var Name = document.getElementById("Name");
  var Father = document.getElementById("Father");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var cnic = document.getElementById("cnic");
  var number = document.getElementById("number").value;
  var massage = document.getElementById("massage");

  if (Name.value === "") {
    massage.style.color = "red";
    massage.innerHTML = "Please Enter your name !";
    Name.focus();
    massage.style.display = "block";
    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (Father.value === "") {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please enter your father's name";
    Father.focus();
    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (email.value === "") {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please enter your email";
    email.focus();
    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (password.value === "") {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please enter your password";
    password.focus();

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
  } else if (number.length !== 11) {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please 11 character in mobile number";

    setTimeout(function () {
      massage.style.display = "none";p
    }, 2000);
  } else {
    massage.style.display = "block";
    massage.style.color = "green";
    massage.innerHTML = "Login Successfully";
    console.log("Name", Name.value);
    console.log("Father Name ", Father.value);
    console.log("Email ", email.value);
    console.log("Password ", password.value);
    console.log("CNIC Number ", cnic.value);
    console.log("Mobile Number ", number);
  }
}

function cnic_limit(element) {
  var max_chars = 14;

  if (element.value.length > max_chars) {
    element.value = element.value.substr(0, max_chars);
  }
}

function mobile_limit(element) {
  var max_chars = 11;

  if (element.value.length > max_chars) {
    element.value = element.value.substr(0, max_chars);
  }
}
