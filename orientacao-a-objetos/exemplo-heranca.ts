class Funcionario{

    nome : string;
    salario : number;

    constructor(nome : string, salario : number){
        this.nome = nome;
        this.salario = salario;
    }


    //se taxa n for informada, o valor padrão é de 7.5
    pagarImposto(taxa: number = 7.5){
        console.log(`Pagando ${this.salario * taxa / 100}`);
    }

}

class Secretario extends Funcionario{
   
    
}

class Executivo extends Funcionario{

    pagarImposto(taxa : number = 27.5){
        console.log(`Executivo paga mais!`);
        super.pagarImposto(taxa);

    }
}

let sarah = new Secretario('Sarah', 2000);
sarah.pagarImposto();

let jorge = new Executivo('Jorge', 30000);
jorge.pagarImposto();