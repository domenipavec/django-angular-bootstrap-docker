angular.module('mainModule')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
                        templateUrl: 'core/partials/swedish.html'
                    }
                },
                onEnter: ['$translate', function($translate) {
                    $translate.use('sv');
                }]
            })
            .state('index.english', {
                url: "english/",
                views: {
                    "MainView@index": {
                        templateUrl: 'core/partials/english.html'
                    }
                },
                onEnter: ['$translate', function($translate) {
                    $translate.use('en');
                }]
            })
    }]);