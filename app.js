var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:"templates/home.html",
        controller:"mainController"
    })
    .when('/produto', {
        templateUrl:"templates/produto.html",
        controller:"produtoCreateController"
    })
    .when('/produto/cadastrar', {
        templateUrl:"templates/produto-form.html",
        controller:"produtoCreateController"
    })
    .when('/produto/:code/editar', {
        templateUrl:"templates/produto-form.html",
        controller:"produtoEditController"
    })
    .when('/pedido', {
        templateUrl:"templates/pedido.html",
        controller:"pedidoCreateController"
    })
    .when('/pedido/cadastrar', {
        templateUrl:"templates/pedido-form.html",
        controller:"pedidoCreateController"
    })
    .when('/pedido/:code/editar', {
        templateUrl:"templates/pedido-form.html",
        controller:"pedidoEditController"
    })
    .otherwise({
        redirectTo: "/"
    });
});

app.config(function($locationProvider){
    $locationProvider.hashPrefix('');
});

