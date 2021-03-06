(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.colorfulTheme'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.colorfulTheme = factory();
    }
}(this, function() {
    return [
        '#bfff23',
        '#ddff55',
        '#2ba3ff',
        '#13ff60',
        '#bc3f3c',
        '#9e031d',
        '#a9b7c6',
        '#1cb778',
        '#9bcc45',
        '#b841bb',
        '#ccb710',
        '#cc75ac',
        '#59b705',
        '#15aecc',
        '#1eaa9d',
        '#53d6ff',
        '#ffaf37',
        '#8658bb',
        '#ff1a29',
        '#24abbb',
        '#bb921b',
        '#bbff0d',
        '#ffca47',
        '#28ffc7',
        '#43ba11',
        '#9973be',
        '#92aa10',
        '#e817e8',
        '#b4e80b',
        '#e8cf01'
    ];
}));