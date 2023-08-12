const span = document.querySelector("span");
const btn = document.querySelector("button");

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const changeColor = () => {
  let hex_number = "";
  for (let i = 0; i < 6; i++) {
    const random_index = random();
    hex_number += hex[random_index];
  }
  const hex_color = `#${hex_number}`;
  document.body.style.backgroundColor = hex_color;
  span.innerText = hex_color;
};

const random = () => {
  return Math.floor(Math.random() * hex.length);
};

changeColor();
btn.addEventListener("click", changeColor);
