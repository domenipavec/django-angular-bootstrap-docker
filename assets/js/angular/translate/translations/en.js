angular.module('mainModule')
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            lets_list_countries_in_europe: 'Let\'s list countries in Europe.',
            title_country: 'Country',
            title_native_name: 'Native name',
            title_capital: 'Capital',
            title_currencies: 'Currencies',
            title_languages: 'Languages',
            button_text_en: 'English',
            button_text_sv: 'Swedish'
        });
    }]);