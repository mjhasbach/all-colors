(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.blueHippo'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.blueHippo = factory();
    }
}(this, function() {
    return [
        '#87CEEB',
        '#FFFFFF',
        '#B0C4DE',
        '#708090',
        '#000000',
        '#FFB6C1',
        '#1E90FF',
        '#C71585',
        '#008080',
        '#696969',
        '#2E8B57',
        '#4169E1',
        '#FF7F50',
        '#6495ED',
        '#FFA500',
        '#008B8B',
        '#D87093',
        '#20B2AA',
        '#CD5C5C',
        '#B22222',
        '#A020F0',
        '#CC0866'
    ];
}));