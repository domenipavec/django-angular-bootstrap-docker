angular.module('mainModule', ['restangular', 'ui.router', 'ui.bootstrap', 'pascalprecht.translate'])
    .config(['$httpProvider', 'RestangularProvider', '$translateProvider', function ($httpProvider, RestangularProvider, $translateProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        RestangularProvider.setRequestSuffix('/');
        $translateProvider.preferredLanguage('en');
    }]);