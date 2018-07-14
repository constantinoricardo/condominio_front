<?php include 'topo.php'; ?>
    <div class="places" id="morador">
        <h1>Morador</h1>

        <div class="form">
            <form name="formulario">
                <input type="hidden" name="id" data-bind="value: id" />
                <div class="linhaForm">
                    <label>Nome:</label>
                    <input type="text" data-bind="value: nome" />
                </div>

                <div class="linhaForm">
                    <label>CPF:</label>
                    <input type="text" data-bind="value: cpf" />
                </div>

                <div class="linhaForm">
                    <label>Bloco:</label>
                    <select name="bloco" data-bind="options: blocosCombo, selectedOptions: choiseOption, optionsText: 'descricao', optionsValue: 'id', value: numeroBlocoSelected, event: {change: $data.findOptionsApartamento}"></select>
                </div>

                <div class="linhaForm linhaFormDouble">
                    <label>Apartamento:</label>
                    <select name="apartamento" data-bind="options: apartamentosCombo, selectedOptions: choiseApartamentoOption, optionsText: 'descricao', optionsValue: 'id', value: numeroApartamentoSelected"></select>
                </div>

                <div class="mensagem">
                    <span data-bind="text: mensagem"></span>
                </div>

                <div class="linhaFormButton">
                    <button class="buttonAdd" type="button" data-bind="click: add.bind(this), visible: buttonAdd">Inserir</button>
                    <button class="butoonAdd" type="button" data-bind="click: alterar.bind(this), visible: buttonAlterar">Alterar</button>
                    <button class="buttonReset" type="button" data-bind="click: reset.bind(this)">Limpar</button>
                </div>

            </form>
        </div>

        <div class="lista">
            <table class="table" id="table" data-bind="visible: tableMoradorVisible">
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Apartamento</td>
                        <td>Bloco</td>
                        <td colspan="2"></td>
                    </tr>
                </thead>

                <tbody data-bind="template {name: listaMoradorTemplatePrincipal, foreach: listaMorador}" ></tbody>
            </table>
        </div>

        <script type="text/html" id="tabelaCancelarMorador">
            <tr>
                <td data-bind="text: nome"></td>
                <td data-bind="text: apartamento"></td>
                <td data-bind="text: bloco"></td>
                <td>
                    <button type="button" data-bind="click: $root.cancelar">Cancelar</button>
                </td>
                <td>
                    <button type="button" data-bind="click: $root.remover">Excluir</button>
                </td>
            </tr>
        </script>

        <script type="text/html" id="tabelaMorador">
            <tr>
                <td data-bind="text: nome"></td>
                <td data-bind="text: apartamento"></td>
                <td data-bind="text: bloco"></td>
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