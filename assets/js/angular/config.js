angular.module('mainModule')
    .config(['$httpProvider', 'RestangularProvider', '$translateProvider', '$locationProvider',
        function ($httpProvider, RestangularProvider, $translateProvider, $locationProvider) {
            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
            RestangularProvider.setRequestSuffix('/');
            $translateProvider.preferredLanguage('sv');
            $locationProvider.hashPrefix('!');
//            $locationProvider.html5Mode(true);
        }]);