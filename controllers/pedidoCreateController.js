app.controller("pedidoCreateController", pedidoController);

function pedidoController(pedidoService, $scope, $location, produtoService){
    $scope.pedido = {};
    $scope.pedido.itens = [];
    $scope.item = {};
    $scope.title = "Cadastrar";

    function salvar(pedido) {
        pedidoService.savePedido(pedido);
        //$location.path('produto');
    }

    function listar() {
        var pedidos = pedidoService.getPedidos();
        $scope.listaDePedidos = pedidos;
    }

    function remover(codigo) {
        $scope.listaDePedidos = pedidoService.remover(codigo);
    }

    function buscarProduto(codigo) {
       $scope.item = produtoService.getByCode(codigo);
    }
    
    function calculaDesconto(total, desconto){
           $scope.item.total =  total - desconto; 
    }

    function adicionarProduto(produto){
        $scope.pedido.itens.push(produto);
    }

    listar();
    $scope.salvar = salvar;
    $scope.remover = remover;
    $scope.buscarProduto = buscarProduto;
    $scope.calculaDesconto = calculaDesconto;
    $scope.adicionarProduto = adicionarProduto;
}