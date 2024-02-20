//function
function showMessage(event) {
  event.preventDefault();
  let inputNameElement = document.getElementById("name");
  let name = inputNameElement.value;

  alert(`Thank you ${name}. We have received your message and will get back to you as soon as possible😊
`);
  //console.log("hello");
}
let formElement = document.getElementById("user-details");
formElement.addEventListener("submit", showMessage);