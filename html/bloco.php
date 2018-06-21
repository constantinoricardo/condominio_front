<?php include 'topo.php'; ?>
    <div class="places" id="bloco">

        <h1>Bloco</h1>

        <div class="form">
            <form name="formulario" id="formulario_bloco">
                <input type="hidden" name="id" data-bind="value: id" />
                <div class="linhaForm">
                    <label>Número:</label>
                    <input type="number" name="numero" data-bind="value: numero" />
                </div>

                <div class="linhaForm">
                    <label>Descrição:</label>
                    <input type="text" name="descricao" data-bind="value: descricao" />
                </div>

                <div class="linhaFormButton">
                    <button class="buttonAdd" type="button" data-bind="click: add.bind(this), visible: buttonAdd">Inserir</button>
                    <button class="buttonAdd" type="button" data-bind="click: alterar.bind(this), visible: buttonAlterar">Alterar</button>
                    <button class="buttonReset" type="button" data-bind="click: reset.bind(this)">Limpar</button>
                </div>

            </form>
        </div>


        <div class="lista">
            <table class="table" id="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Número</th>
                        <th>Descrição</th>
                        <th colspan="2"></th>
                    </tr>
                </thead>

                <tbody data-bind="template : { name: listaBlocoTemplatePrincipal, foreach: list }">
                </tbody>
            </table>

            <script type="text/html" id="tabelaBloco">
                <tr>
                    <td data-bind="text: id"></td>
                    <td data-bind="text: numero"></td>
                    <td data-bind="text: descricao"></td>
                    <td>
                        <button type="button" data-bind="click: $root.editar, visible: $root.buttonEditar">Editar</button>
                        <button type="button" data-bind="click: $root.cancelar, visible: $root.buttonCancelar">Cancelar</button>
                    </td>
                    <td>
                        <button type="button" data-bind="click: $root.remover">Excluir</button>
                    </td>
                </tr>
            </script>
        </div>

    </div>
<?php include 'cabecalho.php'; ?>