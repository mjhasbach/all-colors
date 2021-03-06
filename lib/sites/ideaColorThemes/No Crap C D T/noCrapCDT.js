(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.noCrapCDT'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.noCrapCDT = factory();
    }
}(this, function() {
    return [
        '#98A6AF',
        '#333333',
        '#EDEDED',
        '#A8A8A8',
        '#F3F3F3',
        '#000000',
        '#D8D8D8',
        '#FF0000',
        '#000066',
        '#991111',
        '#008800',
        '#990000',
        '#772200',
        '#5D5D5D',
        '#3B3B3B',
        '#5577CC'
    ];
}));