angular.module('mainModule', ['restangular', 'ui.router', 'ui.bootstrap'])
    .config(['$httpProvider', 'RestangularProvider', function ($httpProvider, RestangularProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        RestangularProvider.setRequestSuffix('/');
    }]);