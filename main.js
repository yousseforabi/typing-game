// DOM 
const wordEl = document.getElementById('word');
const textEl = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');

// collection of the words
const words = [
   "dog", "superficial", "admit", "juice", "javascript", "developer",
  "airplane", "great", "fun", "manipulate", "cat", "transition", "school",
  "computer", "programming", "drag", "loving", "north"
];

// first word
let randomWord;

// sstaring score
let score = 0;

// startig time
let time = 10;

// Focus on text on start
textEl.focus();

// creating random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  wordEl.innerHTML = randomWord;
}

// Update scoring
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update the time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

// Game over screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}

// Start game
addWordToDOM();

// Events
textEl.addEventListener('input', function(e) {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear input
    e.target.value = '';

    // Add time
    time += 5;

    updateTime();
  }
});

// Start counting down
const timeInterval = setInterval(updateTime, 1000);