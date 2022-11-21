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
var paragraph_text1 = document.createTextNode("Form Successfully added  ");
secoundp.appendChild(paragraph_text1);
secoundp.setAttribute("id", "secoundp");

var listdiv = document.createElement("div");
sub_container.appendChild(listdiv);
listdiv.setAttribute("id", "listdiv");

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

function add() {
  if (input.value === "") {
    p.style.display = "block";

    input.focus();
    setTimeout(function () {
      p.style.display = "none";
    }, 1000);
  } else {
    secoundp.style.display = "block";
    console.log(input.value);

    setTimeout(function () {
      secoundp.style.display = "none";
    }, 1000);
    var list_1 = document.createElement("div");
    listdiv.appendChild(list_1);
    list_1.setAttribute("class", "list_1");
    var olist = document.createElement("ol");
    list_1.appendChild(olist);
    olist.setAttribute("class", "olist");
    var listItems = document.createElement("li");
    listItems.setAttribute("id", input.value)
    olist.appendChild(listItems);
    var listText = document.createTextNode(input.value);
    listItems.appendChild(listText);
    var buttondiv = document.createElement("div");
    list_1.appendChild(buttondiv);
    buttondiv.setAttribute("class", "mybutton");
    var button1 = document.createElement("button");
    buttondiv.append(button1);
    button1.setAttribute("class", "button1");

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
    img1.addEventListener;
   
    // Delete Button 
    button1.addEventListener("click", function () {
      olist.parentNode.remove();
      var p1_text = document.createTextNode(listItems.innerHTML);
      p_1.appendChild(p1_text);
    });
    /// edit Button
    button2.addEventListener("click", function () {
      var promt = prompt("", listItems.id);
      listItems.innerHTML = promt;
      listItems.setAttribute("id", promt)
    });

    div5.setAttribute("id", "bgcolorlastdiv");

    div5.appendChild(p_1);
    p_1.setAttribute("class", "paragraph");

    alldelete.addEventListener("click", function () {
      olist.parentNode.remove();
    });
    btdiv.appendChild(alldelete);
    input.value = null;
  }
}
