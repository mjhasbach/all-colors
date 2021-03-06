(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.eclipsePlain'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.eclipsePlain = factory();
    }
}(this, function() {
    return [
        '#e8f2fe',
        '#b2b4bf',
        '#646464',
        '#ff0000',
        '#408080',
        '#7f0055',
        '#404040',
        '#f4c82d',
        '#ff0080',
        '#c6dbae',
        '#7f007f',
        '#2a00ff',
        '#3f5fbf',
        '#3f7f7f',
        '#dcdcdc',
        '#3f7f5f',
        '#7f7f9f',
        '#7f9fbf',
        '#c0c0c0',
        '#800000',
        '#2c93f9',
        '#f0d8a8',
        '#f3dfb9'
    ];
}));