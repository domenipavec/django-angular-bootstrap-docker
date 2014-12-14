angular.module('mainModule')
    .controller('TranslateController', ['$scope', '$translate',
        function ($scope, $translate) {
            $scope.currentLanguage = $translate.use();

            $scope.changeLanguage = function (langKey) {
                $translate.use(langKey);
                $scope.currentLanguage = langKey;
            };
        }]);