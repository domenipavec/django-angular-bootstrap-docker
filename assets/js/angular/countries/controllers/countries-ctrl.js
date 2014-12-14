angular.module('mainModule')
    .controller('CountriesCtrl', ['$scope', 'CountriesFactory', function ($scope, CountriesFactory) {
        $scope.countries = CountriesFactory.getListOfEurope();
    }]);