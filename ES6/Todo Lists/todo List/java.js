var arry = [
  {
    number: "Question 01",
    question:
      "Coulomb used a torsion balance. A torsion balance is a sensitive device to measure ?",
    option1: "Charge",
    option2: "Elecricity",
    option3: "Polarity",
    option4: "Force",
    correct: "Charge",
  },
    {
      number: "Question 02",
      question:
        "Coulomb used a torsion balance. A torsion balance is a sensitive device to measure ?",
      option1: "Charge",
      option2: "Elecricity",
      option3: "Polarity",
      option4: "Force",
      correct: "Charge",
    },
];

for (let index = 0; index < arry.length; index++) {
  var subdiv = document.getElementById("subdiv");
  var div1 = document.createElement("div");
  subdiv.appendChild(div1);
  div1.setAttribute("class", "question");
  var questionnum = document.createElement("h1");
  div1.appendChild(questionnum);
  questionnum.innerHTML = arry[index].number;
  var question = document.createElement("h3");
  div1.appendChild(question);
  question.innerHTML = arry[index].question;

  // option  1
  var option1 = document.createElement("div");
  subdiv.appendChild(option1);
  option1.setAttribute("class", "options");

  var input1 = document.createElement("input");
  option1.appendChild(input1);
  input1.setAttribute("type", "radio");
  input1.setAttribute("id", "option1");
  input1.setAttribute("name", "radio");
  input1.setAttribute("value", arry[index].option1);
  input1.setAttribute("class", "input");

  var headingOption1 = document.createElement("label");
  option1.appendChild(headingOption1);
  headingOption1.innerHTML = arry[index].option1;
  headingOption1.setAttribute("for", "option1");

  // option  2
  var option2 = document.createElement("div");
  subdiv.appendChild(option2);
  option2.setAttribute("class", "options");

  var input2 = document.createElement("input");
  option2.appendChild(input2);
  input2.setAttribute("type", "radio");
  input2.setAttribute("id", "option2");
  input2.setAttribute("name", "radio");
  input2.setAttribute("value", arry[index].option2);
  input2.setAttribute("class", "input");

  var headingOption2 = document.createElement("label");
  option2.appendChild(headingOption2);
  headingOption2.innerHTML = arry[index].option2;
  headingOption2.setAttribute("for", "option2");

  // option 3
  var option3 = document.createElement("div");
  subdiv.appendChild(option3);
  option3.setAttribute("class", "options");

  var input3 = document.createElement("input");
  option3.appendChild(input3);
  input3.setAttribute("type", "radio");
  input3.setAttribute("id", "option3");
  input3.setAttribute("name", "radio");
  input3.setAttribute("value", arry[index].option3);
  input3.setAttribute("class", "input");

  var headingOption3 = document.createElement("label");
  option3.appendChild(headingOption3);
  headingOption3.innerHTML = arry[index].option3;
  headingOption3.setAttribute("for", "option3");

  // option 4
  var option4 = document.createElement("div");
  subdiv.appendChild(option4);
  option4.setAttribute("class", "options");
  var inpuT4 = document.createElement("input");
  option4.appendChild(inpuT4);
  inpuT4.setAttribute("type", "radio");
  inpuT4.setAttribute("id", "option4");
  inpuT4.setAttribute("name", "radio");
  inpuT4.setAttribute("class", "input");
  inpuT4.setAttribute("value", arry[index].option4);
  var headingOption4 = document.createElement("label");
  option4.appendChild(headingOption4);
  headingOption4.innerHTML = arry[index].option4;
  headingOption4.setAttribute("for", "option4");
  var inpuT = document.getElementsByClassName("input");
function add() {
  for (let i = 0; i < inpuT.length; i++) {
    if (inpuT[i].checked) {
      console.log(inpuT[i].value);
    } else {
      console.log("NOT");
    }
  }
}

}

// var button = document.createElement("button");
// subdiv.appendChild(button);
// var buttonTExt = document.createTextNode("Button");
// button.appendChild(buttonTExt);
// button.setAttribute("onclick", "add()");
