var inputTxt = document.querySelector("#txtInput");
var outputBox = document.querySelector("#txtOutput");
var btnTranslate = document.querySelector("#btn-Translate");

var serverURL = "https://api.funtranslations.com/translate/navi.json";

function createURL(text) {
  return serverURL + "?" + "text=" + text;
}
function errorHandler(error) {
  console.log("error occured", error);
  alert("Something went wrong with the server, Try again later");
}

function clickHandler() {
  var finalText = inputTxt.value;

  fetch(createURL(finalText))
    .then((response) => response.json())

    .then((json) => {
      var finalOutput = json.contents.translated;
      outputBox.innerText = finalOutput;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
