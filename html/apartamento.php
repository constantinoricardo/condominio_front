<?php include 'topo.php'; ?>
    <div class="places" id="apartamento">

        <h1>Apartamento</h1>

        <div class="form">
            <form name="formulario">
                <input type="hidden" name="id" data-bind="value: id" />
                <div class="linhaForm">
                    <label>Número do Apartamento:</label>
                    <input type="number" data-bind="value: numero" />
                </div>

                <div class="linhaForm">
                    <label>Bloco:</label>
                    <select name="bloco" data-bind="options: blocosCombo, selectedOptions: choiseOption, optionsText: 'descricao', optionsValue: 'id', value: numeroBlocoSelected"></select>
                </div>

                <div class="linhaFormButton">
                    <button class="buttonAdd" type="button" data-bind="click: add.bind(this), visible: buttonAdd">Inserir</button>
                    <button class="buttonAdd" type="button" data-bind="click: alterar.bind(this), visible: buttonAlterar">Alterar</button>
                    <button class="buttonReset" type="button" data-bind="click: reset.bind(this)">Limpar</button>
                </div>

            </form>
        </div>

        <div class="lista">
            <table class="table" id="table" data-bind="visible: tableApartamentoVisible">
                <thead>
                    <tr>
                        <th>Número</th>
                        <th>Bloco</th>
                        <th>Morador</th>
                        <th colspan="2"></th>
                    </tr>
                </thead>

                <tbody data-bind="template: { name: listaApartamentoTemplatePrincipal, foreach: listApartamento }" >
                </tbody>
            </table>
        </div>

        <script type="text/html" id="tabelaCancelarApartamento">
            <tr>
                <td data-bind="text: numero"></td>
                <td data-bind="text: bloco"></td>
                <td data-bind="text: morador"></td>
                <td>
                    <button type="button" data-bind="click: $root.cancelar">Cancelar</button>
                </td>
                <td>
                    <button type="button" data-bind="click: $root.remover">Excluir</button>
                </td>
            </tr>
        </script>

        <script type="text/html" id="tabelaApartamento">
            <tr>
                <td data-bind="text: numero"></td>
                <td data-bind="text: bloco"></td>
                <td data-bind="text: morador"></td>
                <td>
                    <button type="button" data-bind="click: $root.editar">Editar</button>
                </td>
                <td>
                    <button type="button" data-bind="click: $root.remover">Excluir</button>
                </td>
            </tr>
        </script>

    </div>
<?php include 'cabecalho.php'; ?>