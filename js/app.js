angular.module('Celebs', ['ngRoute'])

.config(function ($routeProvider) {

    //this runs automatically when the main module is created
    console.log('running config');

    //routing happens here

    $routeProvider
        .when('/', {
            templateUrl: 'templates/main.html',
            controller: 'MainCtrl'
        })
        .when('/details/:id', {
            templateUrl: 'templates/details.html',
            controller: 'DetailsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
})

.controller('MainCtrl', function ($scope) {

    /** 
    we are tying this to the interface (initially) by adding 
    ng-controller to the <main> element
    **/
    console.log('MainCtrl is initialized');

    // business logic goes here

    

})

.controller('DetailsCtrl', function ($scope, $routeParams) {

    $scope.itemID = $routeParams.id;

});