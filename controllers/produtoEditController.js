app.controller("produtoEditController", produtoEditController);

function produtoEditController($scope, $routeParams, produtoService, $location) {
    var codigo = $routeParams.code;
    $scope.title = "Editar";
    $scope.produto = {};

    function getByCode(cod){
        $scope.produto = produtoService.getByCode(cod); 
    }

    function salvar(produto) {
        produtoService.editar(produto);
        $location.path('produto');
    }

    getByCode(codigo);
    $scope.salvar = salvar;

}