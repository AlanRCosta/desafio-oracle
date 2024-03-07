const isValidString = (string) => /^[a-z\s.,;:!?]+$/.test(string);

const getInputValue = () => document.getElementById("inputText").value;

const stateChange = (text) => {
  const isValid = isValidString(text);

  if (isValid) {
    document.getElementById("tipText").style.color = "#495057";
    document.getElementById("tipText").style.fontSize = "0.75rem";
    document.getElementById("tipText").style.fontWeight = "400";
  } else {
    document.getElementById("tipText").style.color = "#C51921";
    document.getElementById("tipText").style.fontWeight = "bold";
    document.getElementById("tipText").style.fontSize = "0.9rem";
    document.getElementById("inputText").value = "";
  }

  if (text.length && isValid) {
    document.getElementById("noMessage").style.display = "none";
    document.getElementById("withMessage").style.display = "flex";
  } else {
    document.getElementById("noMessage").style.display = "flex";
    document.getElementById("withMessage").style.display = "none";
  }
};

const copyText = () => {
  document.querySelector("#outputText").select();
  document.execCommand("copy");
  document.getElementById("inputText").value = "";
};

const encryptOrDecrypt = (text, conditions, substitutions) => {
  let modifiedText = "";

  if (
    text.includes(conditions[0]) ||
    text.includes(conditions[1]) ||
    text.includes(conditions[2]) ||
    text.includes(conditions[3]) ||
    text.includes(conditions[4])
  ) {
    modifiedText = text
      .replaceAll(conditions[0], substitutions[0])
      .replaceAll(conditions[1], substitutions[1])
      .replaceAll(conditions[2], substitutions[2])
      .replaceAll(conditions[3], substitutions[3])
      .replaceAll(conditions[4], substitutions[4]);
  } else {
    modifiedText = text;
  }
  return modifiedText;
};

const encryptText = () => {
  const inputValue = getInputValue();

  const conditions = { 0: "e", 1: "i", 2: "a", 3: "o", 4: "u" };
  const substitutions = {
    0: "enter",
    1: "imes",
    2: "ai",
    3: "ober",
    4: "ufat",
  };

  const encryptedText = encryptOrDecrypt(inputValue, conditions, substitutions);

  stateChange(inputValue);

  document.getElementById("outputText").value = encryptedText;
};

const decryptText = () => {
  const inputValue = getInputValue();

  const conditions = { 0: "enter", 1: "imes", 2: "ai", 3: "ober", 4: "ufat" };
  const substitutions = { 0: "e", 1: "i", 2: "a", 3: "o", 4: "u" };

  const decryptedText = encryptOrDecrypt(inputValue, conditions, substitutions);

  stateChange(inputValue);

  document.getElementById("outputText").value = decryptedText;
};
