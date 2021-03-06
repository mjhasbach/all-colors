(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.withLoveForDartEditor'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.withLoveForDartEditor = factory();
    }
}(this, function() {
    return [
        '#000000',
        '#FFFFFF',
        '#CCCCCC',
        '#BFBFBF',
        '#D8D8D8',
        '#0000FF',
        '#BF7B00',
        '#FF00FF',
        '#000099',
        '#0099CC',
        '#00688B',
        '#FF2500',
        '#006600',
        '#552200',
        '#0066FF',
        '#308014'
    ];
}));