(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.humaneIst'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.humaneIst = factory();
    }
}(this, function() {
    return [
        '#D8D8D8',
        '#333333',
        '#EFE6D3',
        '#A68A4A',
        '#E3D5C1',
        '#FFFF96',
        '#FFFF00',
        '#400080',
        '#259241',
        '#2E53D1',
        '#937A42',
        '#675326',
        '#772200',
        '#305FD2',
        '#A80D4B'
    ];
}));