const date = new Date().toDateString();
const setdate = document.querySelector(".setdate");
setdate.innerHTML = date;

setInterval(function () {
  const time = new Date().toLocaleTimeString();
  const settime = document.querySelector(".settime");

  settime.innerHTML = time;
}, 500);

let input = document.getElementById("input");
let add_Task = document.getElementById("addTask");
let taskNumber = document.getElementById("taskNumber");
var shown = document.querySelector(".added_tasks");
let added_li = document.getElementsByClassName("added_tasks");

let ClickME = () => {
  if (input.value === "") {
    Swal.fire("Please Enter Your Task");
  } else {
    // >>>>>>>>>>>>>>>>>>> FireBase Code

    firebase
      .database()
      .ref("mydata/")
      .push({
        todo: input.value,
      })
      .then(() => {
        window.location.reload();
        input.value = "";
      });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your task has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

/// Todo Show
let reloadImg = document.getElementById("myimg");
firebase
  .database()
  .ref("mydata/")
  .on("value", (res) => {
    reloadImg.style.display = "none";
    if (res.val() === null) {
      swal({
        text: "Task Not Found",
        button: "Add Task",
      });
    } else {
      res.forEach((todoValue) => {
        var todokey = todoValue.key;
        var i = Math.floor(Math.random() * (999999 - 100000) * 100070);
        var line = document.createElement("li");
        line.setAttribute("id", i);
        var list_items = `<div class="content"><span class="tick" id=Tick "><i id="checked${i}" class="fa fa-check d-none"></i></span>
        <p><strike id="strike${i}" class="strike-none">${
          todoValue.val().todo
        }</strike></p>
    </div><span ><i class="fa fa-trash"  id="delete"></i></span>`;

        line.innerHTML = list_items;
        shown.appendChild(line);

        taskNumber.innerHTML = added_li.length + 1;

        // Edit value
        let Tick = document.getElementById("Tick");

        Tick.addEventListener("click", () => {
          let todopro = prompt("todo value", todoValue.val().todo);

          firebase
            .database()
            .ref("mydata/" + todokey)
            .update({
              todo: todopro,
              edit: true,
            });
          window.location.reload();
        });

        let dElete = document.getElementById("delete");
        dElete.addEventListener("click", function () {
          swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
              firebase.database().ref("mydata/").remove();
              window.location.reload();
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        });
      });
    }
  });

// function Delete(list_id) {
//   swal({
//     title: "Are you sure?",
//     text: "Once deleted, you will not be able to recover this imaginary file!",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   }).then((willDelete) => {
//     if (willDelete) {
//       swal("Poof! Your imaginary file has been deleted!", {
//         icon: "success",
//       });
//       firebase
//       .database()
//       .ref("mydata/" + todokey)
//       .remove()

//     } else {
//       swal("Your imaginary file is safe!");
//     }
//   });
// }

//   var added_li = document.querySelectorAll(".added_tasks li");
//   var elem = document.getElementById(list_id);
//   shown.removeChild(elem);
//   numtask.innerHTML = added_li.length + 1;
// }

// const swalWithBootstrapButtons = Swal.mixin({
//     customClass: {
//       confirmButton: 'btn btn-success',
//       cancelButton: 'btn btn-danger'
//     },
//     buttonsStyling: false
//   })

//   swalWithBootstrapButtons.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonText: 'Yes, delete it!',
//     cancelButtonText: 'No, cancel!',
//     reverseButtons: true
//   }).then((result) => {
//     if (result.isConfirmed) {
//       swalWithBootstrapButtons.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     } else if (
//       /* Read more about handling dismissals below */
//       result.dismiss === Swal.DismissReason.cancel
//     ) {
//       swalWithBootstrapButtons.fire(
//         'Cancelled',
//         'Your imaginary file is safe :)',
//         'error'
//       )
//     }
//   } )
