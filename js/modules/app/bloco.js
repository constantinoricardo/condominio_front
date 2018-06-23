define('bloco', [
    'jquery',
    'knockout',
    'main',
    'jqueryui'
], function ($, ko, main) {

    function blocoMethods() {

        const self = this;

        self.id = ko.observable();
        self.numero = ko.observable("");
        self.descricao = ko.observable("");
        self.list = ko.observableArray([]);
        self.buttonAdd = ko.observable(true);
        self.buttonAlterar = ko.observable(false);

        self.selectedItem = ko.observable();

        self.listaBlocoTemplatePrincipal = ko.observable('tabelaBloco');

        self.tableBlocoVisible = ko.observable(false);

        self.editar = function(item) {
            self.id(item.id);
            self.numero(item.numero);
            self.descricao(item.descricao);

            self.buttonAdd(false);
            self.buttonAlterar(true);

            self.selectedItem(item);
        };

        self.listaBlocoTemplatePrincipal = function(item) {
            return self.selectedItem() === item ? 'tabelaCancelarBloco' : 'tabelaBloco';
        };

        self.cancelar = function() {
            self.id("");
            self.numero("");
            self.descricao("");

            self.buttonAdd(true);
            self.buttonAlterar(false);

            self.selectedItem(null);
        };

        self.getList = function() {
            let that = this;
            let origin = main.origin();

            $.ajax({
                url: origin+"/condominio/index.php/bloco/find",
                type: "GET",
                dataType: "json",

                success: function(response) {
                    let showBloco = (!response.length) ? false : true;
                    let data = Object.values(response);

                    that.tableBlocoVisible(showBloco);

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
                        let origin = main.origin();

                        $.ajax({
                            url: origin + "/condominio/index.php/bloco/delete",
                            type: "POST",
                            data: {id: id},
                            dataType: 'json',

                            success: function(response) {
                                self.upgradeTable();
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

        self.upgradeTable = function() {
            self.list([]);
            self.getList();
        };

        self.alterar = function(item) {

            let origin = main.origin();
            let parameters = {
                "id" : self.id(),
                "numero" : self.numero(),
                "descricao" : self.descricao()
            };

            $.ajax({
                url: origin + "/condominio/index.php/bloco/alterar",
                type: "POST",
                data: parameters,
                dataType: "json",

                success: function(response) {
                    let message = response.message;
                    let status = response.status;
                    var parametros = parameters;

                    $('<div></div>').html(message).dialog({
                        title: "Informação",
                        resizable: false,
                        modal: true,
                        buttons: {
                            'Ok': function () {
                                $(this).dialog('close');

                                if (status == 1) {
                                    self.upgradeTable();
                                    self.reset();
                                }
                            }
                        }
                    });
                }
            });
        };

        self.add = function() {

            let origin = main.origin();
            let parameters = {
                "numero" : self.numero(),
                "descricao": self.descricao()
            };

            $.ajax({
                url: origin + "/condominio/index.php/bloco/inserir",
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
                                    self.upgradeTable();
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