angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){
    var ddo = {};
    ddo.restrict = "AE";
    ddo.transclude = true;
    ddo.scope = {
        titulo: '@'
    };
    ddo.templateUrl = 'js/directives/meu-painel.html' ;
    return ddo;
})
.directive('minhaFoto', function(){
    var ddo = {};
    ddo.restrict = "AE";
    ddo.transclude = true;
    ddo.scope = {
        titulo: '@',
        url: '@' 
    };
    ddo.templateUrl = 'js/directives/minha-foto.html' ;
    return ddo;
})
.directive('meuBotaoPerigo', function(){
    var ddo = {};
    ddo.restrict = "AE";
    ddo.transclude = true;
    ddo.scope = {
        nome: '@',
        acao: '&' 
    };
    ddo.template = '<button ng-click="acao()" class="btn btn-danger btn-block">{{nome}}</button>';
    return ddo;
})