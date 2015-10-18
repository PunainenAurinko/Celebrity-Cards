angular.module('Celebs')

.controller('MainCtrl', function ($scope, $http, Celebs) {

    // fetch all the data from the JSON file and display it on the page

    $scope.data;

    //    $http({
    //            method: 'GET',
    //            url: '../data/celebs.json'
    //        })

    Celebs.getAll()
        .then(function (response) {

            //success
            $scope.data = response.data;

        }, function (response) {
            //error
            console.log('Error, error, error..');
        });

});