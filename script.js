/*// parte 1 criação de arrays

const pets = ["gato", "cão", "pato"]
const numeros = [10, 500, 25 ]
const arrayMisto = [10, "aula 10 arrays", true]
const umItem = [1]
const vazio=[]




//parte 2- vizualizando o comportamento dos arrays no console
console.log (pets.length);
console.log (pets[3]);
console.log (arrayMisto.includes(10));
console.log (arrayMisto.includes("aula 10 arrays"));
console.log (arrayMisto.includes(true));
console.log (umItem);
console.log (umItem.length);

//parte 3 copia de array e o uso do slice e push e splice

// const copiaPets = pets
// console.log(copiaPets,pets)
// copiaPets.push ("rato")
// console.log(copiaPets, pets)

const copiaPets = pets.slice()
console.log (copiaPets,pets)
copiaPets.push("rato")
console.log(copiaPets,pets)
copiaPets.splice(2,2)// splice (o primeiro é a aprtir de qual indice quero retirar, e depois a quantidade de itens)(nesse caso, os itens de copiaPet são gato, cao, pato e rato - a partir do incidce 2, quero remover dois itens, entao pato e rato sai fora)
console.log (copiaPets, pets)

// parte 4 usando o sort (ordenar o array)

console.log (pets.sort())//(ordenou em ordem alfabetica)
console.log(numeros)
console.log(numeros.sort())// ordena do menor por maior, porem ele usa o unicode, emtao se o numero tem mais de 1 digito , ele sempre leva em conmsideração o primeiro, entao 12 sempre vai vir antes de 3, 4 ou 5, pois o primeiro digito é 1. só da pra organizar direito com uma função*/

//obs: descomentar os /**/ acima deppis de apresentar, caso precise

//exercicio fixação
//crie um array, devem possuir só numeors, sem ordem especifica

const arrayFix = [4,2,36,12,-8]

//imprima o arrray original, depois ordene em ordem crescente e depois reversa

/*console.log (arrayFix)
console.log (arrayFix.sort())
console.log (arrayFix.reverse())
// retire o ultimo item do array
arrayFix.pop()
console.log (arrayFix)
//retire o numero que esta no indice 2
arrayFix.splice(2,1)
console.log (arrayFix)*/


