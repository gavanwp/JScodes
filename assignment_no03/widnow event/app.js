
var container = document.getElementById("container");
var button = document.createElement("button");
container.appendChild(button);
var buttonText = document.createTextNode("Submit");
button.appendChild(buttonText);
button.setAttribute("onclick", "add()");
function add() {
//   window.open("close.html", "_parent", "width=430, height=600");
window.open("close.html", "", "width=430, height=600");
}

