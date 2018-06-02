<script type="text/html" id="bloco">
    <div class="places">

        <h1>Bloco</h1>

        <div class="form">
            <form name="formulario" id="formulario_bloco">
                <div class="linhaForm">
                    <label>Número:</label>
                    <input type="number" name="numero" data-bind="value: numero" />
                </div>

                <div class="linhaForm">
                    <label>Descrição:</label>
                    <input type="text" name="descricao" data-bind="value: descricao" />
                </div>

                <div class="linhaFormButton">
                    <button class="buttonAdd" type="button" data-bind="click: add.bind(this)">Inserir</button>
                    <button class="buttonReset" type="button" data-bind="click: reset.bind(this)">Limpar</button>
                </div>

            </form>
        </div>

        <div class="lista">
            <table class="table" data-bind="foreach: list">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Número</th>
                        <th>Descrição</th>
                        <th colspan="2"></th>
                    </tr>
                </thead>

                <tbody data-bind="foreach: $data">
                    <tr>
                        <td data-bind="text: $data.id"></td>
                        <td data-bind="text: $data.numero"></td>
                        <td data-bind="text: $data.descricao"></td>
                        <td>
                            <button type="button">Editar</button>
                        </td>
                        <td>
                            <button type="button">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</script>