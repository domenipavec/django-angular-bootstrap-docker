angular.module('mainModule')
    .controller('CoreCtrl', ['PageService', function (PageService) {
        PageService.output.coreMetaData();
    }]);