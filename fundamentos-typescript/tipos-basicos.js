var estaPago = true;
var idade = 20;
var valor = 29.99;
//string 
var empresa = 'Algaworks';
//template strings
var nome = 'João';
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos");
var concatenacaoTradicional = 'Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos';
//arrays
var notas = [8, 6, 7, 8, 10, 9];
//tuple
var alunos = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
//enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var cor = Cor.Amarelo;
//Any
var algumValor = 4;
algumValor = 'Agora é uma string';
algumValor = true;
//Biblioteca de terceiros
//Migração de JavaScript para TypeScript
//Array com vários tipos de dados
// void
function alerta() {
    //...alert('Operação não permitida');
}
//null e undefined -> Não faz muito sentido
var u = undefined;
var n = null;
//Null e undefined são subtipos dos outros tipos
nome = undefined;
nome = null;
