<div class="places" data-bind="visible: bloco">

    <h1>Bloco</h1>

    <div class="form">
        <form name="formulario">
            <div class="linhaForm">
                <label>Número:</label>
                <input type="number" data-bind="value: numero" />
            </div>

            <div class="linhaForm">
                <label>Descrição:</label>
                <input type="text" data-bind="value: descricao" />
            </div>

            <div class="linhaFormButton">
                <button class="buttonAdd" type="button" data-bind="click: add.bind(this)">Inserir</button>
                <button class="buttonReset" type="button" data-bind="click: reset.bind(this)">Limpar</button>
            </div>

        </form>
    </div>

</div>