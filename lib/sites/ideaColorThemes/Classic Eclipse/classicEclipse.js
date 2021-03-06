(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.classicEclipse'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.classicEclipse = factory();
    }
}(this, function() {
    return [
        '#D8D8D8',
        '#333333',
        '#FFFFFF',
        '#000000',
        '#7F0055',
        '#0000C0',
        '#FF0000',
        '#0000FF',
        '#000099',
        '#557F5F',
        '#3F55BF',
        '#990099',
        '#7F9FBF',
        '#006600',
        '#552200',
        '#FF5809',
        '#666666',
        '#990000'
    ];
}));