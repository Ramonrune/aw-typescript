//var, let e const

//var

function iniciarTime(iniciaJogo: boolean){

    var nome = 'Messi e amigos';
    // HOISTING
    
    if( iniciaJogo){
        var cidade = ' em Uberlândia';
    }

    console.log(`${nome} vão jogar ${cidade}`);
}

//let -- variavel apenas variavel no escopo
function iniciarTime1(iniciaJogo: boolean){

    var nome = 'Messi e amigos';
    let cidade = 'em São Paulo';
    
    if( iniciaJogo){
        cidade = 'em Uberlândia';
    }

    console.log(`${nome} vão jogar ${cidade}`);
}

//const - constante
function iniciarTime2(iniciaJogo: boolean){

    var nome : string = 'Messi e amigos';
    const cidade : string = 'em São Paulo';
    
    if( iniciaJogo){
        // cidade = 'em Uberlândia'; -- não pode
    }

    console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTime(false);
iniciarTime1(true);