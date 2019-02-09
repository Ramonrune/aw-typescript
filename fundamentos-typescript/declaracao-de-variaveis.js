//var, let e const
//var
function iniciarTime(iniciaJogo) {
    var nome = 'Messi e amigos';
    // HOISTING
    if (iniciaJogo) {
        var cidade = ' em Uberlândia';
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
//let -- variavel apenas variavel no escopo
function iniciarTime1(iniciaJogo) {
    var nome = 'Messi e amigos';
    var cidade = 'em São Paulo';
    if (iniciaJogo) {
        cidade = 'em Uberlândia';
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
//const - constante
function iniciarTime2(iniciaJogo) {
    var nome = 'Messi e amigos';
    var cidade = 'em São Paulo';
    if (iniciaJogo) {
        // cidade = 'em Uberlândia'; -- não pode
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(false);
iniciarTime1(true);
