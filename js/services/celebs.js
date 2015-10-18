angular.module('Celebs')

.factory('Celebs', function CelebsFactory($http) {

    return {
        getAll: function () {
            return $http({
                method: 'GET',
                url: '../Celebrity-Cards/blob/gh-pages/data/celebs.json'
            })
        },
        getOne: function (id) {
            return $http({
                method: 'GET',
                url: '../Celebrity-Cards/blob/gh-pages/data/celebs.json'
            })
        }
    }
})