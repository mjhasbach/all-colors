(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.netbeans6'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.netbeans6 = factory();
    }
}(this, function() {
    return [
        '#CCCCCC',
        '#000000',
        '#EEEEEE',
        '#FFFFFF',
        '#ECEBA3',
        '#D8D8D8',
        '#0000E6',
        '#CE7B00',
        '#D25252',
        '#003385',
        '#B7B7B7',
        '#009900',
        '#001A49'
    ];
}));