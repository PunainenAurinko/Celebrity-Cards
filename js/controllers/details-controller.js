angular.module('Celebs')

.controller('DetailsCtrl', function ($scope, $routeParams, Celebs) {

    // business logic goes here

    $scope.id = $routeParams.id;
    $scope.celeb = {};

    Celebs.getOne($scope.id)
        .then(function (response) {

            //success
            var celebs = response.data.celebs;

            celebs.forEach(function (clicked) {
                if (clicked.id == $scope.id) {
                    $scope.celeb = clicked;
                }
            });

        }, function (response) {
            //error
            console.log('Error, error, error..');
        });
});