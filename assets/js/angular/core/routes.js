angular.module('mainModule')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('index', {
                url: "/",
                views: {
                    "MainView": {
                        templateUrl: 'core/landing.html'
                    }
                }
            })
    }]);