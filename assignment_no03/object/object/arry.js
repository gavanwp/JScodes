var UsersData = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: ["Sincere@april.biz"],
    phone: [
      {
        number: "1-770-736-8031",
      },
      {
        number: "010-692-6593",
      },
    ],
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: ["Shanna@melissa.tv", "Nathan@yesenia.net", "Sincere@april.biz"],
    phone: [
      {
        number: "032-692-5868",
      },
    ],
  },
  {
    name: "Clementine Bauch",
    username: "Samantha",
    email: ["Nathan@yesenia.net", "info@gmail.com"],
    phone: [
      {
        number: "(254)954-1289",
      },
      {
        number: "1-477-935-8478",
      },
      {
        number: "76495-3109",
      },
    ],
  },
  {
    name: "Clementine Bauch",
    username: "Samantha",
    email: ["Nathan@yesenia.net", "info@gmail.com"],
    phone: [
      {
        number: "(254)954-1289",
      },
      {
        number: "1-477-935-8478",
      },
      {
        number: "76495-3109",
      },
    ],
  },
];

for (let index = 0; index < UsersData.length; index++) {
  var contaienr = document.getElementById("contaienr");
  var box = document.createElement("div");
  contaienr.appendChild(box);
  box.setAttribute("id", "box");

  //Name
  var Name = document.createElement("h2");
  box.appendChild(Name);
  var idtext = document.createTextNode("Name :");
  Name.appendChild(idtext);
  Name.setAttribute("class", "Name");
  var name1 = document.createElement("h2");
  box.appendChild(name1);
  var name1Text = document.createTextNode(UsersData[index].name);
  name1.appendChild(name1Text);
  name1.setAttribute("class", "Name");

  ///  //  User Name
  var username = document.createElement("h2");
  box.appendChild(username);

  var nameText = document.createTextNode("Username :");
  username.appendChild(nameText);
  username.setAttribute("class", "Name");
  var UserName = document.createElement("h2");
  box.appendChild(UserName);
  var UserNameText = document.createTextNode(UsersData[index].username);
  UserName.appendChild(UserNameText);
  UserName.setAttribute("class", "Name");

  // Email Address
  var email = document.createElement("h2");
  box.appendChild(email);
  var emailText = document.createTextNode("Email :");
  email.appendChild(emailText);
  email.setAttribute("class", "Name");
  // div
  var div = document.createElement("div");
  box.appendChild(div);
  div.setAttribute("id", "div");

  for (let mail = 0; mail < UsersData[index].email.length; mail++) {
    // sub div
    var subdiv = document.createElement("div");
    div.appendChild(subdiv);
    subdiv.setAttribute("class", "subdiv");
    var Email = document.createElement("h2");
    subdiv.appendChild(Email);
    var EmailText = document.createTextNode(UsersData[index].email[mail]);
    Email.appendChild(EmailText);
    Email.setAttribute("class", "Name");
  }
  // Mobile Number
  var phone = document.createElement("h2");
  box.appendChild(phone);
  var PhoneText = document.createTextNode("Phone Number:");
  phone.appendChild(PhoneText);
  phone.setAttribute("class", "Name");
  var div2 = document.createElement("div");
  box.appendChild(div2);
  div2.setAttribute("id", "div2");
  for (let i = 0; i < UsersData[index].phone.length; i++) {
    var subdiv2 = document.createElement("div");
    div2.appendChild(subdiv2);
    subdiv2.setAttribute("class", "subdiv");
    var phonE = document.createElement("h2");
    subdiv2.appendChild(phonE);
    var PhonEText = document.createTextNode(UsersData[index].phone[i].number);
    phonE.appendChild(PhonEText);
    phonE.setAttribute("class", "Name");
  }
}
