function arrayIgual(lista){
    todosIguais = true
    lista.push(lista[0])
    for (let x in lista){
        if (lista[x] !== lista[0]){
            todosIguais = false
            break
        }
    };
    return todosIguais
};

console.log(arrayIgual([true, true, true, true]))
console.log(arrayIgual(['test', 'test', 'test']))
console.log(arrayIgual([1, 1, 1, 2]))
console.log(arrayIgual(['10', 10, 10, 10]))
