let numero = 20

const pi =  3.1415

let nome: string = 'WALISSON'

let correta: boolean

let resultado = numero * pi

const numeros: number[] = [1,2,3,4]

//const misto: (number | string)[] = ['Victor', 27, 1.77] //Evitar misturar tipos

const idades: number[] = []
idades.push(23)
idades.push(42)
idades.push(15)
idades.push(17)
idades.push(55)

const menorDeIdade = idades.filter((idade) => idade < 18)
console.log(menorDeIdade)

const pessoaTupla: [string, number] = ['Victor', 25] //"Tupla"

//Object Types

//Interface

// interface Person {
//    nome: string,
//    idade: number,
//    profissao?: string,
//    altura: number
// }

const pessoa: Person = {
   nome: 'Victor',
   idade: 25,
   profissao: 'Desenvolvedor',
   altura: 1.75
}

type Person = {
   nome: string,
   idade: number,
   profissao?: string,
   altura: number
}

function chooseNumber(numero1: number, numero2: number, criterio?: 'greater' | 'lower'): number {
   switch (criterio) {
       case 'greater':
           return numero1 > numero2 ? numero1 : numero2;
       case 'lower':
           return numero1 < numero2 ? numero1 : numero2;
       default:
           const numeroAleatorio = Math.random();
           return numeroAleatorio >= 0.5 ? numero1 : numero2;
   }
}

const numeroEscolhido = chooseNumber(10, 20);

console.log("numeroEscolhido", numeroEscolhido);
