app.controller("pedidoCreateController", pedidoController);

function pedidoController(pedidoService, $scope, $location){
    $scope.pedido = {};
    $scope.title = "Cadastrar";

    function salvar(pedido) {
        produtoService.saveProduto(produto);
        $location.path('produto');
    }

    function listar() {
        var pedidos = pedidoService.getPedidos();
        $scope.listaDePedidos = pedidos;
    }

    function remover(codigo) {
        $scope.listaDePedidos = pedidoService.remover(codigo);
    }

    listar();
    $scope.salvar = salvar;
    $scope.remover = remover;
}