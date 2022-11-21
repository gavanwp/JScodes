var container = document.getElementById("container");
var sub_container = document.createElement("div");
sub_container.setAttribute("id", "subdiv");
container.appendChild(sub_container);

var div1 = document.createElement("div");
sub_container.appendChild(div1);
div1.setAttribute("id", "div1");

var div2 = document.createElement("div");
div1.appendChild(div2);
div2.setAttribute("id", "div2");
var heading = document.createElement("h1");
div2.appendChild(heading);
heading.setAttribute("id", "heading");
var texthead = document.createTextNode("Create Account");

heading.appendChild(texthead);

var div3 = document.createElement("div");
div1.appendChild(div3);
div3.setAttribute("id", "div3");

var input1 = document.createElement("input");
div3.appendChild(input1);
input1.setAttribute("class", "input");
input1.setAttribute("placeholder", " Full Name");
var input2 = document.createElement("input");
div3.appendChild(input2);
input2.setAttribute("class", "input");
input2.setAttribute("placeholder", "Email");
var input3 = document.createElement("input");
div3.appendChild(input3);
input3.setAttribute("placeholder", "User Name");
input3.setAttribute("class", "input");
var input4 = document.createElement("input");
div3.appendChild(input4);
input4.setAttribute("placeholder", "Password");
input4.setAttribute("class", "input");

var div4 = document.createElement("div");
div1.appendChild(div4);
div4.setAttribute("id", "div4");
var button = document.createElement("button");
div4.appendChild(button);
button.setAttribute("id", "button");
var bttext = document.createTextNode("SIGN UP");
button.appendChild(bttext);
button.setAttribute("onClick", "CUserdatear()");

function Userdate() {
  var name = input1.value;

  var email = input2.value;

  var username = input2.value;

  var pass = input4.value;

  if (name === "") {
    alert("hello");
  } else if (email === "") {
    alert("hello world");
  } else if (username === "") {
    alert("Please enter your email");
  } else if (pass === "") {
    alert("please enter your password");
  } else {
    console.log(name);
  }
}






























// var obj2 = new Object();
// // console.log(obj2);

// function Userdate(name, email) {
//   this.name = name;
//   this.email = email;
// }

// var user1 = new Userdate(input1.value , input2.value);
// console.log("user1", user1);
// var user2 = new Userdate("Hello World", "info@gmail.com");
// console.log("user2", user2);
