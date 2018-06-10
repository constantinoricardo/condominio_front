define('main',
    [   'jquery',
        'knockout'],
    function ($, ko) {

    let menuChoise = function() {

        this.bloco = ko.observable(false);

        this.choiseOption = function(objeto, option) {
            debugger;
            window.location.href = objeto + ".php";
        }
    }

    debugger;

    ko.options.useOnlyNativeEvents = true;
    ko.applyBindings(new menuChoise());
});