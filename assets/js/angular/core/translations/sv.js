angular.module('mainModule')
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('sv', {
            button_text_en: 'Engelska',
            button_text_sv: 'Svenska',
            label_which_language_do_you_prefer: 'Vilket språk föredrar du?',

            meta_title_404: '404 - Sidan hittades inte',
            meta_keywords_404: 'Fel, 404',
            meta_description_404: 'Sidan du försökte nå existerar inte..',

            meta_title_core: 'Django AngularJs Boilerplate',
            meta_description_core: 'Det här är ett paket för att hjälpa dig på traven att komma igång meddjango, angular och mycket mer',
            meta_keywords_core: 'Django, angularjs, bootstrap, gulp, bower.',
        });
    }]);