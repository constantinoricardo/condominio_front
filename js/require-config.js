require.config({
    paths: {
        'jquery': '../node_modules/jquery/dist/jquery',
        'knockout': '../node_modules/knockout/build/output/knockout-latest',
        'jqueryui': '../node_modules/jqueryui/jquery-ui',
        'main': '../js/modules/main',
        'bloco': '../js/modules/app/bloco',
        'apartamento': '../js/modules/app/apartamento',
        'morador': '../js/modules/app/morador'
    }
});

let url = window.location.toString();
let array = url.split("/").reverse();
let page = array[0].replace(".php", "");

if (page == "bloco") {
    require(['bloco'], function(bloco) {
        bloco.init();
    });
}

if (page == "apartamento") {
    require(['apartamento'], function (apartamento) {
        apartamento.init();
    });
}

if (page == "morador") {
    require(['morador'], function(morador) {
        morador.init();
    });
}



