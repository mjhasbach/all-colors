(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.minimal'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.minimal = factory();
    }
}(this, function() {
    return [
        '#Efefff',
        '#000066',
        '#aaccff',
        '#666666',
        '#ffffff',
        '#000000',
        '#EFEFEF',
        '#ab2525',
        '#5c8198',
        '#333333',
        '#334466',
        '#05314d',
        '#AAAAFF',
        '#566874'
    ];
}));