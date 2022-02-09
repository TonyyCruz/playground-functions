// Desafio 11
function phoneNumberMount(numbers) {
  let prefix = '';
  let numbers1 = '';
  let numbers2 = '';
  for (let key of numbers) {
    if (prefix.length <= 1) {
      prefix = prefix.concat(key);
    }
    else if (numbers1.length <= 4) {
      numbers1 = numbers1.concat(key);
    }
    else { numbers2 = numbers2.concat(key); }
  }
  return `(${prefix}) ${numbers1}-${numbers2}`;
}

function repeatedNumbers(numbers) {
  let repeated = 0;
  for (let key of numbers) {
    for (let index of numbers) {
      if (key === index) {
        repeated += 1;
      }
    }
    if (repeated > 2) {
      return 'não é possível gerar um número de telefone com esses valores 2' + repeated;
    }
  }
  return phoneNumberMount(numbers);
}

function checkNumbers(numbers) {
  for (let key of numbers) {
    if (key === 9 || key === 0) {
      return 'não é possível gerar um número de telefone com esses valores 1';
    }
  }
  return repeatedNumbers(numbers);
}

function amountOfNumbers(numbers) {
  if (numbers.length === 11) {
    return checkNumbers(numbers);
  }
  return 'Array com tamanho incorreto.';
}

function generatePhoneNumber(phoneNumber) {
  return amountOfNumbers(phoneNumber);
}

let numero = [1, 1, 2, 2, 3, 3, 6, 6, 5, 5, 7];
console.log(generatePhoneNumber(numero));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
