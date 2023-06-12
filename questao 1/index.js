function primo(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const inputNumber = prompt("Digite um número:");
const number = parseInt(inputNumber);

const resultMessage = primo(number) ? `${number} é um número primo.` : `${number} não é um número primo.`;
console.log(resultMessage);

console.log("Números primos entre 1 e 1000:");
const primes = [];
for (let i = 2; i <= 1000; i++) {
  if (primo(i)) {
    primes.push(i);
  }
}
console.log(primes.join("\n"));
