function notaFinal(aluno, nota) {
    if (nota >= 7){
        aprovados.push(aluno)
    } else {
        reprovados.push(aluno)
    }
}

function printarListas(){
    console.log('Aprovados:')
    for (x of aprovados){
        console.log(x)
    }
    console.log()
    console.log('Reprovados:')
    for (x of reprovados){
        console.log(x)
    }
}

let aprovados = []
let reprovados = []
notaFinal('Felipe', 10)
notaFinal('Higor', 9)
notaFinal('joão', 4)
notaFinal('Arthur', 7)
notaFinal('Mariana', 3)
notaFinal('Diego', 1)
printarListas()