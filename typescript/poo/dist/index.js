"use strict";
// AULA DE POO
// Classe: abstração
// Definindo a abstração de uma pessoa
class Pessoa {
    // Métodos: ação (funções)
    // Método construtor
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    dormir() {
        console.log(`${this.nome} está dormindo.`);
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            // Lançamento de erro
            throw new Error("CPF length is incorrect");
        }
        this._cpf = newCpf; // Correção do loop infinito
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, codigo) {
        super(nome, idade, altura, cpf);
        this.codigo = codigo;
    }
    ensinar() {
        console.log('Ensinando...');
    }
}
// Criando uma pessoa a partir da definição da Classe Pessoa
const pessoa1 = new Pessoa('Victor', 25, 1.75, "123.456-789-06");
console.log(pessoa1);
console.log(pessoa1.nome);
pessoa1.dormir();
pessoa1.cpf = '123.456-889-06'; // Ajuste da sintaxe
// Objeto da classe Professor
const professor = new Professor('Professor', 30, 1.60, "123.456-789-07", "0007");
// Polimorfismo
console.log(pessoa1 instanceof Pessoa); // true
console.log(professor instanceof Pessoa); // true
console.log(professor instanceof Professor); // true
