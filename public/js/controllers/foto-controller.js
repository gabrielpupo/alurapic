angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.fotoid){
        recursoFoto.get({fotoId : $routeParams.fotoid}, function(foto){
            $scope.foto = foto;
        }), function(erro){
            console.log(erro);
        }
    }

    $scope.submeter = function() {

        if ($scope.formulario.$valid) {
            if($routeParams.fotoid) {
                recursoFoto.update({fotoId : $routeParams.fotoid}, $scope.foto, function(){
                    $scope.mensagem = 'A Foto ' + $scope.foto._id + ' Foi Alterada';
                    $scope.formulario.$setPristine();
                }), function(erro){
                    console.log(erro);
                }
            } else {
                recursoFoto.save($scope.foto, function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Foto Incluida com Sucesso';
                    $scope.formulario.$setPristine();
                }), function(erro){
                    $scope.mensagem = 'Não Foi Possível Incluir a Foto';
                    console.log(erro);
                }
            }
        }
    };    

    // //Get sem utilizar $resource
    // if($routeParams.fotoid){
    //     $http.get('v1/fotos/' + $routeParams.fotoid)
    //     .success(function(foto) {
    //         $scope.foto = foto;
    //     })
    //     .error(function(erro) {
    //         console.log(erro);
    //         $scope.mensagem = 'Não foi possível obter a foto de id ' + $routeParams.fotoId;
    //     });
    // }

    // //PUT sem utilizar $resource
    // $scope.submeter = function() {

    //     console.log($routeParams.fotoid);
    //     console.log($scope.foto);

    //     if ($scope.formulario.$valid) {
    //         if($routeParams.fotoid) {
    //             $http.put('v1/fotos/' + $routeParams.fotoid, $scope.foto)
    //             .success(function(){
    //                 $scope.mensagem = 'A Foto ' + $scope.foto._id + ' Foi Alterada';
    //                 $scope.formulario.$setPristine();
    //             })
    //             .error(function(erro){
    //                 $scope.mensagem = 'Não Foi Possível Atualizar a Foto ' + $scope.foto._id;
    //                 console.log(erro);
    //             }); 
    //         } else {
    //             $http.post('v1/fotos', $scope.foto)
    //             .success(function(){
    //                 $scope.foto = {};
    //                 $scope.mensagem = 'Foto Incluida com Sucesso';
    //                 $scope.formulario.$setPristine();
    //             })
    //             .error(function(erro){
    //                 $scope.mensagem = 'Não Foi Possível Incluir a Foto';
    //                 console.log(erro);
    //             });
    //         }
    //     }
    // };

});