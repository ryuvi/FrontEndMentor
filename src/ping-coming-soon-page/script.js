const button = document.getElementById("button");
const errormsg = document.getElementById("error");

button.addEventListener("click", (e) => {
  e.preventDefault();
  var email = document.getElementById("email");
  if (
    IsEmail(email.value) == false ||
    email.value == null ||
    email.value == ""
  ) {
    errormsg.style.opacity = 1;
    email.style.borderColor = "#ea0000";
  }
});

function IsEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
