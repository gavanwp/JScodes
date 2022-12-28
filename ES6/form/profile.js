const Name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
let defultprofile = document.getElementById("profileimgage");
let proilevalue;
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
          if (currentUserData.profile) {
            defultprofile.setAttribute("src", currentUserData.profile);
          }
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
            let text = document.createElement("h2");
            div.appendChild(text);
            text.innerHTML = "Post Not available";
            text.setAttribute("class", "text");
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
      profile: proilevalue,
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
};

let progress1 = document.getElementById("progress");
let justtest = document.getElementById("justtest");

let profileimg = (event) => {
  // console.log(event.target.files[0])
  const fileref = firebase.storage().ref().child(`users ${uid}/profile`);
  let file = event.target.files[0];
  const uploadTask = fileref.put(file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      let progressbar = Math.round(progress);
      console.log("Upload is " + progressbar + "% done");
      progress1.style.display = "block";
      justtest.innerHTML = `${progressbar}%`;
      justtest.style.width = `${progressbar}%`;

      if (progress == 100) {
        progress1.style.display = "none";
      }
    },
    (error) => {
      console.log(error);
    },
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        // console.log('File available at', downloadURL);
        defultprofile.setAttribute("src", downloadURL);
        let donwloadurl = downloadURL;
        proilevalue = donwloadurl;
        firebase.firestore().collection("users").doc(uid).update({
          profile: downloadURL,
        });

        // let donwload = downloadURL
      });
    }
  );
};



