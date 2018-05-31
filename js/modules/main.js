define('main',
    [   'jquery',
        'knockout',
        'bloco'],
    function ($, ko, bloco) {

    let menuChoise = function() {

        this.home = ko.observable(false);
        this.bloco = ko.observable(true);
        this.apartamento = ko.observable(false);
        this.agendamento = ko.observable(false);
        this.item = ko.observable(false);
        this.morador = ko.observable(false);

        this.choiseOption = function(objeto, option) {
            let menus = ['home', 'bloco', 'apartamento', 'agendamento', 'item', 'morador'];

            menus.map(function(menu) {
                option[menu](false);
            });

            option[objeto](true);

        }
    }

    ko.options.useOnlyNativeEvents = true;
    ko.applyBindings(new menuChoise());
});