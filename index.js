var Name = document.getElementById("Name1");
var email = document.getElementById("Email");
var tel = document.getElementById("tel");
var message = document.getElementById("message");
var linkButton = document.getElementById("whatsappbtn");
var usermessage = {
  Name: Name.value,
  Email: email.value,
  Tel: tel.value,
  Message: message.value,
};
function handleChange() {
  usermessage.Name = Name.value;
  usermessage.Email = email.value;
  usermessage.Tel = tel.value;
  usermessage.Message = message.value;
}
var whatsappSend = linkButton.addEventListener("click", function () {
  location.href =
    "https://wa.me/2348132030908?text=" + JSON.stringify(usermessage);
});
