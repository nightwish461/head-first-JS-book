/*
    Basic DOM operations
*/
console.log("### DOM operations ###");

// function toggleText(button_id) {
//   var text = document.getElementById(button_id).firstChild;
//   text.data = text.data == "Lock" ? "Unlock" : "Lock";
// }

var languages = ["EN", "DE", "FR"];
var text = [
  {
    language: "EN",
    text: "Hello",
  },
  {
    language: "DE",
    text: "Hallo",
  },
  {
    language: "FR",
    text: "Bonjour",
  },
];

for (let i = 0; i < languages.length; i++) {
  var button = document.createElement("button");
  button.textContent = languages[i];
  button.addEventListener("click", setText.bind(this, button.textContent));
  document.getElementById("buttonLanguages").appendChild(button);
}

function setText(language) {
  console.log("testtt", language);
  var currentText = text
    .filter((e) => e.language === language)
    .map((e) => e.text);
  console.log("testtt", currentText);
  document.getElementById("languageText").innerHTML = currentText;
}
