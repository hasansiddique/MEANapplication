/**
 * Created by Hasan on 1/11/2016.
 */

(function () {

    angular.module("app")
        .controller("LoginCtrl", function ($scope, dataService) {

            $scope.loginUser = {};
            $scope.users = dataService;

            $scope.loginUserAccount = function () {
                dataService.userAuthenticate($scope.loginUser);
            }

        });

}());
