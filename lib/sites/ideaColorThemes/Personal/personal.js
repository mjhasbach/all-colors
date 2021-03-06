(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.personal'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.personal = factory();
    }
}(this, function() {
    return [
        '#3399FF',
        '#FFFFFF',
        '#787878',
        '#000000',
        '#D4D4D4',
        '#F0D8A8',
        '#CECCF7',
        '#2A00FF',
        '#3F7F5F',
        '#3F5FBF',
        '#7F7F9F',
        '#7F9FBF',
        '#858585',
        '#008000',
        '#FF8000',
        '#0000FF',
        '#646464',
        '#0000C0',
        '#E62600'
    ];
}));