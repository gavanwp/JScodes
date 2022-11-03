// var country_list = [
//   "Afghanistan",
//   "Albania",
//   "Algeria",
//   "Andorra",
//   "Angola",
//   "Anguilla",
//   "Antigua &amp; Barbuda",
//   "Argentina",
//   "Armenia",
//   "Aruba",
//   "Australia",
//   "Austria",
//   "Azerbaijan",
//   "Bahamas",
//   "Bahrain",
//   "Bangladesh",
//   "Barbados",
//   "Belarus",
//   "Belgium",
//   "Belize",
//   "Benin",
//   "Bermuda",
//   "Bhutan",
//   "Bolivia",
//   "Bosnia &amp; Herzegovina",
//   "Botswana",
//   "Brazil",
//   "British Virgin Islands",
//   "Brunei",
//   "Bulgaria",
//   "Burkina Faso",
//   "Burundi",
//   "Cambodia",
//   "Cameroon",
//   "Cape Verde",
//   "Cayman Islands",
//   "Chad",
//   "Chile",
//   "China",
//   "Colombia",
//   "Congo",
//   "Cook Islands",
//   "Costa Rica",
//   "Cote D Ivoire",
//   "Croatia",
//   "Cruise Ship",
//   "Cuba",
//   "Cyprus",
//   "Czech Republic",
//   "Denmark",
//   "Djibouti",
//   "Dominica",
//   "Dominican Republic",
//   "Ecuador",
//   "Egypt",
//   "El Salvador",
//   "Equatorial Guinea",
//   "Estonia",
//   "Ethiopia",
//   "Falkland Islands",
//   "Faroe Islands",
//   "Fiji",
//   "Finland",
//   "France",
//   "French Polynesia",
//   "French West Indies",
//   "Gabon",
//   "Gambia",
//   "Georgia",
//   "Germany",
//   "Ghana",
//   "Gibraltar",
//   "Greece",
//   "Greenland",
//   "Grenada",
//   "Guam",
//   "Guatemala",
//   "Guernsey",
//   "Guinea",
//   "Guinea Bissau",
//   "Guyana",
//   "Haiti",
//   "Honduras",
//   "Hong Kong",
//   "Hungary",
//   "Iceland",
//   "India",
//   "Indonesia",
//   "Iran",
//   "Iraq",
//   "Ireland",
//   "Isle of Man",
//   "Israel",
//   "Italy",
//   "Jamaica",
//   "Japan",
//   "Jersey",
//   "Jordan",
//   "Kazakhstan",
//   "Kenya",
//   "Kuwait",
//   "Kyrgyz Republic",
//   "Laos",
//   "Latvia",
//   "Lebanon",
//   "Lesotho",
//   "Liberia",
//   "Libya",
//   "Liechtenstein",
//   "Lithuania",
//   "Luxembourg",
//   "Macau",
//   "Macedonia",
//   "Madagascar",
//   "Malawi",
//   "Malaysia",
//   "Maldives",
//   "Mali",
//   "Malta",
//   "Mauritania",
//   "Mauritius",
//   "Mexico",
//   "Moldova",
//   "Monaco",
//   "Mongolia",
//   "Montenegro",
//   "Montserrat",
//   "Morocco",
//   "Mozambique",
//   "Namibia",
//   "Nepal",
//   "Netherlands",
//   "Netherlands Antilles",
//   "New Caledonia",
//   "New Zealand",
//   "Nicaragua",
//   "Niger",
//   "Nigeria",
//   "Norway",
//   "Oman",
//   "Pakistan",
//   "Palestine",
//   "Panama",
//   "Papua New Guinea",
//   "Paraguay",
//   "Peru",
//   "Philippines",
//   "Poland",
//   "Portugal",
//   "Puerto Rico",
//   "Qatar",
//   "Reunion",
//   "Romania",
//   "Russia",
//   "Rwanda",
//   "Saint Pierre &amp; Miquelon",
//   "Samoa",
//   "San Marino",
//   "Satellite",
//   "Saudi Arabia",
//   "Senegal",
//   "Serbia",
//   "Seychelles",
//   "Sierra Leone",
//   "Singapore",
//   "Slovakia",
//   "Slovenia",
//   "South Africa",
//   "South Korea",
//   "Spain",
//   "Sri Lanka",
//   "St Kitts &amp; Nevis",
//   "St Lucia",
//   "St Vincent",
//   "St. Lucia",
//   "Sudan",
//   "Suriname",
//   "Swaziland",
//   "Sweden",
//   "Switzerland",
//   "Syria",
//   "Taiwan",
//   "Tajikistan",
//   "Tanzania",
//   "Thailand",
//   "Timor L'Este",
//   "Togo",
//   "Tonga",
//   "Trinidad &amp; Tobago",
//   "Tunisia",
//   "Turkey",
//   "Turkmenistan",
//   "Turks &amp; Caicos",
//   "Uganda",
//   "Ukraine",
//   "United Arab Emirates",
//   "United Kingdom",
//   "Uruguay",
//   "Uzbekistan",
//   "Venezuela",
//   "Vietnam",
//   "Virgin Islands (US)",
//   "Yemen",
//   "Zambia",
//   "Zimbabwe",
// ];

