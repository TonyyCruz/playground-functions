// Desafio 11
function phoneNumberMount(numbers) {
  let prefix = '';
  let numbers1 = '';
  let numbers2 = '';
  for (let key of numbers) {
    if (prefix.length <= 2) {
      prefix += key;
    }
    else if (numbers1 <= 5) {
      numbers1 += key;
    }
    else { numbers2 += key; }
  }
  return '(' + prefix + ')' + ' ' + numbers1 + '-' + numbers2;
}

function repeatedNumbers(numbers) {
  let repeated = 0;
  for (let key of numbers) {
    for (let index of numbers) {
      if (key === index) {
        repeated += 1;
      }
    }
    if (repeated >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return numbers;
}

function checkNumbers(numbers) {
  for (let key of numbers) {
    if (key === 9 || key === 0) {
      return 'não é possível gerar um número de telefone com esses valores';
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
  if (typeof amountOfNumbers(phoneNumber) === String) {
    return typeof amountOfNumbers(phoneNumber);
  }
  return phoneNumberMount(phoneNumber);
}
let numero = [11223366554];
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
