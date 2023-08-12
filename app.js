const span = document.querySelector("span");
const btn = document.querySelector("button");

const color = ["#dc6464", "#148e65", "green", "red", "rgb(131, 58, 130)"];

const changeColor = () => {
  const random_index = random();
  const random_color = color[random_index];
  document.body.style.backgroundColor = random_color;
  span.innerText = color[random_index];
};

const random = () => {
  return Math.floor(Math.random() * color.length);
};

changeColor();
btn.addEventListener("click", changeColor);
