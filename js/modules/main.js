define('main',
    [   'jquery',
        'knockout'],
    function ($, ko) {

    let main = function() {

        this.origin = function() {
            return window.location.origin;
        }
    };

    return new main();
});