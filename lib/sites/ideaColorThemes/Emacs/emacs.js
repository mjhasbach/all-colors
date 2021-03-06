(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.emacs'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.emacs = factory();
    }
}(this, function() {
    return [
        '#F07746',
        '#FFFFFF',
        '#E8F2FE',
        '#787878',
        '#FFFFE0',
        '#00008F',
        '#AFEEEE',
        '#000000',
        '#800080',
        '#BC8F8F',
        '#B22222',
        '#5F9EA0',
        '#228B22',
        '#B8860B',
        '#0000FF',
        '#646464'
    ];
}));