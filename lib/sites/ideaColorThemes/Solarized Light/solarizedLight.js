(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.solarizedLight'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.solarizedLight = factory();
    }
}(this, function() {
    return [
        '#ECE7D5',
        '#596D73',
        '#FDF6E3',
        '#586E75',
        '#657A81',
        '#B58900',
        '#2AA198',
        '#93A1A1',
        '#D30102',
        '#00FF00'
    ];
}));