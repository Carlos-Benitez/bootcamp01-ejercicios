(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('eventosFormEditController', eventosFormEditController)

    eventosFormEditController.$inject = ['$scope','$state','$stateParams','dataService'];

    function eventosFormEditController($scope,$state,$stateParams,dataService) {
       
       dataService.getEventById($stateParams.id)
            .then(function(result){
                $scope.evento = result.data;
            })
            .catch(function(err){
                console.log(err);
                
            });

            $scope.actualizarEvento = function(evento){
                dataService.update(evento)
                .then(function (result) {
                    console.log(result);
                    $state.go('eventos');
                })
                .catch(function(err){
                    console.log(err);
                })
            }
       
        
    }
})();