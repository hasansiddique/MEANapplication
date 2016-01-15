/**
 * Created by Hasan on 1/13/2016.
 */

(function(){

    angular.module("app")
        .controller("LogoutCtrl" , function($sessionStorage , $location){
            $sessionStorage.empty();
            toastr.success("Successfully Logged Out." , "Logout Success");
            $location.path("/account");
        })

}());
