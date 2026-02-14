const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const eventElement = event.currentTarget;
  const inputEmail = eventElement.elements.email.value.trim();
  const inputPassword = eventElement.elements.password.value.trim();
  if (inputEmail === "" || inputPassword === "") {
    alert("All form fields must be filled in");
    return;
  }
  console.log({ email: inputEmail, password: inputPassword });
  eventElement.reset();
});
