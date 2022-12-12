var soma = 0;
do {
  var numero = parseInt(prompt('Digite um numero:'));
  if (isNan(numero) || numero === -1) {
    continue;
  }
  soma += numero;
} while (numero !== -1);
alert(soma);
