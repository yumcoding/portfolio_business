const words = document.querySelectorAll(".word");
const wordArray = [];

let currentWordIndex = 0;

words[currentWordIndex].style.opacity = 1;

const splitLetters = (word) => {
  const content = word.innerHTML;
  word.innerHTML = "";
  const letters = [];
  for (let i = 0; i < content.length; i++) {
    const letter = document.createElement("span");
    letter.classList.add("letter");
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  wordArray.push(letters);
};

words.forEach((word) => {
  splitLetters(word);
});

const animateLetterOut = (cw, i) => {
  setTimeout(() => {
    cw[i].className = "letter out";
  }, i * 80);
};

const animateLetterIn = (nw, i) => {
  setTimeout(() => {
    nw[i].className = "letter in";
  }, 340 + i * 80);
};

const changeWord = () => {
  const cw = wordArray[currentWordIndex];
  const nw =
    currentWordIndex === words.length - 1
      ? wordArray[0]
      : wordArray[currentWordIndex + 1];

  for (let i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  for (let i = 0; i < nw.length; i++) {
    nw[i].className = "letter behind";
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWordIndex =
    currentWordIndex === wordArray.length - 1 ? 0 : currentWordIndex + 1;
};

changeWord();
setInterval(changeWord, 4000);
