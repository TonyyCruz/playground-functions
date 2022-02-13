// Desafio 11
function phoneNumberMount(numbers) {
  let prefix = '';
  let numbers1 = '';
  let numbers2 = '';
  for (let key of numbers) {
    if (prefix.length <= 1) {
      prefix = prefix.concat(key);
    } else if (numbers1.length <= 4) {
      numbers1 = numbers1.concat(key);
    } else { numbers2 = numbers2.concat(key); }
  }
  return `(${prefix}) ${numbers1}-${numbers2}`;
}

function repeatedNumbers(numbers) {
  for (let key of numbers) {
    let repeated = 0;
    for (let index of numbers) {
      if (key === index) {
        repeated += 1;
      }
    }
    if (repeated > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return phoneNumberMount(numbers);
}

function checkNumbers(numbers) {
  for (let key of numbers) {
    if (key > 9 || key < 0) {
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
  return amountOfNumbers(phoneNumber);
}

// Desafio 12
function triangleTest2(A, B, C) {
  if (Math.abs(A - B) < C && Math.abs(B - C) < A && Math.abs(A - C) < B) {
    return true;
  }
  return false;
}

function triangleTest(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineB + lineC > lineA && lineA + lineC > lineB) {
    return triangleTest2(lineA, lineB, lineC);
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (lineA > 0 && lineB > 0 && lineC > 0) {
    return triangleTest(lineA, lineB, lineC);
  }
  return false;
}

// Desafio 13
function waterTest(string) {
  let waterCups = 0;
  for (let key of string) {
    if (key > -1) {
      waterCups += Math.abs(key);
    }
    console.log(key);
  }
  return waterCups;
}

function hydrate(string) {
  let number = waterTest(string.split(' '));
  if (number <= 1) {
    return `${number} copo de água`;
  }
  return `${number} copos de água`;
}
// let bebidas = '3 cervejas e 5 vinho';
// hydrate(bebidas);

// console.log(bebidas.split(' '));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
