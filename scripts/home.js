const texto = "slcr";

function teste(texto) {
  const conditions = { 0: "a", 1: "e", 2: "i", 3: "o", 4: "u" };

  let frase = "";

  if (
    texto.includes(conditions[0]) ||
    texto.includes(conditions[1]) ||
    texto.includes(conditions[2]) ||
    texto.includes(conditions[3]) ||
    texto.includes(conditions[4])
  ) {
    frase = texto
      .replaceAll(conditions[0], "x")
      .replaceAll(conditions[1], "x")
      .replaceAll(conditions[2], "x")
      .replaceAll(conditions[3], "x")
      .replaceAll(conditions[4], "x");
  } else {
    frase = texto;
  }
  return frase;
}

console.log(teste(texto));

// const getValue = () => {
//   let inputValue = document.getElementById("inputText").value;

//   stateChange(inputValue);
// };

// const copyText = () => {
//   document.querySelector("#outputText").select();
//   document.execCommand("copy");
// };

// const stateChange = (text) => {
//   if (text.length) {
//     document.getElementById("noMessage").style.display = "none";
//     document.getElementById("withMessage").style.display = "flex";
//   } else {
//     document.getElementById("noMessage").style.display = "flex";
//     document.getElementById("withMessage").style.display = "none";
//   }
// };
