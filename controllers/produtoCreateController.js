app.controller("produtoCreateController", produtoController);

function produtoController(produtoService, $scope, $location){
    $scope.produto = {};
    $scope.title = "Cadastrar";

    function salvar(produto) {
        produtoService.saveProduto(produto);
        $location.path('produto');
    }

    function listar() {
        var produtos = produtoService.getProdutos();
        $scope.listaDeProdutos = produtos;
    }

    function remover(codigo) {
        console.log(codigo);
        $scope.listaDeProdutos = produtoService.remover(codigo);
    }

    listar();
    $scope.salvar = salvar;
    $scope.remover = remover;
}