angular.module('alurapic').controller('FotosController', function($scope, recursoFoto, $routeParams) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    $scope.titulos = [];

    recursoFoto.query(function(fotos){
        $scope.fotos = fotos;
    }, function(erro){
        console.log(erro);
    });

    recursoFoto.query(function(titulos){
        $scope.titulos = titulos;
    }, function(erro){
        console.log(erro);
    });

    $scope.remover = function(foto) {
        recursoFoto.delete({fotoId:foto._id}, function(){
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);           //remove a foto do array
            $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
        }, function(erro){
            console.log(erro);
            $scope.mensagem = 'Não foi possível remover a foto' + foto.titulo;
        });
    }

    // //Requisição tipo GET sem uso do $resource
    // $http.get('v1/fotos')
    // .success(function(fotos){
    //     $scope.fotos = fotos;
    // })
    // .error(function(erro){
    //     console.log(erro);
    // });
 
    // //Requisição tipo DELETE sem uso do $resource
    // $scope.remover = function(foto) {
    //     $http.delete('v1/fotos/' + foto._id)
    //     .success(function() {
    //         var indiceFoto = $scope.fotos.indexOf(foto);
    //         $scope.fotos.splice(indiceFoto, 1);           //remove a foto do array
    //         $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
    //     })
    //     .error(function() {
    //         console.log(erro);
    //         $scope.mensagem = 'Não foi possível remover a foto' + foto.titulo;
    //     });
    // }
});