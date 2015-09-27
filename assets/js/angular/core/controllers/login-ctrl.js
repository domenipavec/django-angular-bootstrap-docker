angular.module('mainModule').controller('LoginCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
	$scope.login = function() {
		if ($scope.formsignin.$valid) {
			$http({
				method: 'POST',
				url: '/api/auth/login/',
				data: {
					'username': $scope.username,
					'password': $scope.password,
				},
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				transformRequest: function(obj) {
					var str = [];
					for(var p in obj)
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					return str.join("&");
				},
			}).success(function (html) {
				if (html.indexOf("text-error") > -1) {
					$scope.error = "Please enter a correct username and password."
				} else {
					$window.history.back();
				}
			});
		}
	};
}]);
