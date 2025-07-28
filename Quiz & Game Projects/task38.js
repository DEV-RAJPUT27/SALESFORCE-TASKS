const board = document.getElementById("gameBoard");
const statusText = document.getElementById("statusText");

const cardsArray = [
  "img1.png", "img1.png",
  "img2.png", "img2.png",
  "img3.png", "img3.png",
  "img4.png", "img4.png",
  "img5.png", "img5.png",
  "img6.png", "img6.png"
];

let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function createBoard() {
  const shuffled = shuffle(cardsArray);
  board.innerHTML = "";

  for (let i = 0; i < shuffled.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.image = shuffled[i];

    const img = document.createElement("img");
    img.src = shuffled[i];
    card.appendChild(img);

    card.addEventListener("click", () => flipCard(card));
    board.appendChild(card);
  }
}

function flipCard(card) {
  if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 700);
    }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.image === card2.dataset.image) {
    matchedCards.push(card1, card2);
    statusText.textContent = "Great! It's a match!";
  } else {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
    statusText.textContent = "Oops! Try again.";
  }

  flippedCards = [];

  if (matchedCards.length === cardsArray.length) {
    statusText.textContent = "🎉 You won! All cards matched!";
  }
}

function restartGame() {
  matchedCards = [];
  flippedCards = [];
  statusText.textContent = "Find all the pairs!";
  createBoard();
}

createBoard();
