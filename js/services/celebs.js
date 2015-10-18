angular.module('Celebs')

.factory('Celebs', function CelebsFactory($http) {

    return {
        getAll: function () {
            return $http({
                method: 'GET',
                url: 'http://tonk0006.github.io/Celebrity-Cards/data/celebs.json'
            })
        },
        getOne: function (id) {
            return $http({
                method: 'GET',
                url: 'http://tonk0006.github.io/Celebrity-Cards/data/celebs.json'
            })
        }
    }
})