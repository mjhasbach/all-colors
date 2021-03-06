(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.tango'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.tango = factory();
    }
}(this, function() {
    return [
        '#EEEEEE',
        '#000000',
        '#999999',
        '#FFFFFF',
        '#EFEFEF',
        '#ab2525',
        '#688046',
        '#92679a',
        '#801f91',
        '#444444',
        '#17608f',
        '#05314d',
        '#CC9393',
        '#885d3b',
        '#5c8198',
        '#222222',
        '#9b5656',
        '#808080',
        '#37550d',
        '#566874',
        '#C4C4B7'
    ];
}));