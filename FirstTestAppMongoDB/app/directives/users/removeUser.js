/**
 * Created by Hasan on 1/14/2016.
 */

(function () {

    angular.module("app")
        .directive("removeUser", function (dataService) {
            return {
                restrict: "E",
                templateUrl: "views/users/removeUser.html",
                scope: {
                    user: "="
                },
                controller: function ($scope) {
                    $scope.removing = false;
                    $scope.showRemoveBox = function () {
                        $scope.removing = !$scope.removing;
                    }
                    $scope.InitiateRemoval = function () {
                        dataService.removeUser($scope.user._id);
                        /*var index = $scope.user.indexOf($scope.user);
                        if (index > -1) {
                            $scope.user.splice(index, 1);
                        }*/
                    }

                }
            }
        })

}());
