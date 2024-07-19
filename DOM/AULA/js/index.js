// Selecionar elemento do html através do document

// 1. Pelo nome da tag
const todoH1 = document.getElementsByTagName("h1")
const todoP = document.getElementsByTagName("p")

console.log(todoH1)
console.log(todoP)

// 2. Pela classe

const todosClasseParagrafo = document.getElementsByClassName("paragrafo")

console.log(todosClasseParagrafo)

// 3. Pelo nome da tag
const emailInput = document.getElementsByName("email")

console.log(emailInput)