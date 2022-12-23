const email = document.getElementById("email");
let text = document.getElementById("text");
const forgotPassword = () => {
  if (email.value === "") {
    text.innerHTML = "Email is requried!";
  } else {
    firebase
      .auth()
      .sendPasswordResetEmail(email.value)
      .then(() => {
        // Password reset email sent!
        // ..
        text.innerHTML = "Password reset email sent!";
        text.style.color = "green";
      })
      .catch((error) => {
        text.innerHTML = error.message;
        text.style.color = "green";
        // ..
      });
  }
};
