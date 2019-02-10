let notasAlunos : number[] = [10, 8, 8.5, 7];

//indices -- in
for(let i in notasAlunos){
    console.log(i);
}

//valores -- off
for(let notaAluno of notasAlunos){
    console.log(notaAluno);
}

