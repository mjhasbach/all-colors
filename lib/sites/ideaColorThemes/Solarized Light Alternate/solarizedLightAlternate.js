(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.solarizedLightAlternate'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.solarizedLightAlternate = factory();
    }
}(this, function() {
    return [
        '#EEE8D5',
        '#586E75',
        '#93A1A1',
        '#FDF6E3',
        '#859900',
        '#D33682',
        '#DC322F',
        '#6C71C4',
        '#CB4B16',
        '#839496',
        '#2AA198'
    ];
}));