/**
 * Created by Hasan on 1/13/2016.
 */

(function () {

    angular.module("app")
        .directive("userLoginStatus", function (dataService) {
            return {
                strict: "E",
                templateUrl: "views/account/userLoginStatus.html",
                controller: function ($scope) {
                    $scope.user = {};
                    dataService.getLoggedInUser($scope.user);
                }/*,
                link: function(scope, el, attrs , ctrl){
                    scope.$watch(ctrl.user.userStoredName , function(newVal , olVal){
                        el[1].css('style' , 'none');
                    });
                }*/
            }
        });

}());
