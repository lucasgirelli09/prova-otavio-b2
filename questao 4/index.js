function isQuadradoPerfeito(numero) {
  if (numero < 0) {
    return false;
  }

  let i = 0;
  while (i * i <= numero) {
    if (i * i === numero) {
      return true;
    }
    i++;
  }

  return false;
}

const inputNumber = prompt("Digite um número:");
const numero = parseInt(inputNumber);

if (isQuadradoPerfeito(numero)) {
  console.log(`${numero} é um quadrado perfeito.`);
} else {
  console.log(`${numero} não é um quadrado perfeito.`);
}
