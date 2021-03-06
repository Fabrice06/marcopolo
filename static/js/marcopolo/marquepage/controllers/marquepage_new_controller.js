(function () {
    'use strict';

    angular
        .module('marcopolo')
        .controller('marquepageNewCtrl', marquepageNewCtrl);

    marquepageNewCtrl.$inject = ['$scope', '$resource', '$location', 'Marquepage'];
    function marquepageNewCtrl($scope, $resource, $location, Marquepage) {
        
        var url = '';
        var nameMqp = '';
        
        $scope.mqpNewModel = {url: url, nameMqp: nameMqp};
        
        $scope.validate = function(mqp) {
                Marquepage.save({
                     uri:"marquepages", 
                    lien:mqp.url,
                    nom:mqp.nameMqp
                    },
                    // Ca se passe bien
                    function (pMarquepage) {
                      console.log("marquepageLogCtl Query OK");
                    // recupérer l'id de la personne en splitant l'url courante
                    // récupérer l'id du Mqp dans le Json suite au retour de la BD : idDuMqp
                    // et rediriger vers l'url /persons/idPerson/marquepages/idDuMqp
                    
                    },
                    // Ca se passe mal
                    function (pData, headers) {
                      console.log("marquepageLogCtl Query Echec");
                    }
              )
        };
        
        $scope.cancel = function() {
            //console.log("Canceling" + $scope.mqpNewModel.nameMqp + $scope.mqpNewModel.url);

            var nUrlArray=$location.url().split('/');
            var id = nUrlArray[2];
            $location.path('/persons/'+id+'/marquepages').replace();
        };
        
        
                
        		
		 // clic sur le bouton déconnexion
        $scope.onProfil = function () {

            console.log("clic marquepageDetailCtrl déconnexion en cours");
            // pour test uniquement
            $location.path('/persons/2').replace();
        };

        // clic sur le bouton profil
        $scope.onExit = function () {

            $location.path('/').replace();
        };
    } // function

})();