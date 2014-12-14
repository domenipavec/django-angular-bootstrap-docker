angular.module('mainModule')
    .factory('CountriesFactory', ['Restangular', function (Restangular) {
        return {
            getListOfEurope: function () {
                return Restangular.oneUrl('europe', 'http://restcountries.eu/rest/v1/region/europe').getList().$object;
            }
        }
    }]);