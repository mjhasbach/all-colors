(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.notSoBright'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.notSoBright = factory();
    }
}(this, function() {
    return [
        '#b5b5b5',
        '#454545',
        '#8a8a8a',
        '#4a4a4a',
        '#7029dc',
        '#949494',
        '#10100f',
        '#1c35bf',
        '#387428',
        '#646461',
        '#df466d',
        '#666666',
        '#526da5',
        '#d4d4d4',
        '#5e5cdc',
        '#2d47bf',
        '#b8b8b8'
    ];
}));