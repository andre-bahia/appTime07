app.factory("pedidoService", pedidoService);

function pedidoService(){
    var pedidos = [];

    function getPedidos(){
        return pedidos;
    }

    function savePedido(pedido){  
        pedidos.push(pedido);
    }

    function getByCode(codigo){
        var data;
        for (var pedido in pedidos) {
            if (pedidos[pedido].codigo === codigo) {
                data = pedidos[pedidos];
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
        pedidos.splice(index, 1);
        return pedidos;
    }

    return {
        getPedidos: getPedidos,
        savePedido: savePedido,
        getByCode: getByCode,
        editar: editar,
        remover: remover
    }
}