const getValue = () => {
  let inputValue = document.getElementById("inputText").value;

  stateChange(inputValue);
};

const copyText = () => {
  document.querySelector("#outputText").select();
  document.execCommand("copy");
};

const stateChange = (text) => {
  if (text.length) {
    document.getElementById("noMessage").style.display = "none";
    document.getElementById("withMessage").style.display = "flex";
  } else {
    document.getElementById("noMessage").style.display = "flex";
    document.getElementById("withMessage").style.display = "none";
  }
};
