(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.netbeansPlain'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.netbeansPlain = factory();
    }
}(this, function() {
    return [
        '#e9eff8',
        '#e9e8e2',
        '#ffa8a8',
        '#b0c5e3',
        '#fc9d9f',
        '#808080',
        '#969696',
        '#ce7b00',
        '#bde6aa',
        '#eceba3',
        '#afac66',
        '#ffff00',
        '#ffbe00',
        '#ffffff',
        '#f3ff0f',
        '#999999',
        '#ffb442',
        '#d83636',
        '#ff0000'
    ];
}));