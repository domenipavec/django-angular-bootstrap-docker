angular.module('mainModule')
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('sv', {
            lets_list_countries_in_europe: 'Låt oss lista alla länder i Europa',
            title_country: 'Land',
            title_native_name: 'Nativt namn',
            title_capital: 'Huvudstad',
            title_currencies: 'Valuta',
            title_languages: 'Språk',
            button_text_en: 'Engelska',
            button_text_sv: 'Svenska'
        });
    }]);