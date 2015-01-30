angular.module('mainModule')
    .service('PageService', ['$rootScope', '$translate', function ($rootScope, $translate) {

        /* Initial PAGE rootScope */
        $rootScope.PAGE = { META: {}, STATUS_CODE: 200 };

        var define = {
            metaTitle: function (key) {
                $rootScope.PAGE.META.TITLE = $translate.instant(key);
            },
            metaDescription: function (key) {
                $rootScope.PAGE.META.DESCRIPTION = $translate.instant(key);
            },
            metaKeywords: function (key) {
                $rootScope.PAGE.META.KEYWORDS = $translate.instant(key);
            },
            statusCode: function (status) {
                $rootScope.PAGE.STATUS_CODE = status;
            }
        };

        /* Render page meta data, stack all of your page meta data
         * here and call them from your given controller
         * with PageService.output.coreMetaData() */

        this.output = {
            _404MetaData: function () {
                define.metaTitle('meta_title_404');
                define.metaKeywords('meta_keywords_404');
                define.metaDescription('meta_description_404');
                define.statusCode(404);
            },
            /* render coreMetaData in CoreCtrl, this could be
             * moved out to its own factory */
            coreMetaData: function () {
                define.metaTitle('meta_title_core');
                define.metaKeywords('meta_keywords_core');
                define.metaDescription('meta_description_core');
                define.statusCode(200);
            }
        };

    }]);