/**
 * Created by Hasan on 1/11/2016.
 */

(function () {

    angular.module("app", ['ui.router' , 'swxSessionStorage'])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    templateUrl: "views/home/homeView.html",
                    controller: 'HomeCtrl',
                    url: "/"
                })
                .state("users", {
                    templateUrl: "views/users/usersView.html",
                    controller: 'UsersCtrl',
                    url: "/users"
                })
                .state("login" , {
                    templateUrl: "views/account/loginView.html",
                    controller: "LoginCtrl",
                    url: "/account"
                })
                .state("register" , {
                    templateUrl: "views/register/registerView.html",
                    controller: "RegisterCtrl",
                    url: "/register"
                })
                .state("logout" , {
                    controller: "LogoutCtrl",
                    url: "/logout"
                })

        });

}());
