/**
 * Created by Hasan on 1/11/2016.
 */

(function () {

    angular.module("app")
        .factory("dataService", function ($http, $q, $sessionStorage, $location) {
            var init = false;

            var isReady = function () {
                return init;
            }

            var usersList = [];
            var getUsers = function () {
                var deferred = $q.defer();

                $http.get("/data/")
                    .then(function (response) {
                        //--success
                        angular.copy(response.data, usersList);
                        init = true;
                        deferred.resolve();
                    },
                    function () {
                        deferred.reject();
                    }
                );

                return deferred.promise;
            }

            var addUser = function (user) {
                var deferred = $q.defer();
                user.age = getAge(user.dob);
                user.status = "Confirmed";

                $http.post("/data/save/", user)
                    .then(function (response) {
                        //--success
                        var newCreatedUser = response.data;
                        if (newCreatedUser === "false") {
                            toastr.error("This email address is already used.");
                        }
                        else {
                            usersList.push(user);
                            deferred.resolve(newCreatedUser);
                        }

                    },
                    function () {
                        //--error
                        deferred.reject();
                    });

                return deferred.promise;
            }

            var removeUser = function(id){
                var deferred = $q.defer();
                $http.delete("/data/delete/" + id)
                    .then(function (response) {
                        //-success
                        var newList = response.data;
                        angular.copy(response.data , usersList);
                        deferred.resolve(newList);
                    },
                    function () {
                        deferred.reject();
                    });

                deferred.promise;
            }

            var userAuthenticate = function (loggedInUser) {
                angular.forEach(usersList, function (value, key) {
                    if (value.email == loggedInUser.email
                        && value.password === loggedInUser.password) {
                        $sessionStorage.put('stored-user-email', value.email, 365);
                        $sessionStorage.put('stored-user-name', value.name, 365);
                        $sessionStorage.put('stored-user-age', value.age, 365);
                        $sessionStorage.put('stored-user-dob', value.dob, 365);
                        $sessionStorage.put('stored-user-status', value.status, 365);

                        $location.path("/users");
                    }
                });
            }

            var getLoggedInUser = function (user) {
                user.userStoredEmail = $sessionStorage.get('stored-user-email');
                user.userStoredName = $sessionStorage.get('stored-user-name');
                user.userStoredAge = $sessionStorage.get('stored-user-age');
                user.userStoredDob = $sessionStorage.get('stored-user-dob');
                user.userStoredStatus = $sessionStorage.get('stored-user-status');
            }

            function getAge(dateString) {
                var today = new Date();
                var birthDate = new Date(dateString);
                var age = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                return age;
            }

            return {
                getUsers: getUsers,
                addUser: addUser,
                usersList: usersList,
                isReady: isReady,
                userAuthenticate: userAuthenticate,
                getLoggedInUser: getLoggedInUser,
                removeUser: removeUser
            }

        }
    )

}());
