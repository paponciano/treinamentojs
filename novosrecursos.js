var produtos = [] //Array

function adicionarItem(elemento) {
    produtos.push(elemento)
}

if (Array.isArray(produtos)) {
    // produtos.push("maçã")
    // produtos.push("laranja")
    // produtos.push("limão")
    // produtos.push("banana")
    // produtos.push("manga")
    adicionarItem("maçã")
    adicionarItem("laranja")
    adicionarItem("limão")
    adicionarItem("banana")
    adicionarItem("manga")

    var primeiroItemArray = produtos[0]
    var ultimoItemArray = produtos[4]

    for (var i = 0;i < produtos.length;i++) {
        console.log(produtos[i])
    }

    produtos.forEach(function(item) {
        console.log(item)
    })

    // while (true) {
    //     //TODO: Codificação do WHILE
    // }
}