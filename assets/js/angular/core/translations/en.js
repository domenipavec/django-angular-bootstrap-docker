angular.module('mainModule')
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            button_text_en: 'English',
            button_text_sv: 'Swedish',
            label_which_language_do_you_prefer: 'Which language do you prefer?'
        });
    }]);