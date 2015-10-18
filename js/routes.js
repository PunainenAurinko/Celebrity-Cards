angular.module('Celebs')

.config(function ($routeProvider) {

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