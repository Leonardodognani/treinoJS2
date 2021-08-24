// manipulando strings e arrays


//separe um texto que contenha espaços, em um novo array onde cada textoé uma posição do array;
// depois disso transforme o array em um texto e onde eram espaços coloque _


let phrase = "meu espírito é selvagem"
let myArray = phrase.split(" ")
console.log(myArray) // aqui imprime separados por espaços uma array
let crazyPhrase = myArray.join("_")
console.log(crazyPhrase) // aqui imprime a array com _ entre cada elemento

