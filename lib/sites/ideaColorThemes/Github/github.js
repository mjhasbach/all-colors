(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.github'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.github = factory();
    }
}(this, function() {
    return [
        '#E0E0B0',
        '#111111',
        '#DDDDDD',
        '#BBBBBB',
        '#FFFFFF',
        '#D8D8D8',
        '#000000',
        '#D25252',
        '#33AAAA',
        '#AAAAAA',
        '#777777',
        '#336699'
    ];
}));