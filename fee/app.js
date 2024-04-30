const colorCard = document.getElementById("colorCard");
const randomColorGenerator = document.getElementById("randomColorGenerator");
const colorCode = document.getElementById("colorCode");

document.addEventListener("DOMContentLoaded", () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  colorCard.style.backgroundColor = `#${randomColor}`;
  colorCode.value = `#${randomColor}`;
});

randomColorGenerator.addEventListener("click", () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  colorCard.style.backgroundColor = `#${randomColor}`;
  colorCode.value = `#${randomColor}`;
});

const CopyToClipboard = (id) => navigator.clipboard.writeText(id);

//to copy hex code
colorCode.addEventListener("click", () => {
  CopyToClipboard(colorCode.value);
  alert(`Copied : ${colorCode.value}`);
});