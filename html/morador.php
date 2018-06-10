<?php include 'topo.php'; ?>
    <div class="places">
        <h1>Morador</h1>

        <div class="form">
            <form name="formulario">
                <div class="linhaForm">
                    <label>Nome:</label>
                    <input type="text" />
                </div>

                <div class="linhaForm">
                    <label>CPF:</label>
                    <input type="text" />
                </div>

                <div class="linhaForm">
                    <label>Apartamento:</label>
                    <select name="apartamento"></select>
                </div>

                <div class="linhaFormButton">
                    <button class="buttonAdd" type="button" data-bind="click: add.bind(this)">Inserir</button>
                    <button class="buttonReset" type="button">Limpar</button>
                </div>

            </form>
        </div>
    </div>
<?php include 'cabecalho.php'; ?>