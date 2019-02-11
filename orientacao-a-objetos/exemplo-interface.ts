interface Pessoa{
    idade : number;
    sexo ?: string; // não é obrigatório
}

function imprimirIdade(pessoa : Pessoa){
    console.log(pessoa.idade);
}

let joaoMarcos = {nome : 'João marcos', idade: 22};

imprimirIdade(joaoMarcos);