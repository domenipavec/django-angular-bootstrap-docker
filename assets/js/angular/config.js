angular.module('mainModule')
.config(['$httpProvider', 'RestangularProvider', '$translateProvider', '$locationProvider',
	function ($httpProvider, RestangularProvider, $translateProvider, $locationProvider) {
		$httpProvider.defaults.xsrfCookieName = 'csrftoken';
		$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
		RestangularProvider.setRequestSuffix('/');
		$translateProvider.preferredLanguage('en');
		$locationProvider.html5Mode(true);
	}]);