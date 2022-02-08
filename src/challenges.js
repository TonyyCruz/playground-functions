// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(inputString) {
  return inputString.split(' ');
}

// Desafio 4
function concatName(inputArray) {
  let result = `${inputArray[inputArray.length - 1]}, ${inputArray[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestNumber(array) {
  let highest = array[0];
  for (let key of array) {
    if (key > highest) { highest = key; }
  }
  return highest;
}
function highestCount(numbersArray) {
  let count = 0;
  let highestArrayNumber = highestNumber(numbersArray);
  for (let key of numbersArray) {
    if (key === highestArrayNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catDistance(ratPosition, catPosition) {
  if (catPosition > ratPosition) { return catPosition - ratPosition; }
  if (catPosition < ratPosition) { return ratPosition - catPosition; }
  return 0;
}

function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = catDistance(mouse, cat1);
  let cat2Distance = catDistance(mouse, cat2);
  if (cat1Distance < cat2Distance) { return 'cat1'; }
  if (cat1Distance > cat2Distance) { return 'cat2'; }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
