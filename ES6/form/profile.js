const Name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

let uid;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    uid = user.uid;
    if (user.emailVerified) {
      console.log("emailverified");
      firebase
        .firestore()
        .collection("users/")
        .doc(uid)
        .get()
        .then((res) => {
          let currentUserData = res.data();
          Name.setAttribute("value", currentUserData.Name);
          email.setAttribute("value", currentUserData.email);
          password.setAttribute("value", currentUserData.password);
        });
      console.log(uid);
      let div = document.getElementById("mypost");
      firebase
        .firestore()
        .collection("posts/")
        .where("uid", "==", uid)
        .get()
        .then((res) => {
          if (res.size === 0) {
           let text = document.createElement("h2")
           div.appendChild(text)
           text.innerHTML = "Post Not available"
           text.setAttribute("class","text")
          } else {
            res.forEach((mypost) => {
              console.log(mypost.data());
                let p = document.createElement("p");
                div.appendChild(p);
                p.innerHTML = mypost.data().value;
        
                p.setAttribute("class", "p");
             
            });
          }
         
        });
    } else {
      window.location.assign("./verifiedemail.html");
    }
  } else {
    window.location.assign("./sign_in.html");
  }
});

// / Update Value
let updateData = () => {
  var washingtonRef = firebase.firestore().collection("users").doc(uid);

  washingtonRef
    .update({
      Name: Name.value,
      email: email.value,
      password: password.value,
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
};

let profileimg = (event) => {
  console.log(event.target.files[0])
}