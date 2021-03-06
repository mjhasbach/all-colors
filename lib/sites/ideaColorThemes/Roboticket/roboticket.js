(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.roboticket'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.roboticket = factory();
    }
}(this, function() {
    return [
        '#BDD8F2',
        '#484848',
        '#E0E0FF',
        '#AFBFCF',
        '#F5F5F5',
        '#585858',
        '#FFCFBB',
        '#FFDF99',
        '#AB2525',
        '#295F94',
        '#317ECC',
        '#AF0F91',
        '#000000',
        '#B05A65',
        '#AD95AF',
        '#CC9393',
        '#566874',
        '#885D3B',
        '#0A0B0C',
        '#55aa55',
        '#BC5A65',
        '#9B5656',
        '#808080',
        '#C4C4B7'
    ];
}));