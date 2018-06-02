define('main',
    [   'jquery',
        'knockout'],
    function ($, ko) {

    let menuChoise = function() {

        this.templatePrincipal = ko.observable('home');

        this.choiseOption = function(objeto, option) {
            option.templatePrincipal(objeto);
        }
    }

    ko.options.useOnlyNativeEvents = true;
    ko.applyBindings(new menuChoise());
});