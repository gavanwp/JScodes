var container = document.getElementById("maindiv");
var sub_container = document.createElement("div");
sub_container.setAttribute("class", "container");
container.appendChild(sub_container);
var inputdiv = document.createElement("div");
sub_container.appendChild(inputdiv);
inputdiv.setAttribute("id", "inputdiv");
var input = document.createElement("input");
inputdiv.appendChild(input);
input.setAttribute("type", "text");
input.setAttribute("id", "input");
input.setAttribute("placeholder", "Type Something.....");
var button = document.createElement("button");
inputdiv.appendChild(button);
button.setAttribute("id", "button");
var image = document.createElement("img");
button.appendChild(image);
image.setAttribute("src", "plus.png");
image.setAttribute("alt", "plus");
image.setAttribute("id", "img");
button.setAttribute("onClick", "add()");
var p = document.createElement("p");
sub_container.appendChild(p);
p.setAttribute("class", "p");

var paragraph_text = document.createTextNode("Plese enter the value ");
p.appendChild(paragraph_text);

var secoundp = document.createElement("p");
sub_container.appendChild(secoundp);

var listdiv = document.createElement("div");
sub_container.appendChild(listdiv);
let reload = document.createElement("img");
listdiv.appendChild(reload);
reload.setAttribute("src", "./Round-Line-Loading.gif");
reload.setAttribute("id", "reload");

// History
var div5 = document.createElement("div");
var p_1 = document.createElement("p");
sub_container.appendChild(div5);

// All Delete Button
var btdiv = document.createElement("div");
sub_container.appendChild(btdiv);
btdiv.setAttribute("id", "btdiv");
var alldelete = document.createElement("button");

alldelete.setAttribute("id", "alldelete");
var teXtbt = document.createTextNode("All Delete");
alldelete.appendChild(teXtbt);
secoundp.style.display = "block";

function add() {
  if (input.value === "") {
    p.style.display = "block";
    input.focus();
    setTimeout(function () {
      p.style.display = "none";
    }, 1000);
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    firebase
      .database()
      .ref("todolist/")
      .push({
        todoValue: input.value,
      })
      .then(() => {
        input.value = "";
      });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}

firebase
  .database()
  .ref("todolist/")
  .on("value", (data) => {
    reload.style.display = "none";
    // const mydata = data.val().value;
    if (data.val() === null) {
      Swal.fire("Empty Data");
    } else {
      data.forEach((todoValue) => {
        let todokey = todoValue.key;
        console.log(todokey);
        listdiv.setAttribute("id", "listdiv");
        var list_1 = document.createElement("div");
        listdiv.appendChild(list_1);
        list_1.setAttribute("class", "list_1");
        var olist = document.createElement("ol");
        list_1.appendChild(olist);
        olist.setAttribute("class", "olist");
        var listItems = document.createElement("li");
        olist.appendChild(listItems);
        var listText = document.createTextNode(todoValue.val().todoValue);
        listItems.appendChild(listText);
        var buttondiv = document.createElement("div");
        list_1.appendChild(buttondiv);
        buttondiv.setAttribute("class", "mybutton");
        var button1 = document.createElement("button");
        buttondiv.append(button1);
        button1.setAttribute("class", "button1");
        button1.setAttribute("id", "editbutton");

        var img1 = document.createElement("img");
        button1.append(img1);
        img1.setAttribute("src", "check.png");
        img1.setAttribute("alt", "check");
        img1.setAttribute("id", "img1");
        var button2 = document.createElement("button");
        buttondiv.appendChild(button2);
        button2.setAttribute("id", "button2");
        var img2 = document.createElement("img");
        button2.appendChild(img2);
        img2.setAttribute("src", "close.png");
        img2.setAttribute("alt", "close");
        img2.setAttribute("id", "img2");

        /// Edit List
        button1.addEventListener("click", function () {
          var promt = prompt("", todoValue.val().todoValue);
          firebase
            .database()
            .ref("todolist/" + todokey)
            .update({
              todoValue: promt,
              edit: true,
            });
          window.location.reload();
        });

        // Delete Funcation
        button2.addEventListener("click", function () {
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
          });
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
              firebase
                .database()
                .ref("todolist/" + todokey)
                .remove();
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        });
      });
    }
  });
