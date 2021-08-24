//manipulando arrays


let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("node.js")

// adicionar no começo
techs.unshift("React")

// remover do fim
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elementos do array
//console.log(techs.slice(1,2))

// remover 1 ou mais itens em qualquer posição do array
techs.splice(1)


// encontrar a posição de um elemento no array
let index = techs.indexOf("html")
techs.splice(index, 1)

console.log(techs)
