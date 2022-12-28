let uid;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    uid = user.uid;
    if (user.emailVerified) {
      console.log("emailverified");
    } else {
      window.location.assign("./verifiedemail.html");
    }
  } else {
    window.location.assign("./sign_in.html");
  }
});
// Post Images
let donwloadult;
let filetype = "";

let textarea = document.getElementById("textarea");
let massage = document.getElementById("massage");

let createpost = () => {
  if (textarea.value === "") {
    massage.innerHTML = "Pease enter your data";
    massage.style.color = "red";
  } else {
    let obj = {
      value: textarea.value,
      uid: uid,
      image: donwloadult,
      filetype: filetype,
    };
    firebase
      .firestore()
      .collection("posts/")
      .add(obj)
      .then(() => {
        massage.innerHTML = "Your post created";
        massage.style.color = "green";
        setTimeout(() => {
          2;
          window.location.assign("./main.html");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    console.log(textarea.value);
  }
};
let postimgae = (event) => {
  // console.log(event.target.files);

  let file = event.target.files[0];
  const fileref = firebase.storage().ref().child(`posts/${file.name}`);
  const uploadTask = fileref.put(file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
    },
    (error) => {
      console.log(error);
    },
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log("File available at", downloadURL);
        donwloadult = downloadURL;
        filetype = file.type;
      });
    }
  );
};
