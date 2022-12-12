var idade = parseInt(prompt('Digite sua idade:'));

if (idade >= 0 && idade <= 15) {
  alert('Jovens');
} else if (idade > 15 && idade < 65) {
  alert('Adultos');
} else if (idade >= 65) {
  alert('Idosos');
} else {
  alert('Valor inválido');
}
