let gmail = document.getElementById("gmail");
let message = document.getElementById("message");
let login = () => {
  if (gmail.value === "") {
    message.style.display = "block";
    message.innerHTML = "Email required!";
    message.style.color = "red";
    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
  } else {
    message.style.display = "block";
    message.innerHTML = "Password reset email sent. Please check email";
    message.style.color = "green";
    console.log(gmail.value);
  }
};
