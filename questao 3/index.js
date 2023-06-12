function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  let contador = 2;
  while (contador <= numero) {
    fatorial *= contador;
    contador++;
  }

  return fatorial;
}

const inputNumber = prompt("Digite um número:");
const numero = parseInt(inputNumber);

const fatorial = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é: ${fatorial}`);
