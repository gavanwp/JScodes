let uid;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    uid = user.uid;
    if (user.emailVerified) {
      console.log("emailverified");
      /// Show Posts on Home Page
      let showpost = document.getElementById("showpost");
      firebase
        .firestore()
        .collection("posts")
        .get()
        .then((res) => {
          console.log(res);
          if (res.size === 0) {
            let message = document.createElement("h2");
            showpost.appendChild(message);
            message.innerHTML = "Post Not available";
            // console.log("data not available")
          } else {
            res.forEach((allposts) => {
              // console.log(allposts.data());
              let h2 = document.createElement("p");
              showpost.appendChild(h2);
              h2.setAttribute("class", "border");
              h2.innerHTML = allposts.data().value;
              if (allposts.data().uid === uid) {
                let mypost = document.createElement("p");
                showpost.appendChild(mypost);
                mypost.innerHTML = "My Data";
              }
            });
          }
        });
    } else {
      window.location.assign("./verifiedemail.html");
    }
  } else {
    window.location.assign("./sign_in.html");
    console.log("User is signed out");
  }
});

/// LogOut Button
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

/// assign post button  url
let createpost = () => {
  window.location.assign("./createpost.html");
};
/// assign  user profile url
let profile = () => {
  window.location.assign("./profile.html");
};
