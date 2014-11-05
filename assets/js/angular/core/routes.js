angular.module('mainModule')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('index', {
                url: "/",
                views: {
                    "MainView": {
                        templateProvider: ['$timeout', '$templateCache', function ($timeout, $templateCache) {
                            return $templateCache.get('core/landing.html');
                        }]
                    }
                }
            })
    }]);