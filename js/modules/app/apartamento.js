define('apartamento', [
    'jquery',
    'knockout',
    'jqueryui'
], function ($, ko) {

    function apartamentoMethods() {

        let self = this;

        self.init = function() {
            console.log("apartamento classic");

            ko.applyBindings(self, document.getElementById("apartamento"));
        }

    };

    return new apartamentoMethods();

});