// var selected = "Uzbekistan"

// for (var var_1 = 0; var_1 < country_list.length; var_1 ++) {

//   if (selected === country_list[var_1]  ) {
//     console.log("index number " + var_1 , selected)
//     break;

//   } else {
//     console.log("Pleae enter your correct value ")
//   }

// }

// var a = 10;
// var b = 20;
// var c = 30;
// var d = 40;

// var selected = 20;

// if (selected === a || selected === b || selected === c || selected === d  ) {
//   console.log("index number " + selected)

// } else {
//   console.log("Pleae enter your correct value ")
// }

// var ary_1 = [10,20,30,]
// var selected_1 = 10;

// if (selected_1 === ary_1[0] || selected_1 === ary_1[1] || selected_1 === ary_1[2] || selected_1 === ary_1[3]  ) {
//   console.log("index number " + selected_1)

// } else {
//   console.log("Pleae enter your correct value ")
// }

// assignment no 2

var p =
  "iSkillers IT Skills Training & Job creation Program 99 is provincial, classroom based and online training program, started by Tharparkar s first IT Company iSkillers to . We aim to train one million people across Sindh in next 10 years.";

var a = prompt("Enter the text ");

for (var i = 0; i < p.length; i++) {
  // console.log(p[i]);
  if (p.slice(i, i + a.length) === a) {
    console.log("The index of >>>" + i);
  } else {
    console.log("Not found");
  }
}

// assignment 03

var firstname = [
  "Rick",
  "Susan",
  "Margaret",
  "Ronald",
  "Marie",
  "Roger",
  "Marlene",
  "Jeff",
  "Melvin",
];
var lastname = [
  "Novak",
  "Connor",
  "Adelman",
  "Barr",
  "Broadbet",
  "Lum",
  "Donahue",
  "Johnson",
  "Forbis",
];
var fullname = [];
for (var i = 0; i < firstname.length; i++) {
  //   console.log(firstname[i]);
  for (var j = 0; j < lastname.length; j++) {
    // document.write(firstname[i] + " " + lastname[j], "<br/>");
    fullname.push(firstname[i] + " " + lastname[j], "<br/>");
  }
}
for (var k = 0; k < fullname.length; k++) {
  document.write(fullname[k]);
  document.write(fullname);
}

/// assignment 03
var p =
  "iSkillers IT Skills Training & Job creation Program 99 is provincial, classroom based and online training program, started by Tharparkar s first IT Company iSkillers to . We aim to train one million people across Sindh in next 10 years.";

var a = prompt("Enter the text ");

for (var i = 0; i < p.length; i++) {
  // console.log(p[i]);
  if (p.slice(i, i + 9) === "iskiller") {
    // console.log("The index of >>>" + i);
    p = p.slice(0, i + 9) + "iskiller123+";
  } else {
    console.log("Not found");
  }
}
