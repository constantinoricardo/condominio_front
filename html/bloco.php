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

    </div>
</script>