(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.coddingHorror'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.coddingHorror = factory();
    }
}(this, function() {
    return [
        '#CEFF84',
        '#000000',
        '#DFFFB0',
        '#808080',
        '#F8F8F8',
        '#EFEFEF',
        '#000080',
        '#801F91',
        '#444444',
        '#008000',
        '#004F27',
        '#885D3B',
        '#800000',
        '#222222',
        '#18AADE',
        '#8000FF',
        '#A65300'
    ];
}));