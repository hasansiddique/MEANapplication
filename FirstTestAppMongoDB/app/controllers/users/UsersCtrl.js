/**
 * Created by Hasan on 1/11/2016.
 */

(function () {

    angular.module("app")
        .controller("UsersCtrl", function ($scope, dataService) {

            $scope.user = {};
            dataService.getLoggedInUser($scope.user);

            if ($scope.user.userStoredName != null) {
                toastr.success("You are Logged In as " + $scope.user.userStoredName, "Login Success");
            } else if ($scope.user.userStoredName == null) {
                toastr.error("You are not Logged In. Please Login First.", "Login Error");
            }

        });

}());
