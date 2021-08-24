//transformar um numero quebrado com 2 casas decimais e trocar ponto por vírgula


let number = 12.4321564678

console.log(number.toFixed(2)) // toFixed fixa quantas casas decimais terão em number, no caso, 2;
console.log(number.toFixed(2).replace(".",",")) // aqui adicionamos o .replace, para trocar ponto por vírgula.


