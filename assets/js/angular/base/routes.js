angular.module('mainModule')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/404.html");
        $stateProvider
            .state('404', {
                url: "/404.html",
                views: {
                    "FullContentView": {
                        templateUrl: 'errors/404.html'
                    }
                }
            })
    }]);