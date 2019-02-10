class Cliente{
    nome: string;
    idade: number;

    constructor(nome : string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() : string{
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos`;
    }
}

let joao : Cliente = new Cliente("João", 25);
let apresentacao = joao.apresentar();
console.log(apresentacao);
