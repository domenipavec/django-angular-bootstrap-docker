angular.module('mainModule')
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            button_text_en: 'English',
            button_text_sv: 'Swedish',
            label_which_language_do_you_prefer: 'Which language do you prefer?',

            meta_title_404: '404 - Page Not Found',
            meta_keywords_404: 'Error, 404',
            meta_description_404: 'The page you\'r trying to access does not exist.',

            meta_title_core: 'Django AngularJs Boilerplate',
            meta_description_core: 'This is a boilerplate which includes django angularjs bootstrap and more.',
            meta_keywords_core: 'Django, angularjs, bootstrap, gulp, bower.',
        });
    }]);