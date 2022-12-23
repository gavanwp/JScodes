/// <<<<<<<<<<<<<<<<<<<<<<< Login <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let fun2 = () => {
  let Email = document.getElementById("myemail");
  let passWord = document.getElementById("mypassword");
  let Text = document.getElementById("p1");
  if (Email.value === "") {
    Text.innerHTML = "Plese Enter Your Email";
    Text.style.color = "red";
  } else if (passWord.value === "") {
    Text.innerHTML = "Plese Enter Your PassWord";
    Text.style.color = "red";
  } else {
    Text.style.color = "green";
    let userData = {
      email: Email.value,
      password: passWord.value,
    };
    firebase
      .auth()
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then((resolve) => {
        Text.innerHTML = "Your are  successfuly sign-in";
        Text.style.color = "green";
        console.log(resolve.value);
        setTimeout(() => {
          window.location.assign("main.html");
        }, 3000);
      })
      .catch((error) => {
        Text.innerHTML = error.message;
        Text.style.color = "red";
      });
  }
};

const loginWithGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result)
      window.location.assign("main.html")
    })
    .catch((error) => {
      console.log(error.message)
    });
};



