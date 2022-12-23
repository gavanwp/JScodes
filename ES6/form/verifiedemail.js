const email = document.getElementById("email");
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    if (user.emailVerified) {
      console.log("Email is  verified");
      window.location.assign("main.html");
    } else {
      email.innerHTML = user.email;
    }
  } else {
    window.location.assign("./sign_in.html");
  }
});

let massage = document.getElementById("massage");

const resend = () => {
  firebase
    .auth()
    .currentUser.sendEmailVerification()
    .then(() => {
      massage.innerHTML = "Verification email sent!";
      massage.style.color = "green";
    })
    .catch((error) => {
      massage.innerHTML = error.message;
      massage.style.color = "red";
      // ..
    });
};

const add = () => {
  window.location.reload();
};
