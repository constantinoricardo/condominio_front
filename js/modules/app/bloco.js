define('bloco', [
    'jquery',
    'knockout',
    'jqueryui'
], function ($, ko) {

    let blocoMethods = function() {

        const self = this;

        this.numero = ko.observable("");
        this.descricao = ko.observable("");
        this.list = ko.observableArray([]);

        this.getList = function() {
            let self = this;

            $.ajax({
                url: "http://localhost/condominio/index.php/bloco/find",
                type: "GET",
                dataType: "json",

                success: function(response) {
                    self.list.push(response);
                }
            });
        };

        this.remove = function() {

            let args = arguments;

            debugger;

            $('<div></div>').html("Deseja excluir esse bloco?").dialog({
                title: 'Bloco',
                resizable: false,
                modal: true,
                buttons: {
                    'Sim': function() {

                    }
                }
            });
        };

        this.add = function() {

            let parameters = {
                "numero" : self.numero(),
                "descricao": self.descricao()
            };

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

        this.getList();

    };

    ko.applyBindings(new blocoMethods(), document.getElementById("bloco"));

});