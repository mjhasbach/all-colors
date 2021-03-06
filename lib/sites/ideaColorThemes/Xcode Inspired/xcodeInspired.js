(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.xcodeInspired'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.xcodeInspired = factory();
    }
}(this, function() {
    return [
        '#B5D5FF',
        '#000000',
        '#FFFFFF',
        '#999999',
        '#DDDDDD',
        '#CCCCCC',
        '#AB2525',
        '#B309A1',
        '#C81B28',
        '#340DD4',
        '#1D8711',
        '#CC9393',
        '#05314D',
        '#6F33A7',
        '#558186',
        '#37595D'
    ];
}));