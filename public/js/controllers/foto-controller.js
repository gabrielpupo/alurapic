angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    console.log($routeParams.fotoid);
    

    if($routeParams.fotoid){
        $http.get('v1/fotos/' + $routeParams.fotoid)
        .success(function(foto) {
            $scope.foto = foto;
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto de id ' + $routeParams.fotoId;
        });
    }
    

    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            $http.post('v1/fotos', $scope.foto)
            .success(function(){
                $scope.foto = {};
                $scope.mensagem = 'Foto Incluida com Sucesso';
            })
            .error(function(erro){
                $scope.mensagem = 'Não Foi Possível Incluir a Foto';
                console.log(erro);
            });
        }
    };

});