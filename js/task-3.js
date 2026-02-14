const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
inputName.addEventListener("input", listenInput);

function listenInput(event) {
  const name = (outputName.textContent = event.currentTarget.value.trim());
  outputName.textContent = name === "" ? "Anonymous" : name;
  //   if (name === "") {
  //     outputName.textContent = "Anonymous";
  //   } else {
  //     outputName.textContent = name;
  //   }
}
