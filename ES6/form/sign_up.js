
let fun = () => {
  let name = document.getElementById("name");
  let Email = document.getElementById("Email");
  let passWord = document.getElementById("Password");
  let Text = document.getElementById("p");
  if (name.value === "") {
    Text.innerHTML = "Plese Enter Your Name";
    Text.style.color = "red";
  } else if (Email.value === "") {
    Text.innerHTML = "Plese Enter Your Email";
    Text.style.color = "red";
  } else if (passWord.value === "") {
    Text.innerHTML = "Plese Enter Your PassWord";
    Text.style.color = "red";
  } else {
    let userData = {
      email: Email.value,
      password: passWord.value,
      Name: name.value,
      photoURL: ""
    
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((resolve) => {
        Text.innerHTML = "Account is successfuly created";
        Text.style.color = "green";
        resolve.user.sendEmailVerification();
        console.log(resolve.value);
        firebase
          .firestore()
          .collection("users/").doc(resolve.user.uid)
          .set(userData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
          setTimeout(() => {
            window.location.assign("./main.html")
          }, 2000);
      })
      .catch((error) => {
        Text.innerHTML = error.message;
        Text.style.color = "red";
      });
  }
};
