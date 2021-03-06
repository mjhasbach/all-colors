(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.easyEyesYellow'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.easyEyesYellow = factory();
    }
}(this, function() {
    return [
        '#DCDCDC',
        '#000000',
        '#F6F6F6',
        '#999999',
        '#FFFFE6',
        '#EBEBEB',
        '#CCCCCC',
        '#0000A0',
        '#018A8A',
        '#801F91',
        '#444444',
        '#38B5B5',
        '#008040',
        '#004F27',
        '#885D3B',
        '#18AADE',
        '#5C8198',
        '#222222',
        '#8000FF',
        '#800000',
        '#566874',
        '#B0B0A3'
    ];
}));