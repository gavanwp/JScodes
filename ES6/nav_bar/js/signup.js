let Name = document.getElementById("Name");
let Email = document.getElementById("Email");
let Password = document.getElementById("Password");
let Massage = document.getElementById("p");

const signUP = () => {
  if (Name.value === "") {
    Massage.innerHTML = "Please Enter Your Name!";
    Massage.style.color = "red";
  } else if (Email.value === "") {
    Massage.innerHTML = "Please Enter Your Email";
    Massage.style.color = "red";
  } else if (Password.value === "") {
    Massage.innerHTML = "Please Enter Your Password";
    Massage.style.color = "red";
  } else {
    const data = {
      email: Email.value,
      password: Password.value,
    };
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((resolve) => {
        console.log(resolve.user);
        Massage.innerHTML = "Congrats  Your Account created";
        Massage.style.color = "green";
        resolve.user.sendEmailVerification();
        setTimeout(() => {
          window.location.assign("./nav.html");
        }, 3000);
      })
      .catch((error) => {
        console.log(error.message);
        Massage.innerHTML = error.message;
        Massage.style.color = "red";
        // ..
      });
  }
};



