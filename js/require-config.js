require.config({
    paths: {
        'jquery': '../node_modules/jquery/dist/jquery',
        'knockout': '../node_modules/knockout/build/output/knockout-latest',
        'main': '../js/modules/main',
        'bloco': '../js/modules/app/bloco'
    }
});

require(['main']);