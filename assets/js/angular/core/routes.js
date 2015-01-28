angular.module('mainModule')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('index', {
                url: "/",
                views: {
                    "FullContentView": {
                        templateUrl: 'core/landing.html'
                    }
                }
            })
            .state('index.swedish', {
                url: "swedish/",
                views: {
                    "MainView@index": {
                        templateUrl: 'core/partials/quote_in_swedish.html'
                    }
                }
            })
            .state('index.english', {
                url: "english/",
                views: {
                    "MainView@index": {
                        templateUrl: 'core/partials/quote_in_english.html'
                    }
                }
            })
    }]);