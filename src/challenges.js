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
function divisor(number) {
  if (number % 3 === 0 && number % 5 === 0) { return 'fizzBuzz'; }
  if (number % 3 === 0) { return 'fizz'; }
  if (number % 5 === 0) { return 'buzz'; }
  return 'bug!';
}

function fizzBuzz(numbersArray) {
  let result = [];
  for (let key of numbersArray) {
    result.push(divisor(key));
  }
  return result;
}

// Desafio 9
// eslint-disable-next-line complexity
function codifique(letra) {
  if (letra === 'a') { return 1; }
  if (letra === 'e') { return 2; }
  if (letra === 'i') { return 3; }
  if (letra === 'o') { return 4; }
  if (letra === 'u') { return 5; }
  return letra;
}
// eslint-disable-next-line complexity
function decodifique(num) {
  if (num === '1') { return 'a'; }
  if (num === '2') { return 'e'; }
  if (num === '3') { return 'i'; }
  if (num === '4') { return 'o'; }
  if (num === '5') { return 'u'; }
  return num;
}
function encode(string) {
  let imput = string.split('');
  let result = '';
  for (let key of imput) {
    result += codifique(key);
  }
  return result;
}
function decode(string2) {
  let imput = string2.split('');
  let result = '';
  for (let key of imput) {
    result += decodifique(key);
  }
  return result;
}

// Desafio 10
function objectMount(tec, nam) {
  let mount = { tech: tec, name: nam };
  return mount;
}

function techList(tech, name) {
  let result = [];
  let list = tech.sort();
  if (tech.length > 0) {
    for (let key of list) {
      result.push(objectMount(key, name));
    }
    return result;
  }
  return 'Vazio!';
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
