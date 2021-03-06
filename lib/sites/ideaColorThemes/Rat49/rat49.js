(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.rat49'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.rat49 = factory();
    }
}(this, function() {
    return [
        '#E5E5E5',
        '#A5A5E5',
        '#FADAFA',
        '#D0D0D0',
        '#FAFAFA',
        '#000000',
        '#D8D8D8',
        '#FFFFFF',
        '#FFC600',
        '#7FB347',
        '#A7ED1C',
        '#A7DD0C',
        '#ACDF32',
        '#A9E577',
        '#BFA4A4',
        '#EFC090',
        '#79ABFF',
        '#BED6FF',
        '#D197D9',
        '#D25252'
    ];
}));