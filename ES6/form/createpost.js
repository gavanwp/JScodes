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
    };
    firebase
      .firestore()
      .collection("posts/")
      .add(obj)
      .then(() => {
        massage.innerHTML = "Your post created";
        massage.style.color = "green";
        setTimeout(() => {
          window.location.assign("./main.html");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    console.log(textarea.value);
  }
};

/// show data

// var showdata = firebase
//   .firestore()
//   .collection("posts")
//   .doc("yvFxToiNW1bWp9f97JEI");
// let showtext = document.getElementById("h3");

// showdata
//   .get()
//   .then((doc) => {
//     if (doc.exists) {
//       // console.log("Document data:", doc.data().UserID);
//       showtext.innerHTML = doc.data().value;
//     } else {
//       console.log("No such document!");
//     }
//   })
//   .catch((error) => {
//     console.log("Error getting document:", error);
//   });

/// Update Value
// let updateData = () => {
//   let pro = prompt("");
//   var washingtonRef = firebase
//     .firestore()
//     .collection("posts")
//     .doc("DphBabb5xDeCDZIfRoic");

//   washingtonRef
//     .update({
//       value: pro,
//     })
//     .then(() => {
//       console.log("Document successfully updated!");
//     })
//     .catch((error) => {
//       console.error("Error updating document: ", error);
//     });
// };
