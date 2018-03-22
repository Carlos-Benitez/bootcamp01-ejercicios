(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .service('dataService', dataService)

    dataService.$inject = ['$http'];

    function dataService($http) {
        this.getData = getData;
        this.save = save;
        this.getEventById= getEventById;
        this.update = update;
        this.deleteEvento = deleteEvento;

        function getData() { 

            return $http.get('http://localhost:2000/eventos')
                        .then(function(result){
                            return result.data;
                        })
                        .catch(function(err){
                            console.log(err);                           
                        });
        }

        function save(data){
            return $http.post('http://localhost:2000/eventos', data);
        }

        function getEventById(id){
            return $http.get('http://localhost:2000/eventos/'+id);
                        
        }

        function update(data){
            return $http.put('http://localhost:2000/eventos/'+data.id,data);
        }

        function deleteEvento(id){
            return $http.delete('http://localhost:2000/eventos/'+id);
        }

    }
})();