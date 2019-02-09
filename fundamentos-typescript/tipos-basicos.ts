let estaPago: boolean = true;

let idade: number = 20;
let valor: number = 29.99;

//string 
let empresa: string = 'Algaworks';

//template strings

let nome: string = 'João';
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);
let concatenacaoTradicional = 'Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos';

//arrays
let notas: number[] = [8,6,7,8,10,9];

//tuple
let alunos: [string, number, string] = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);

//enum
enum Cor{Verde, Amarelo, Azul, Branco};

let cor: Cor = Cor.Amarelo;

//Any
let algumValor : any = 4;
algumValor = 'Agora é uma string';
algumValor = true;
//Biblioteca de terceiros
//Migração de JavaScript para TypeScript
//Array com vários tipos de dados

// void
function alerta() : void{
    //...alert('Operação não permitida');
}

//null e undefined -> Não faz muito sentido
let u : undefined = undefined;
let n : null = null;
//Null e undefined são subtipos dos outros tipos

nome = undefined;
nome = null;