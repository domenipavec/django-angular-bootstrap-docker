angular.module('mainModule')
    .factory('CoreFactory', ['$q', 'Restangular', function ($q, Restangular) {
        return {
            getListOfEurope: function () {
                return Restangular.oneUrl('europe', 'http://restcountries.eu/rest/v1/region/europe').getList().$object;
            }
        }
    }]);