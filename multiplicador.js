function criaMultiplicador(multiplicador) {
  return function multiplicacao(n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplicar = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplicar(2));
