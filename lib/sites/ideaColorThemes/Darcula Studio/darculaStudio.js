(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.darculaStudio'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.darculaStudio = factory();
    }
}(this, function() {
    return [
        '#ff7100',
        '#4ec8af',
        '#9ac297',
        '#ccffab',
        '#ff0000',
        '#559ed7',
        '#4fac3c',
        '#fdfdfe',
        '#cc5900',
        '#2b2b2b'
    ];
}));