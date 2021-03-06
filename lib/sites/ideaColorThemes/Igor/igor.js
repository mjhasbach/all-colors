(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.igor'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.igor = factory();
    }
}(this, function() {
    return [
        '#EEEEEE',
        '#000000',
        '#ffffff',
        '#999999',
        '#F2F2F2',
        '#EFEFEF',
        '#cccccc',
        '#0000A0',
        '#408080',
        '#801f91',
        '#444444',
        '#008040',
        '#004F27',
        '#885d3b',
        '#5c8198',
        '#222222',
        '#18AADE',
        '#8000FF',
        '#800000',
        '#566874',
        '#C4C4B7'
    ];
}));