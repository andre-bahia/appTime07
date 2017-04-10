app.factory("produtoService", produtoService);

function produtoService(){
    var produtos = [];

    function getProdutos(){
        return produtos;
    }

    function saveProduto(produto){  
        produtos.push(produto);
    }

    function getByCode(codigo){
        var data;
        for (var produto in produtos) {
            if (produtos[produto].codigo === codigo) {
                data = produtos[produto];
            }
        }
        return data;
    }

    function editar(produto){
        for (var produto in produtos) {
            if (produtos[produto].codigo === produto.codigo) {
                produtos[produto] = angular.copy(produto);
            }
        }
        return true;
    }

    function remover(index){
        var idx = produtos.indexOf(index);
        if(idx > -1){
             produtos.splice(idx, 1);
    
        }
        return produtos;
    }

    return {
        getProdutos: getProdutos,
        saveProduto: saveProduto,
        getByCode: getByCode,
        editar: editar,
        remover: remover
    }
}