(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('eventosFormController', eventosFormController)

    eventosFormController.$inject = ['$scope','$state','$stateParams','dataService'];

    function eventosFormController($scope,$state,$stateParams,dataService) {
       
        $scope.crearEvento = function(evento){

          dataService.save(evento)
          .then(function(result){
            console.log(result);
            $state.go('eventos');
          })
          .catch(function(err){
            console.log(err)
          })


        }
      
      
      
        /*  activate();
        function activate (){

        }*/


        
    }
})();