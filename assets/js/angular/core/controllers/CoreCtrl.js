angular.module('mainModule')
    .controller('CoreCtrl', ['$scope', 'CoreFactory', function ($scope, CoreFactory) {
        /* Get user GEO Data */
        $scope.countries = CoreFactory.getListOfEurope();
    }]);