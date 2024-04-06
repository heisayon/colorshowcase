const app = document.getElementById("app");
const content = document.getElementById("content");
app.style.backgroundColor = "red";
content.style.fontSize = "40px";
content.style.marginTop = "350px";
content.style.display = "flex";
content.style.justifyContent = "center";
content.style.alignItems = "center";

const colorbank = [
  "red",
  "yellow",
  "green",
  "gold",
  "cyan",
  "blue",
  "lightBlue",
  "violet",
  "gray",
  "brown",
  "magenta",
  "silver",
  "white",
  "#123aa1",
  "#3b2b94",
  "gold",
  "wheat",
];
function colorChange() {
  for (let index = 0; index < 1; index++) {
    let randomness = Math.floor(Math.random() * colorbank.length);
    const element = colorbank[randomness];
    app.style.backgroundColor = element;
  }
}

const change = document.getElementById("change");
setInterval(() => {
  colorChange();
}, 4000);
