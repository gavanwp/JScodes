firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    if (user.emailVerified) {
      console.log("emailverified");
    } else {
      window.location.assign("./verifiedemail.html");
    }
  } else {
    window.location.assign("./sign_in.html");
    console.log("User is signed out");
  }
});

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.assign("./sign_in.html");
    })
    .catch(() => {
      console.log("error");
    });
}
