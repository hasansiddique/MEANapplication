/**
 * Created by Hasan on 1/11/2016.
 */

(function () {

    angular.module("app")
        .controller("HomeCtrl", function ($scope, dataService) {
            $scope.users = dataService;
            if (dataService.isReady() === false) {
                dataService.getUsers()
                    .then(function (response) {
                        //--success
                    },
                    function (reason) {
                        //--error
                    }
                );
            }

        });

}());
