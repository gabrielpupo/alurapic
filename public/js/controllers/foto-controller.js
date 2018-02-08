angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

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

        console.log($routeParams.fotoid);
        console.log($scope.foto);

        if ($scope.formulario.$valid) {

            if($routeParams.fotoid) {
             
                $http.put('v1/fotos/' + $routeParams.fotoid, $scope.foto)
                .success(function(){
                    $scope.mensagem = 'A Foto ' + $scope.foto._id + ' Foi Alterada';
                    $scope.formulario.$setPristine();
                })
                .error(function(erro){
                    $scope.mensagem = 'Não Foi Possível Atualizar a Foto ' + $scope.foto._id;
                    console.log(erro);
                }); 
    
            } else {
    
                $http.post('v1/fotos', $scope.foto)
                .success(function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Foto Incluida com Sucesso';
                    $scope.formulario.$setPristine();
                })
                .error(function(erro){
                    $scope.mensagem = 'Não Foi Possível Incluir a Foto';
                    console.log(erro);
                });
    
            }

        }
        
    };

    
});