function adicionaNumero(numero) {
        let array = []
        for (let i = 1; i <= numero; i++)
            array.push(i)
        return array
}

console.log(adicionaNumero(200))