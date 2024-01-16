const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
  hex.style.backgroundColor = "#" + randomColor;
};

btn.addEventListener("click", generateColor);

//change color evrytime page loads
generateColor();

// let color = Math.random();
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2, 8); // cause hex should be 6
// console.log(color);
