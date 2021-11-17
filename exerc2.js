/* 1) Crie uma função chamada "incluirAtividade" que recebe uma string contendo uma atividade a ser feita no dia.
Adicione essa atividade em um array.
2) Crie uma função chamada "proximaAtividade" que retorna a primeira posição do array com a próxima atividade e a ser feita.
Faça também uma verificação para que caso não haja nenhuma atividade para fazer (array vazio) uma mensagem seja retornada 
"Não há próximas atividades". 3) Crie uma função chamada "atividadeConcluida" que remove a primeira atividade do array
(primeira posição do array). Faça também uma verificação para que caso não haja nenhuma atividade para concluir 
(array vazio) uma mensagem seja retornada "Não há atividades para concluir".
Na imagem abaixo há um exemplo de chamadas e retornos esperados. (Envie um print do código feito no VS Code) *
*/

function incluirAtividade(lista, atividade) {
    lista.push(atividade)
};

function proximaAtividade(lista) {
    if (lista.length >= 1) {
        console.log(lista[0])
    } else {
        console.log("Não há próxima atividade")
    };
};

function atividadeConcluida(lista) {
    if (lista.length >= 1) {
        lista.shift()
    } else {
        console.log("Não há próximas atividades")
    };
};

var atividades = []

proximaAtividade(atividades)
incluirAtividade(atividades, 'programar')
incluirAtividade(atividades, 'pescar')
proximaAtividade(atividades)
atividadeConcluida(atividades)
proximaAtividade(atividades)
atividadeConcluida(atividades)
atividadeConcluida(atividades)

