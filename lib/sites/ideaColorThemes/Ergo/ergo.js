(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.ergo'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.ergo = factory();
    }
}(this, function() {
    return [
        '#CCCCCC',
        '#111111',
        '#F0F0F0',
        '#777777',
        '#E8E8E8',
        '#222222',
        '#BBBBBB',
        '#DDDDDD',
        '#D8D8D8',
        '#961574',
        '#821F01',
        '#820128',
        '#9C1A00',
        '#003300',
        '#552200',
        '#213B75',
        '#08225C',
        '#770000'
    ];
}));