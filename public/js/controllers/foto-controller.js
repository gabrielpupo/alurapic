angular.module('alurapic').controller('FotoController', function($scope, $http) {

    $scope.foto = {};
    $scope.mensagem = '';

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