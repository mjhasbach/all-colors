(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.defaultTheme'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.defaultTheme = factory();
    }
}(this, function() {
    return [
        '#EEEEEE',
        '#000000',
        '#999999',
        '#FFFFFF',
        '#8000FF',
        '#EFEFEF',
        '#ab2525',
        '#0000FF',
        '#808080',
        '#FF8000',
        '#008000',
        '#800080',
        '#801f91',
        '#885d3b',
        '#800040',
        '#000080',
        '#FF00FF',
        '#9b5656',
        '#C4C4B7'
    ];
}));