angular.module('mainModule')
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('sv', {
            button_text_en: 'Engelska',
            button_text_sv: 'Svenska',
            label_which_language_do_you_prefer: 'Vilket språk föredrar du?'
        });
    }]);