<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Condominio</title>

    <link rel="stylesheet" type="text/css" href="css/estilo.css" />
    <link rel="stylesheet" type="text/css" href="css/menu.css" />
</head>
<body>

<div class="container">

    <div class="topo">
        <h1 class="ccb">CCB</h1>
        <h1 class="agendamento">Agendamento Condomínio</h1>
    </div>

    <?php include 'html/menu.php'; ?>

    <?php include 'html/home.php'; ?>

    <?php include 'html/bloco.php'; ?>

    <?php include 'html/apartamento.php'; ?>

    <?php include 'html/morador.php'; ?>

    <?php include 'html/item.php'; ?>

    <?php include 'html/agendamento.php'; ?>

    <?php include 'html/relatorio.php'; ?>

</div>

<script data-main="js/require-config.js" src="node_modules/requirejs/require.js"></script>

</body>
</html>