define('bloco', [
    'jquery',
    'knockout',
    'jqueryui'
], function ($, ko) {

    this.numero = ko.observable("");
    this.descricao = ko.observable("");

    this.add = function() {
        let parameters = {
            "numero" : this.numero(),
            "descricao": this.descricao()
        };
        let self = this;

        $.ajax({
            url: "http://localhost/condominio/index.php/bloco/inserir",
            type: "POST",
            data: parameters,
            dataType: 'json',

            success: function (response) {
                let message = response.message;
                let status = response.status;

                $('<div></div>').html(message).dialog({
                    title: "Informação",
                    resizable: false,
                    modal: true,
                    buttons: {
                        'Ok': function () {
                            $(this).dialog('close');

                            if (status == 1)
                                self.reset();
                        }
                    }
                });
            }
        });

    };

    this.reset = function() {
        this.numero("");
        this.descricao("");
    };


});