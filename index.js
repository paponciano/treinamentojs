$(() => {

    var totalProdutos = 0

    $("#btnAdicionarItem").click(() => {
        if ($("#txtCodProduto").val() === "" || $("#txtNomeProduto").val() === ""
            || $("#txtValorProduto").val() === "") {
            alert("Valores obrigatórios não digitados")
        }
        else {
            $("#tblProdutos tbody").append(`<tr>
                <td>${$("#txtCodProduto").val()}</td>
                <td>${$("#txtNomeProduto").val()}</td>
                <td>R$ ${$("#txtValorProduto").val()}</td>
            </tr>`)

            totalProdutos = totalProdutos + parseFloat($("#txtValorProduto").val())

            $("#hTotalProdutos").text(`Total Produtos: R$ ${totalProdutos}`)

            //Limpando os campos na tela
            $("#txtCodProduto").val("")
            $("#txtNomeProduto").val("")
            $("#txtValorProduto").val("")
        }
    })

})