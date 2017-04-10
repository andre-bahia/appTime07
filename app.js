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
    .otherwise({
        redirectTo: "/"
    });
});

app.config(function($locationProvider){
    $locationProvider.hashPrefix('');
});

