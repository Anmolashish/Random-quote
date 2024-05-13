const body = document.getElementById("main-body");
const quote = document.getElementById("text");
const author = document.getElementById("author");

const updateQuote = async () => {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();

  quote.textContent = data.content;
  author.textContent = data.author;
};

const colorChange = async () => {
  const colorNumber = Math.floor(Math.random() * 48) + 2;
  const response = await fetch(
    `https://random-flat-colors.vercel.app/api/random?count=${colorNumber}`
  );
  const data = await response.json();

  console.log(data);

  body.style.backgroundColor = data.colors[2];
};

body.addEventListener("click", () => {
  updateQuote();
  colorChange();
});
