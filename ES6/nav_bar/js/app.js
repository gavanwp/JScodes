const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      window.location.assign("./login.html");
    })
    .catch((error) => {
      // An error happened.
      console.log(error.messsage);
    });
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
  } else {
    window.location.assign("./login.html");
  }
});
