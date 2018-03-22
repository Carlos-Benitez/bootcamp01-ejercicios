(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('eventosController', eventosController)

    eventosController.$inject = ['$scope','dataService','$state'];

   
    function eventosController($scope, dataService,$state) {

        $scope.eventos =[]
        activate();
        function activate (){

           /* $scope.eventos = [
                {nombre: 'Bootcamp 1', direccion: 'Area 8'},
                {nombre: 'Hackaton GDG', direccion: 'Datapar'},
                {nombre: 'Meetup', direccion: 'Jesuiticas Plaza'},
          
            ]*/
            dataService.getData()
            .then(function (data){
                $scope.eventos = data;
            });
        
        }
        $scope.delete= function(id){
            dataService.deleteEvento(id)
                    .then(function(result){
                        console.log(result);
                        $state.go($state.current,{},{reload:true});
                    })
          
        }
    }
})();