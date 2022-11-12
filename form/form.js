function Submit() {
  var Name = document.getElementById("Name");
  var Father = document.getElementById("Father");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var cnic = document.getElementById("cnic").value;
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
    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (password.value === "") {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please enter your password";

    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
  } else if (cnic.length != 14) {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please 14 character in nic number";
    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);

    if (cnic.length < 1) {
      massage.style.display = "block";
      massage.style.color = "red";
      massage.innerHTML = "Please enter your CNIC Number ";
      setTimeout(function () {
        massage.style.display = "none";
      }, 2000);
    }
  } else if (number.length != 11) {
    massage.style.display = "block";
    massage.style.color = "red";
    massage.innerHTML = "Please 11 character in mobile number";
    setTimeout(function () {
      massage.style.display = "none";
    }, 2000);
    if (number.length < 1) {
      massage.style.display = "block";
      massage.style.color = "red";
      massage.innerHTML = "Please enter your mobile number";
      setTimeout(function () {
        massage.style.display = "none";
      }, 2000);
    }
  } else {
    massage.style.display = "block";
    massage.style.color = "green";
    massage.innerHTML = "Login Successfully";
    console.log("Name", Name.value);
    console.log("Father Name ", Father.value);
    console.log("Email ", email.value);
    console.log("Password ", password.value);
    console.log("CNIC Number ", cnic);
    console.log("Mobile Number ", number);
  }
}
