angular.module('Celebs')

.factory('Celebs', function CelebsFactory($http) {

    return {
        getAll: function () {
            return $http({
                method: 'GET',
                dataType: 'jsonp',
                url: '../data/celebs.json'
            })
        },
        getOne: function (id) {
            return $http({
                method: 'GET',
                dataType: 'jsonp',
                url: '../data/celebs.json'
            })
        }
    }
})