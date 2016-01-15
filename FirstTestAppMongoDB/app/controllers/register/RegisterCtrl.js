/**
 * Created by Hasan on 1/11/2016.
 */

(function () {
}(
    angular.module("app")
        .controller("RegisterCtrl", function ($scope, dataService, $location) {

            $scope.newUser = {};
            $scope.passwordMismatch = false;

            if($scope.newUser.password !== $scope.newUser.cPassword){
                $scope.passwordMismatch === true;
            }else if($scope.newUser.password === $scope.newUser.cPassword){
                $scope.passwordMismatch === true;
            }

            $scope.addNewUser = function () {
                dataService.addUser($scope.newUser)
                    .then(function (response) {
                        //--success
                        toastr.success("You have been registered successfully!");
                        $location.path("/account");
                    },
                    function (reason) {
                        //--error
                        toastr.error("Something went wrong while adding new user.");
                        $location.path("/register");
                    }
                );
            }

        })
));
