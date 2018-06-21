define('bloco', [
    'jquery',
    'knockout',
    'jqueryui'
], function ($, ko) {

    function blocoMethods() {

        const self = this;

        self.id = ko.observable();
        self.numero = ko.observable("");
        self.descricao = ko.observable("");
        self.list = ko.observableArray([]);
        self.buttonAdd = ko.observable(true);
        self.buttonAlterar = ko.observable(false);

        self.buttonEditar = ko.observable(true);
        self.buttonCancelar = ko.observable(false);

        self.listaBlocoTemplatePrincipal = ko.observable('tabelaBloco');

        self.editar = function(item) {

            debugger;
            
            self.id(item.id);
            self.numero(item.numero);
            self.descricao(item.descricao);

            self.buttonAdd(false);
            self.buttonAlterar(true);
            self.buttonEditar(false);
            self.buttonCancelar(true);
        };

        self.alterar = function() {

        };

        self.cancelar = function() {

        };

        self.getList = function() {
            let that = this;

            $.ajax({
                url: "http://localhost/condominio/index.php/bloco/find",
                type: "GET",
                dataType: "json",

                success: function(response) {
                    var data = Object.values(response);

                    data.map(function(v) {
                        that.list.push(v);
                    });
                }
            });
        };

        self.remover = function() {

            let args = arguments;
            let id = args[0].id;

            $('<div></div>').html("Tem certeza que deseja realmente excluir esse bloco?").dialog({
                title: 'Bloco',
                resizable: false,
                modal: true,
                height: 250,
                width: 400,
                buttons: {
                    'Sim': function() {
                        let that = this;
                        const item = args[0];

                        $.ajax({
                            url: "http://localhost/condominio/index.php/bloco/delete",
                            type: "POST",
                            data: {id: id},
                            dataType: 'json',

                            success: function(response) {
                                self.list.remove(item);
                                $(that).dialog('close');
                            }
                        });
                    },

                    'Não': function() {
                        $(this).dialog('close');
                    }
                }
            });
        };

        self.add = function() {

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
                    var parametros = parameters;
                    parametros.id = response.id;

                    $('<div></div>').html(message).dialog({
                        title: "Informação",
                        resizable: false,
                        modal: true,
                        buttons: {
                            'Ok': function () {
                                $(this).dialog('close');

                                if (status == 1) {
                                    self.list.push(parametros);
                                    self.reset();
                                }
                            }
                        }
                    });
                }
            });

        };

        self.reset = function() {
            self.numero("");
            self.descricao("");
        };

        self.init = function() {
            self.getList();

            ko.applyBindings(self, document.getElementById("bloco"));
        };

    };

    return new blocoMethods();
});