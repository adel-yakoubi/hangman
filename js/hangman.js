var syntax = [
	"let",
	"script",
	"var",
	"document",
	"function",
	"indexOf",
	"isNaN",
	"innerhtml",
	"object"

]

let rep = '';
let maxfalse = 4;
let falsee = 0;
let tab = [];
let valid = null;

function randomWord() {
    rep = syntax[Math.floor(Math.random() * syntax.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-danger btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('key').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  tab.indexOf(chosenLetter) === -1 ? tab.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (rep.indexOf(chosenLetter) >= 0) {
      tabWord();
    checkIfGameWon();
  } else if (rep.indexOf(chosenLetter) === -1) {
    falsee++;
    updatefalsee();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('Pic').src = './images/' + falsee + '.jpg';
}

function checkIfGameWon() {
  if (valid === rep) {
    document.getElementById('key').innerHTML = 'You Win!!!';
  }
}

function checkIfGameLost() {
  if (falsee === maxfalse) {
    document.getElementById('word').innerHTML = 'The rep was: ' + rep;
    document.getElementById('key').innerHTML = 'You Lost!!!';
  }
}

function tabWord() {
    valid = rep.split('').map(letter => (tab.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('word').innerHTML = valid;
}

function updatefalsee() {
  document.getElementById('falsee').innerHTML = falsee;
}

function reset() {
    falsee = 0;
    tab = [];
  document.getElementById('Pic').src = './images/0.jpg';

  randomWord();
    tabWord();
  updatefalsee();
  generateButtons();
}

document.getElementById('maxfalse').innerHTML = maxfalse;

randomWord();
generateButtons();
tabWord();
