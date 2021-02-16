console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())

class Notas{
    nota1: 10,
    nota2: 5.5,
    nota3: 7,
    nota4:8,
}

let provaFinal = new Notas;

console.log(provaFinal);