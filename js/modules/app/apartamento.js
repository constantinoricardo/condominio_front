define('apartamento', [
    'jquery',
    'knockout',
    'main',
    'jqueryui'
], function ($, ko, main) {

    function apartamentoMethods() {

        let self = this;

        self.numero = ko.observable("");
        self.bloco = ko.observable("");
        self.morador = ko.observable("");
        self.numeroBlocoSelected = ko.observable();

        self.listApartamento = ko.observableArray([]);
        self.buttonAdd = ko.observable(true);
        self.buttonAlterar = ko.observable(false);

        self.selectedItem = ko.observable();

        self.blocosCombo = ko.observableArray([]);
        self.tableApartamentoVisible = ko.observable(false);
        self.listaApartamentoTemplatePrincipal = ko.observable("tabelaApartamento");

        self.listaApartamentoTemplatePrincipal = function(item) {
            return self.selectedItem() === item ? 'tabelaCancelarApartamento' : 'tabelaApartamento';
        };

        self.cancelar = function() {

        };

        self.reset = function() {
            var blocosArray = self.blocosCombo();
            self.blocosCombo([]);
            blocosArray.map(function(v) {
                self.blocosCombo.push(v);
            });
            self.numero("");

        };

        self.getList = function() {
            let that = this;
            let origin = main.origin();

            $.ajax({
                url: origin+"/condominio/index.php/apartamento/find",
                type: "GET",
                dataType: "json",

                success: function(response) {
                    let showApartamento = (!response.length) ? false : true;
                    let data = Object.values(response);

                    that.tableApartamentoVisible(showApartamento);

                    data.map(function(v) {
                        if (v.morador == null)
                            v.morador = "Nenhum";

                        that.listApartamento.push(v);
                    });
                }
            });
        };

        self.remover = function() {

        };

        self.editar = function() {

        };

        self.alterar = function() {

        };

        self.upgradeTable = function() {
            self.listApartamento([]);
            self.getList();
        };

        self.add = function() {
            let origin = main.origin();
            let parameters = {
                "numero" : self.numero(),
                "bloco_id" : self.numeroBlocoSelected(),
                "morador_id": ""
            };

            $.ajax({
                url: origin + "/condominio/index.php/apartamento/inserir",
                type: "POST",
                data: parameters,
                dataType: "json",

                success: function(response) {
                    let message = response.message;
                    let status = response.status;

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

        self.getCombos = function() {

            let that = this;
            let origin = main.origin();

            $.ajax({
                url: origin+"/condominio/index.php/bloco/find",
                type: "GET",
                dataType: "json",

                success: function(response) {
                    let data = Object.values(response);
                    let option = {
                        "id": 0,
                        "numero": 0,
                        "descricao": "--Selecione--"
                    };

                    that.blocosCombo.push(option);
                    data.map(function(v) {
                        that.blocosCombo.push(v);
                    });
                }
            });
        };

        self.init = function() {

            self.getCombos();
            self.getList();
            ko.applyBindings(self, document.getElementById("apartamento"));
        }

    };

    return new apartamentoMethods();

});