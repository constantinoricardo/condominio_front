define('morador', [
    'jquery',
    'knockout',
    'main',
    'jqueryui'
], function($, ko, main) {

    function moradorMethods() {

        let self = this;

        self.id = ko.observable();
        self.nome = ko.observable("");
        self.cpf = ko.observable("");

        self.mensagem = ko.observable();

        self.numeroApartamentoSelected = ko.observable();
        self.numeroBlocoSelected = ko.observable();

        self.apartamentosCombo = ko.observableArray([]);
        self.blocosCombo = ko.observableArray([]);

        self.choiseOption = ko.observableArray([]);
        self.choiseApartamentoOption = ko.observable([]);

        self.listaMorador = ko.observableArray([]);

        self.selectedItem = ko.observable();

        self.buttonAdd = ko.observable(true);
        self.buttonAlterar = ko.observable(false);

        self.tableMoradorVisible = ko.observable(false);
        self.listaMoradorTemplatePrincipal = ko.observable("tabelaApartamento");

        self.listaMoradorTemplatePrincipal = function(item) {
            return self.selectedItem() === item ? 'tabelaCancelarMorador' : 'tabelaMorador';
        };

        self.findOptionsApartamento = function(item, event) {

            if (item.numeroBlocoSelected()) {
                let that = this;
                let origin = main.origin();

                $.ajax({
                    url: origin+"/condominio/index.php/apartamento/buscarApartamentoPorBlocoId",
                    type: "POST",
                    data: {'bloco_id' : item.numeroBlocoSelected()},
                    dataType: "json",

                    success: function(response) {
                        let data = Object.values(response);
                        let option = {
                            "id": 0,
                            "numero": 0,
                            "descricao": "--Selecione--"
                        };

                        that.apartamentosCombo([]);

                        if (response.length) {
                            that.mensagem("");
                            that.apartamentosCombo.push(option);
                            data.map(function (v) {
                                that.apartamentosCombo.push(v);
                            });
                        } else {
                            let blocoSelected = $("select[name='bloco'] option:selected").text();
                            that.mensagem("Todos os apartamentos do bloco " + blocoSelected + " estão ocupados");
                        }
                   }
                });
            }
        };

        self.add = function(item) {
            let origin = main.origin();

            let parameters = {
                "nome" : self.nome(),
                "cpf" : self.cpf(),
                "apartamento_id" : self.numeroApartamentoSelected()
            };

            $.ajax({
                url: origin + "/condominio/index.php/morador/inserir",
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

        self.getList = function(item) {

        };

        self.upgradeTable = function(item) {

        };

        self.alterar = function(item) {

        };

        self.reset = function(item) {

        };

        self.cancelar = function(item) {

        };

        self.remover = function(item) {

        };

        self.editar = function(item) {

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

            ko.applyBindings(self, document.getElementById("morador"));
        }
    };

    return new moradorMethods();
});