(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.dreamweaver'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.dreamweaver = factory();
    }
}(this, function() {
    return [
        '#999999',
        '#404040',
        '#2D2D44',
        '#CCCCCC',
        '#FFFFFF',
        '#616161',
        '#339900',
        '#FF6600',
        '#336600',
        '#005599',
        '#FF9900',
        '#0066FF',
        '#333333'
    ];
}));