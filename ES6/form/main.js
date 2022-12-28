let uid;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    uid = user.uid;
    if (user.emailVerified) {
      // console.log("emailverified");
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
              console.log(allposts.data());
              firebase
                .firestore()
                .collection("users/")
                .doc(uid)
                .get()
                .then((res) => {
                  console.log(res.data());
                  let div1 = document.createElement("div");
                  showpost.appendChild(div1);
                  div1.setAttribute("id", "div1");
                  let profileimage = document.createElement("img");
                  div1.appendChild(profileimage);
                  profileimage.setAttribute("class", "profileimage");
                  if (res.data().profile !== "") {
                    profileimage.setAttribute("src", res.data().profile);
                  } else {
                    profileimage.setAttribute("src", "images.png");
                  }
                  let username = document.createElement("h4");
                  div1.appendChild(username);
                  username.innerHTML = res.data().Name;
                  username.setAttribute("id", "name");
                  /// post body
                  let subdiv = document.createElement("div");
                  showpost.appendChild(subdiv);
                  subdiv.setAttribute("class", "border");
                  let h2 = document.createElement("p");
                  subdiv.appendChild(h2);
                  h2.innerHTML = allposts.data().value;
                  if (allposts.data().filetype === "image/png") {
                    let postimgae = document.createElement("img");
                    subdiv.appendChild(postimgae);
                    postimgae.setAttribute("class", "postimage");
                    postimgae.setAttribute("src", allposts.data().image);
                    
                  } 
                  if (allposts.data().filetype === "video/mp4") {
                   let video = document.createElement("video")
                   subdiv.appendChild(video)
                   video.setAttribute("controls","controls")
                   let source  = document.createElement("source")
                   video.appendChild(source)
                   source.setAttribute("src",allposts.data().image)
                  }
          
                });
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
