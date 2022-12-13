const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

let myemail = document.getElementById("myemail");
let password = document.getElementById("mypassword");
let massage = document.getElementById("p1");

const login = () => {
  if (myemail.value === "") {
    massage.innerHTML = "Please Enter Your Email";
    massage.style.color = "red";
  } else if (password.value === "") {
    massage.innerHTML = "Please Enter Your Password";
    massage.style.color = "red";
  } else {
    let data = {
      email: myemail.value,
      password: password.value,
    };
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((resolve) => {
        console.log(resolve);
        massage.innerHTML = " You are login";
        massage.style.color = "green";
        setTimeout(() => {
          window.location.assign("./nav.html");
        }, 3000);
      })
      .catch((error) => {
        massage.innerHTML = error.message;
        massage.style.color = "red";
      });
  }
};
